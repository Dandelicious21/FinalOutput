import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import styles from '../config/styles';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  Image,
  SafeAreaView} from 'react-native';
const backIcon = "../assets/back.png";

export default function AccountSettings(props) {
  const {id,username,name} = props.loadUser;

  const logout = () => {
    props.clearUser("");
    props.clearPlantList([]);
    props.clearPlantCount("");
    props.change('home');
  }

  return (
      <View style={styles.defCont}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
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