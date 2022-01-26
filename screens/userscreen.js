import React,{ useRef , useEffect, useState } from 'react';
import styles from '../config/styles';
import config from '../config';
import protocol from '../config/protocol';
import Toast from 'react-native-toast-message';
import { TouchableWithoutFeedback, StatusBar, ToastAndroid, Image, Keyboard, ScrollView,
  Text, TouchableOpacity, View, TextInput
} from 'react-native';

const backIcon = "../assets/back.png";
const refreshIcon = "../assets/refresh.png";
const sortIcon = "../assets/sort.png";
const settingIcon = "../assets/settings.png";
const addIcon = "../assets/add.png";

export default function UserScreen(props) {
  const [search, setSearch] = useState("");
  const [imgArray,setImgArray] = useState([]);
  const [currentSort,setCurrentSort] = useState(1);

  const searchPlants = async(text) => {
    setSearch(text);

    let plantObj = {
      name:text,
    };

    await config .get("users/"+props.token)
    .then((res) => {
      const {_id,username,name} = res.data.message;  
      props.setUser({id:_id,username,name});

      plantObj["sortType"] = res.data.message.sortingType;
      changeSort(plantObj["sortType"]);
      config .post("plants/search/"+props.token,plantObj)
      .then((res) => {
        if(text === ""){
          props.alterPlantCount(res.data.message.length);
        }
        props.alterPlantList(res.data.message);
      })
      .catch((err) => console.log("Search loading failed: "+err.message)) 
    })
    .catch((err) => console.log("Sorting failed: "+err)) 
  }

  //Plant list mount rendering
  const mounted = useRef();
  useEffect(async() => {
    const user = {
      user_id: props.token
    };

    if(!mounted.current){
      if(props.loadToaster[0] != ""){
        const statusTypes = ['success','info','error'];
        const cmdTypes = ['added','updated','deleted'];
         
        let statNum = props.loadToaster[1];
        let txt = props.loadToaster[0];

        const subTxt = [
          `Welcome to the garden, ${txt}!`,
          `Changes were made to ${txt}`,
          `Goodbye, ${txt}! :--(`,
        ];

        Toast.show({
          type: statusTypes[statNum],
          text1: `Plant has been ${cmdTypes[statNum]}`,
          text2: subTxt[statNum]
        });
        
        props.alterToaster(["","",""]);
      }

      searchPlants("");
      mounted.current = true;
    }else{
      //...
    }
  },[])

  const refreshScreen = () => {
    Keyboard.dismiss();
    showRefreshToast();
    searchPlants("");
  }

  const changeSort = (sortIndex) => {
    setCurrentSort(sortIndex);
  }

  const sortPlants = async() => {
    if(props.loadPlantCount != 0){
      showSortToast(currentSort);
      const dataObj = {
        subUpdate:true
      }

      await config.post('users/update/'+props.token,dataObj)
        .then(res => {
           if(res.data.status == "error"){
           }else{
             changeSort(currentSort*-1); //state 
           } 
        })
        .catch(err => {
          console.log(err.message);
        })
      searchPlants("");
    }else{
      ToastAndroid.show(`No plants found !`, 
      ToastAndroid.SHORT);
    }
  }

  const viewPlant = (data) => {
    Keyboard.dismiss();
    props.loadPlant(data);
    props.change('plantinfo');
  }

  const showRefreshToast = () => {
    ToastAndroid.show('Refreshing plant lists...', ToastAndroid.SHORT);
  }

  const showSortToast = (index) => {
    var z = ["oldest","newest"];
    if(index == 1){
      z[0] = "newest";
      z[1] = "oldest";
    }

    ToastAndroid.show(`Sorting from ${z[0]} to ${z[1]}... `, 
      ToastAndroid.SHORT);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainUserCont}>
        <StatusBar backgroundColor={'#8ea486'} /> 
        <View style={styles.headerBar}>
          <Text style={styles.edenHeader}>eden</Text>
          <TouchableWithoutFeedback onPress={() => props.change('settings')}>
            <Image source={require(settingIcon)} style={styles.profIcon}/>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.stats}>
          <View style={styles.plantCount}>
              <Text style={styles.countTag}>Plant total</Text>
              <View style={styles.countCont}>
                <Text style={styles.countLabel}>{props.loadPlantCount}</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.addPlant} 
            onPress={() => props.change('addplant')}>
            <Image source={require(addIcon)} style={styles.addBtnIcon}/>
            <Text style={styles.addLabel}>Add Plant</Text>
          </TouchableOpacity>
          <View style={styles.miniBtnCont}>
            <TouchableOpacity onPress={refreshScreen} style={styles.miniBtn}>
              <Image source={require(refreshIcon)} style={styles.miniBtnIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={sortPlants} style={styles.miniBtn}>
              <Image source={require(sortIcon)} style={styles.miniBtnIcon}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thickLine}></View>
          <TextInput 
            onChangeText={searchPlants} 
            style={styles.searchBox} 
            placeholder="Search"
            value={search}
          />
        <View style={styles.lineBreak}></View>
          <ScrollView showsVerticalScrollIndicator={false} 
           contentContainerStyle={styles.plantPanels}>
           {props.loadPlantList && props.loadPlantList.map((data,index) => (
              <TouchableOpacity onPress={() => viewPlant(data)} 
                key={index}
                style={styles.plantCard}>
                
                <Image source={{uri:'http://'+protocol.address+'/backend/uploads/'+data["imgLink"]}} 
                  style={styles.plantCardImg}
                />
              
                <Text numberOfLines={1} style={styles.plantCardName}>{data["name"]}</Text>
              </TouchableOpacity>))}
          </ScrollView>   
        <Toast />
      </View>
    </TouchableWithoutFeedback>
  );
}

