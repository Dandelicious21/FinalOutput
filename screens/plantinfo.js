import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from '../config/styles';
import config from '../config';
import { Menu, MenuOptions,MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import { 
  TouchableOpacity, 
  StyleSheet, 
  Text, 
  View, 
  Image } from 'react-native';

export default function PlantInfo(props) {

  const backIcon = '../assets/back.png';
  const editIcon = '../assets/edit.png';
  const deleteIcon = '../assets/delete.png';
  const alterFormattedDate = (value) => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let newDate = (month[value.getMonth()])+' '+value.getDate()+', '+value.getFullYear()
    setFormattedDate(newDate);
  }

  const deletePlant = async() => {
    await config.delete("plants/"+props.loadPlant._id)
        .then((response) => {  
          if(response.data.status != "error"){
            props.alterToaster([props.loadPlant.name,"2"]);
            props.change('userscreen');
          }else{
            console.log(response.data.status.message);
          }
        })
        .catch(err => console.log(err.message));
  }

  return (
    <View style={styles.defCont}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
      <View style={styles.navB}>
        <TouchableOpacity onPress={() => props.change('userscreen')}>
          <Image source={require(backIcon)} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.navTxt}>Plant Information</Text>
        <Menu>
          <MenuTrigger>
            <Image source={require(editIcon)} style={styles.edit}/>
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={styles.optionsPanel}>
           <MenuOption onSelect={()=>props.change('editplant')} 
            style={styles.optionCont}>
             <Image source={require(editIcon)} style={styles.optionIcon}/>
             <Text style={styles.textOption}>Edit</Text>
           </MenuOption>
           <MenuOption onSelect={deletePlant} style={styles.optionCont}>
             <Image source={require(deleteIcon)} style={styles.optionIcon}/>
             <Text style={styles.textOption}>Delete</Text>
           </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <Image 
        source={
            {uri:'http://192.168.254.102:19000/backend/uploads/'+props.loadPlant.imgLink}
          } 
        style={styles.plantPic}
      />
      <Text style={styles.plantName}>{props.loadPlant.name}</Text>
      <View style={styles.infoCont}>
        <Text style={styles.label}>Species</Text>
        <Text style={styles.infoTxt}>{props.loadPlant.species}</Text>
        <Text style={styles.label}>Date Acquired</Text>
        <Text style={styles.infoTxt}>{props.loadPlant.dateAcquired}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.infoTxt}>{props.loadPlant.description}</Text>
      </View>
    </View>
  );
}

