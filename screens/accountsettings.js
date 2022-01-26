import React,{ useState } from 'react';
import styles from '../config/styles';
import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AccountSettings(props) {
  const backIcon = "../assets/back.png";
  const {id,username,name} = props.loadUser;

  const logout = () => {
    storeData();
    props.clearUser("");
    props.clearPlantList([]);
    props.clearPlantCount("");
    props.change('home');
  }

  const storeData = async () => {
    try{
      await AsyncStorage.removeItem("token")
    }catch(error){
      console.log("Cannot remove data "+error.message);
    }
  }

  return (
    <View style={styles.defCont}>
      <StatusBar backgroundColor={'#8ea486'} /> 
      <View style={styles.nav}>
        <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('userscreen')}>
          <Image source={require(backIcon)} style={styles.back}/>
        </TouchableOpacity>
      <Text style={styles.navTxt}>Account</Text>
      </View>
      <View style={styles.profileBox}>
          <View style={styles.credentials}>
            <Text style={styles.fullName}>{name}</Text>
            <Text style={styles.username}>@{username}</Text>
          </View>
      </View>
      <View style={styles.lineBreak}></View>
      <View style={styles.opt}>
          <TouchableOpacity onPress={()=>props.change('changepass')}>
            <Text style={styles.optTxt}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.optTxt}>Log out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}