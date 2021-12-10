import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import KeyboardAvoidingWrapper from '../config/KeyboardAvoidingWrapper';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  TouchableOpacity, 
  Image } from 'react-native';

export default function EditPlant(props) {
  const backIcon = "../assets/back.png";
  const saveIcon = "../assets/save.png";

  //controlled components
  const [plantName,setPlantName] = useState(props.getPlant.name);
  const [species,setSpecies] = useState(props.getPlant.species);
  const [dateAcquired,setDateAcquired] = useState(props.getPlant.dateAcquired);
  const [description,setDescription] = useState(props.getPlant.description);
  const [errorMessage,setErrorMessage] = useState("");

  const plantNameOnChange = (text) => {
    setPlantName(text);
  }

  const speciesOnChange = (text) => {
    setSpecies(text);
  }

  const dateAcquiredOnChange = (text) => {
    setDateAcquired(text);
  }

  const descriptionOnChange = (text) => {
    setDescription(text);
  }

  const checkDetails = async() => {
    const plant = {
      plantName,species,dateAcquired,description
    }
    
    var flag = true;
    for(let x in plant){
      plant[x] = plant[x].trim();
      if(plant[x].length == 0){
        flag = false;
        break;
      } 
    }

    if(flag){
      await config.post("plants/update/"+props.getPlant._id,plant)
        .then((response) => {  
          if(response.data.status != "error"){
            console.log("test");
            //Follow up data fetch
            config.get('plants/'+props.getPlant._id)
              .then((plantRes) => {  
                if(plantRes.data.status != "error"){
                  props.changePlant(plantRes.data.message);
                  props.change('plantinfo');
                }else{
                  setErrorMessage(plantRes.data.message);
                }
              })
            .catch(err => setMessage("Loading plant failed: "+err.message));
          }else{
            setErrorMessage(response.data.message);
          }
        })
        .catch(err => setErrorMessage("Add plant failed: "+err.message));
    }else{
      setErrorMessage("Missing fields");
    }
  }

  return ( 
    <View style={styles.defCont}>      
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" /> 
        <View style={styles.nav}>
          <TouchableOpacity onPress={()=>props.change('plantinfo')}>
            <Image source={require(backIcon)} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.navTxt}>Edit mode</Text>
          <TouchableOpacity onPress={checkDetails}>
            <Image source={require(saveIcon)} style={styles.save}/>
          </TouchableOpacity>
      </View>

      <KeyboardAvoidingWrapper percent={0.2}>
        <View style={{width:'100%',alignItems:'center'}}>
          <View style={styles.uploadBox}>
            <Text style={styles.uploadText}>Upload Photo</Text>
          </View>
          <TextInput onChangeText={plantNameOnChange} 
                  style={styles.inputField} placeholder="Name"
                  placeholderTextColor="#b6bfb8"
                  value={plantName}/>
          <TextInput onChangeText={speciesOnChange} 
                  style={styles.inputField} placeholder="Species"
                  placeholderTextColor="#b6bfb8"
                  value={species}/>
          <TextInput onChangeText={dateAcquiredOnChange}
                  style={styles.inputField} placeholder="Date Acquired(MM/DD/YYYY)"
                  placeholderTextColor="#b6bfb8"
                  value={dateAcquired}/>  
          <TextInput onChangeText={descriptionOnChange} 
                  style={styles.inputFieldDesc} 
                  placeholder="Description"
                  placeholderTextColor="#b6bfb8"
                  value={description}/>

          <Text style={styles.errMessage}>{errorMessage}</Text>
        </View>
      </KeyboardAvoidingWrapper>    
    </View>   
  );
}

const styles = StyleSheet.create({
  errMessage: {
    color:"red"
  },

  defCont: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },

  nav: { 
    paddingTop:'13%',
    padding:12,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#aac4a0'  
  },

  back: {
    width:19,
    height:19
  },

  save: {
    width:20,
    height:20
  },

  navTxt: {
    color:'black',
    fontSize:16,
    fontWeight:'bold'
  },

  uploadBox: {
    marginVertical: '10%',
    borderRadius: 15,
    borderColor: '#bbb',
    borderWidth: 2,
    height: '33%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadText: {
    fontSize: 17,
  },
  
  inputField: {
    width:'85%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    padding:4,
    paddingHorizontal: 17,
    borderColor:'#cdcdcd'
  },

  inputFieldDesc: {
    paddingBottom:'20%',
    width:'85%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    padding:4,
    paddingHorizontal: 17,
    borderColor:'#cdcdcd'
  },

});
