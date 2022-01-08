import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import React, { useState , useEffect, useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';
import config from '../config';
import KeyboardAvoidingWrapper from '../config/KeyboardAvoidingWrapper';
import DateTimePicker from "@react-native-community/datetimepicker"; 

import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  TouchableOpacity, 
  Image } from 'react-native';

export default function AddPlant(props) {
  //loaded components
  const {id,username,name} = props.loadUser;
  const backIcon = "../assets/back.png";
  const saveIcon = "../assets/save.png";
 
  //controlled components
  const [plantName,setPlantName] = useState("");
  const [species,setSpecies] = useState("");
  const [dateAcquired,setDateAcquired] = useState(new Date(Date.now()));
  const [description,setDescription] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const [image, setImage] = useState(null);
  const [errorBg,setErrorBg] = useState("white");
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [formattedDate,setFormattedDate] = useState("");

  const uploadImageData = () => {
    Keyboard.dismiss();

    let name = plantName;
    let userID = id;

    var plantChunks = {
      name,species,description
    }
    
    var flag = true;
    for(let x in plantChunks){
      plantChunks[x] = plantChunks[x].trim();
      if(plantChunks[x].length == 0){
        flag = false;
        break;
      } 
    }

    if(flag && image !== null){
      const formData = new FormData();
      formData.append('name',name);
      formData.append('userID',userID);
      formData.append('species',species);
      formData.append('dateAcquired',formattedDate.toString());
      formData.append('description',description);
      formData.append('imgLink',{
        uri:image,
        type:'image/jpg',
        name:id+'.jpg'
      });

      const header = {
        headers: {
          "Content-type": "multipart/form-data"
        }
      }
      
      config.post('plants/add',formData,header)
        .then(res => {
           if(res.data.status != "error"){
            props.alterToaster([plantName,"0"]);
            props.change('userscreen');
           }else{
            alterErrorMessage(res.message);  
           }
        })
        .catch(err => {
          alterErrorMessage(err.message);
        })
    }else{
      alterErrorMessage("Missing field or image");
    }  
  }

  const clearErrorMessage = () => {
    setErrorBg("white");
    setErrorMessage("");
  }

  const alterErrorMessage = (txt) => {
    setErrorMessage(txt);
    setErrorBg('#ffdedb');
  }

  const alterImgResLink = (linkData) => {
    setImgResLink(linkData);
  }

  const plantNameOnChange = (text) => {
    clearErrorMessage();
    setPlantName(text);
  }

  const speciesOnChange = (text) => {
    clearErrorMessage();
    setSpecies(text);
  }

  const descriptionOnChange = (text) => {
    clearErrorMessage();
    setDescription(text);
  }

  //Image Picking
  const mounted = useRef();
  useEffect(() => {
    if(!mounted.current){
      (async () => {
        if (Platform.OS !== 'android') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
      alterFormattedDate(dateAcquired);
      mounted.current = true;
    }else{
      //
    }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //End of Image Picking

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onDateChange = (event, value) => {
    const currentDate = value || dateAcquired;
    setIsPickerShow(Platform.OS === 'ios');
        
    if(event.type == "set") {
      alterFormattedDate(value);
      setDateAcquired(value);

    }else{
      return null
    }
  };

  const alterFormattedDate = (value) => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let newDate = (month[value.getMonth()])+' '+value.getDate()+', '+value.getFullYear()
    setFormattedDate(newDate);
  }

  return ( 
    <View style={styles.defCont}>      
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" /> 
      <View style={styles.nav}>
        <TouchableOpacity onPress={()=>props.change('userscreen')}>
          <Image source={require(backIcon)} style={styles.back}/>
        </TouchableOpacity> 
        <Text style={styles.navTxt}>Add Plant</Text>
        <TouchableOpacity onPress={uploadImageData}>
          <Image source={require(saveIcon)} style={styles.save}/>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingWrapper percent={0.2}>
        <View style={styles.formCont}>
          <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
             {!image && <Text style={styles.tapInfo}>Tap to add or{'\n'} change photo</Text>}
             {image && <Image source={{ uri: image }} 
             style={styles.imagePanel} />}
          </TouchableOpacity>
          <TextInput onChangeText={plantNameOnChange} 
                  maxLength={20}
                  style={styles.inputField} placeholder="Name"
                  placeholderTextColor="#b6bfb8"
                  value={plantName}/>
          <TextInput onChangeText={speciesOnChange}
                  maxLength={30} 
                  style={styles.inputField} placeholder="Species"
                  placeholderTextColor="#b6bfb8"
                  value={species}/>
          <View style={styles.dateField}>
            <Text style={styles.pickedDate}>{formattedDate.toString()}</Text>
          
            {!isPickerShow && (
              <TouchableOpacity 
                  onPress={showPicker} style={styles.dateBtn}>
                <Text style={styles.dateBtnTxt}>Date Acquired</Text>
              </TouchableOpacity>
            )}

            {isPickerShow && (
               <DateTimePicker
                value={dateAcquired}
                mode="datetime"
                is24Hour={true}
                display="default"
                onChange={onDateChange}
              />
            )}
          </View> 
          
          <TextInput onChangeText={descriptionOnChange}
                  maxLength={30} 
                  style={styles.inputFieldDesc} 
                  placeholder="Description"
                  placeholderTextColor="#b6bfb8"
                  value={description}/>

           <Text style={[styles.errMessage,{backgroundColor:errorBg}]}>
              {errorMessage}
          </Text>
        </View>
      </KeyboardAvoidingWrapper>    
    </View>   
  );
}

const styles = StyleSheet.create({
  imagePanel:{ 
    width: '100%', 
    height: '100%', 
    borderRadius: 13
  },
  formCont:{
    width:'100%',
    alignItems:'center'
  },

  tapInfo:{
    color:'#999',
    textAlign:'center'
  },

  errMessage: {
    borderRadius:3,
    padding:'2.4%',
    textAlign:'center',
    marginVertical:3,
    width:'85%',
    color:"#db3327"
  },

  defCont: {
    width:'100%',
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
    borderWidth: 1,
    height: '33%',
    width: '53%',
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

  dateField: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'10%',
    width:'85%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    padding:'3.5%',
    paddingHorizontal:'4.3%',
    borderColor:'#cdcdcd'
  },

  inputFieldDesc: {
    padding:'1%',
    paddingBottom:'13%',
    width:'85%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    paddingHorizontal: 17,
    borderColor:'#cdcdcd'
  },

  dateBtn: {
   color:'white',
   justifyContent:'center',
   alignItems:'center',
   padding:'1.5%',
   paddingHorizontal: '3%',
   backgroundColor: '#559782'
  },

  dateBtnTxt: {  
   color:'white',
  },

  pickedDate: {
    fontSize: 14,
    color: 'black',
    borderColor:'#cdcdcd', 
  },
  
  dateText: {
    fontSize:12,
    borderRadius:8,
    borderWidth:1,
    color: "#bbbbbb",
    borderColor:'#cdcdcd'  
  },

});
