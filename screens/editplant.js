import { Dimensions } from 'react-native';
import React, { useState , useEffect, useRef} from 'react';
import config from '../config';
import protocol from '../config/protocol';
import styles from '../config/styles';
import * as ImagePicker from 'expo-image-picker';
import KeyboardAvoidingWrapper from '../config/KeyboardAvoidingWrapper';
import DateTimePicker from "@react-native-community/datetimepicker"; 
import { StatusBar,ToastAndroid,Keyboard,StyleSheet,ScrollView,Text, 
  View,TextInput,TouchableOpacity,Image } from 'react-native';

export default function EditPlant(props) {
  //assets 
  const backIcon = "../assets/back.png";
  const saveIcon = "../assets/save.png";
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  //controlled components
  const [image, setImage] = useState(null);
  const [plantName,setPlantName] = useState(props.getPlant.name);
  const [species,setSpecies] = useState(props.getPlant.species);
  const [dateAcquired,setDateAcquired] = useState("");
  const [description,setDescription] = useState(props.getPlant.description);
  const [errorMessage,setErrorMessage] = useState("");
  const [imgResLink, setImgResLink] = useState("");
  const [errorBg,setErrorBg] = useState("white");
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [formattedDate,setFormattedDate] = useState(props.getPlant.dateAcquired);

  const parseDate = () => {
    var dt = props.getPlant.dateAcquired.split(" ");
    var r = 1;
    for(; r < month.length; r++) if(dt[r-1] == month[r-1])break;
    r += "";
    dt[0] = (r.length == 1)? "0"+r:r;
    dt[1] = dt[1].split(",")[0];
    if(dt[1].length == 1) dt[1] = "0"+dt[1];
    
    const subDate = new Date(dt[2]+'-'+dt[0]+'-'+dt[1]);
    setDateAcquired(subDate);
  }

  const uploadData = async() => {
    Keyboard.dismiss();
    var flag = true;
    var fieldIsMissing = false;
    var fieldIsChanged = false;
    let name = plantName;
    let userID = props.token;

    var plantChunks = {
      name,species,description
    }
    
    for(let x in plantChunks){
      plantChunks[x] = plantChunks[x].trim();
      if(plantChunks[x].length == 0){
        fieldIsMissing = true;
        break;
      } 
    }

    plantChunks["dateAcquired"] = formattedDate.toString();

    //if image is changed
    const formData = new FormData();
    formData.append('text','draft text');
    formData.append('imgLink',{
      uri:image,
      type:'image/jpg',
      name:props.token+'.jpg'
    });
  
    const header = {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }

    for(let y in plantChunks){
      if(plantChunks[y] != props.getPlant[y]){
        //if no changes were made, image will only be uploaded
        fieldIsChanged = true; 
        showUpdateToast();
      }
    }

    if(image !== null){
      showUpdateToast();
      await config.post('plants/updateImage/'+props.getPlant._id,formData,header)
        .then(res => {
          if(res.data.status != "error" && !fieldIsChanged){
             flag = false;
             props.alterToaster([plantName,"1"]);
             props.change('userscreen');  
          }
        })
        .catch(err => {
          alterErrorMessage(err.message);
        })
    }
    
    if(fieldIsChanged){
      if(fieldIsMissing){
        alterErrorMessage("Missing fields");
      }else{
        await config.post('plants/update/'+props.getPlant._id,plantChunks)
        .then(res => {
           if(res.data.status != "error"){
            props.alterToaster([plantName,"1"]);
            props.change('userscreen');
           }else{
            alterErrorMessage(err.message);
           }
        })
        .catch(err => {
          alterErrorMessage(err.message);
        })
      }
    }else{
      if(flag){
        alterErrorMessage("No changes were detected")
      }
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

  const plantNameOnChange = (text) => {
    clearErrorMessage();
    setPlantName(text);
  }

  const speciesOnChange = (text) => {
    clearErrorMessage();
    setSpecies(text);
  }

  const dateAcquiredOnChange = (text) => {
    clearErrorMessage();
    setDateAcquired(text);
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
      parseDate();
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
    let newDate = (month[value.getMonth()])+' '+value.getDate()+', '+value.getFullYear()
    setFormattedDate(newDate);
  }

  function showUpdateToast(){
    ToastAndroid.show('Updating details...', ToastAndroid.SHORT);
  }

  return ( 
    <View style={styles.defCont}>      
      <StatusBar backgroundColor={'#8ea486'} />  
        <View style={styles.navB}>
          <TouchableOpacity onPress={() => props.change('plantinfo')}>
            <Image source={require(backIcon)} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.navTxt}>Edit Plant</Text>
          <TouchableOpacity onPress={uploadData}>
            <Image source={require(saveIcon)} style={styles.save}/>
          </TouchableOpacity>
      </View>

      <KeyboardAvoidingWrapper percent={0.2}>
        <View style={styles.formCont}>
          <TouchableOpacity onPress={pickImage} style={styles.uploadBox}>
            {!image && 
              <Image 
              source={{uri:'http:/'+protocol.address+'/backend/uploads/'+props.getPlant.imgLink}} 
              style={styles.imagePanel} />}
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
