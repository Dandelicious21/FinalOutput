import { StatusBar } from 'expo-status-bar';
import React,{ useRef , useEffect, useState } from 'react';
import styles from '../config/styles';
import config from '../config';
import { 
  ScrollView,
  StyleSheet, 
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View, 
  TextInput,
  Image} from 'react-native';

const plantImg = '../assets/fortune.jpg';
const backIcon = "../assets/back.png";
const profMenu = "../assets/tmpCircle.png";

export default function UserScreen(props) {
  const {id,username,name} = props.loadUser;
  const [plants, setPlants] = useState([]);
  
  const mounted = useRef();
  useEffect(async() => {
    const user = {
      user_id: id
    };

    if(!mounted.current){
      await config .get("plants/findPlants/"+user.user_id)
        .then((res) => {
          setPlants(res.data.message);
        })
        .catch((err) => console.log("Plants loading failed: "+err));
      mounted.current = true;
    }else{
      //...
    }
  })

  const viewPlant = (id) => {
    config.get('plants/'+id)
        .then((response) => {  
          if(response.data.status != "error"){
            props.loadPlant(response.data.message);
            props.change('plantinfo');
          }else{
            setErrorMessage(response.data.message);
          }
        })
    .catch(err => setMessage("Loading plant failed: "+err.message));
  }

  return (
      <View style={styles.mainCont}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
        <View style={styles.headerBar}>
          <Text style={styles.edenHeader}>Eden</Text>
          <TouchableWithoutFeedback onPress={()=>props.change('settings')}>
            <Image source={require(profMenu)} style={styles.profIcon}/>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.stats}>
          <View style={styles.plantCount}>
              <Text style={styles.countTag}>Plant total</Text>
              <View style={styles.countCont}>
                <Text style={styles.countLabel}>1</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.addPlant} onPress={()=>props.change('addplant')}>
            <Text style={styles.addLabel}>Add Plant</Text>
          </TouchableOpacity>
          <View style={styles.miniBtnCont}>
            <View style={styles.miniBtn}></View>
            <View style={styles.miniBtn}></View>
          </View>
        </View>
        <View style={styles.lineBreak}></View>
        <TextInput style={styles.searchBox} placeholder="Search"
        ></TextInput>
        <ScrollView contentContainerStyle={styles.plantPanels}>
          {plants && plants.map((data,index) => (
            <TouchableOpacity onPress={() => viewPlant(data["_id"])} style={styles.plantCard} key={index}>
              <Image source={require(plantImg)} style={styles.plantCardImg}/>
              <View style={styles.plantCardNameCont}>
                <Text style={styles.plantCardName}>{data["name"]}</Text>
              </View>
            </TouchableOpacity>))} 
        </ScrollView>
      </View>
    );
}

