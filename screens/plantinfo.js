import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from '../config/styles';
import { 
  TouchableOpacity, 
  StyleSheet, 
  Text, 
  View, 
  Image } from 'react-native';

export default function PlantInfo(props) {
  //assets
  const plantImg = '../assets/fortune.jpg';
  const backIcon = "../assets/back.png";
  const editIcon = '../assets/edit-icon.png';

  //controlled components

  return (
    <View style={styles.defCont}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
      <View style={styles.navB}>
        <TouchableOpacity onPress={()=>props.change('userscreen')}>
          <Image source={require(backIcon)} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.navTxt}>Plant Information</Text>
         <TouchableOpacity>
          <Image source={require(editIcon)} style={styles.edit}/>
        </TouchableOpacity>
      </View>
      <Image style={styles.plantPic} source={require(plantImg)} />
      <Text style={styles.plantName}>{props.loadPlant["name"]}</Text>
      <View style={styles.infoCont}>
        <Text style={styles.label}>Species</Text>
        <Text style={styles.infoTxt}>{props.loadPlant["species"]}</Text>
        <Text style={styles.label}>Date Acquired</Text>
        <Text style={styles.infoTxt}>{props.loadPlant["dateAcquired"]}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.infoTxt}>{props.loadPlant["description"]}</Text>
      </View>
    </View>
  );
}

