import { StatusBar } from 'expo-status-bar';
import React,{ useRef , useEffect, useState } from 'react';
import styles from '../config/styles';
import config from '../config';
import Toast from 'react-native-toast-message';
import {Image as CacheImage} from 'react-native-expo-image-cache';
import {
  Image,
  ImageBackground, 
  Keyboard,
  ScrollView,
  StyleSheet, 
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View, 
  TextInput,
} from 'react-native';

const plantImg = '../assets/fortune.jpg';
const backIcon = "../assets/back.png";
const refreshIcon = "../assets/refresh.png";
const sortIcon = "../assets/sort.png";
const profMenu = "../assets/tmpCircle.png";
const addIcon = "../assets/add.png";

export default function UserScreen(props) {
  const {id,username,name} = props.loadUser;
  const [search, setSearch] = useState("");
  const [imgArray,setImgArray] = useState([]);

  const searchOnChange = async(text) => {
    setSearch(text);
    let plantObj = {
      name:text
    };
    
    await config .post("plants/search/"+id,plantObj)
      .then((res) => {
        props.alterPlantList(res.data.message);
        // var draft = [];

        // for(let c in res.data.message){
        //   draft[c] = require(props.loadPlant.imgLink);

        // }


      })
      .catch((err) => console.log("Search loading failed: "+err.message)) 
  }

  //Plant list mount rendering
  const mounted = useRef();
  useEffect(async() => {
    const user = {
      user_id: id
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

      await config .get("plants/findAll/"+user.user_id)
        .then((res) => {
          setImgArray(res.data.message.imgLink);
          props.alterPlantCount(res.data.message.length);
          props.alterPlantList(res.data.message);
        })
        .catch((err) => console.log("Plants loading failed: "+err));
      mounted.current = true;
    }else{
      //...
    }
  },[])

  const refreshScreen = () => {
    searchOnChange("");
  }

  const viewPlant = (data) => {
    props.loadPlant(data);
    props.change('plantinfo');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainUserCont}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
        <View style={styles.headerBar}>
          <Text style={styles.edenHeader}>eden</Text>
          <TouchableWithoutFeedback onPress={() => props.change('settings')}>
            <Image source={require(profMenu)} style={styles.profIcon}/>
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
            <TouchableOpacity style={styles.miniBtn}>
              <Image source={require(sortIcon)} style={styles.miniBtnIcon}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thickLine}></View>
          <TextInput 
            onChangeText={searchOnChange} 
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
                
                <CacheImage preview={{uri:'http://192.168.254.102:19000/backend/uploads/'+data["imgLink"]}} 
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

