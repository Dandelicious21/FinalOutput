import React,{ useState } from 'react';
import config from '../config';
import styles from '../config/styles';
import { StatusBar, TouchableWithoutFeedback, Keyboard, Text,
  TouchableOpacity, View, TextInput, Image, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register(props) {
  //assets
  const bg = "../assets/background2.png";
  const backIcon = "../assets/back.png";

  const [username,setUsername] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const [errorBg,setErrorBg] = useState("white");

  const storeData = async (id) => {
    try{
      await AsyncStorage.setItem("token",id)
    }catch(error){
      console.log("Cannot store data "+error.message);
    }finally{
      props.assignToken(id);
      props.change('userscreen');
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

  const checkCredentials = async() => {
    Keyboard.dismiss();
    let user = {
      username,name
    }
    
    var emptyField = false;

    for(let j in user){
      if(user[j].trim() == ""){
        emptyField = true;
        break;
      } 
    }

    user["password"] = password;

    user.sortingType = -1; 
    if(!emptyField){
      if(password.length >= 8){
        await config.post('users/add',user)
          .then((response) => {  
            if(response.data.status != "error"){
              props.loadUser({
                id:response.data.user._id,
                username:response.data.user.username,
                name:response.data.user.name,
                sortingType:response.data.user.sortingType
              });
              let uid = response.data.user._id;
              storeData(uid);
            }else{
              //possible username exists
              alterErrorMessage(response.data.message);
            }
          })
          .catch(err => alterErrorMessage("Error register: "+err.message));
      }else{
        alterErrorMessage("Minimum password length is 8 characters");
      }
    }else{
        alterErrorMessage("Please fill all fields");
    }
  }

  const usernameOnChange = (text) =>{
    clearErrorMessage();
    setUsername(text);
  } 

  const nameOnChange = (text) =>{
    setName(text);
    clearErrorMessage();
  } 

  const passwordOnChange = (text) =>{
    setPassword(text);
    clearErrorMessage();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require(bg)} style={styles.background}>
        <StatusBar backgroundColor={'#8ea486'} /> 
        <View style={styles.nav}>
            <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('home')}>
              <Image source={require(backIcon)} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.navTxt}>Create an account</Text>
        </View>
        <View style={styles.logForm}>
          <TextInput onChangeText={usernameOnChange}
            style={styles.textField}
            maxLength={30}  
            placeholder="Username"
            placeholderTextColor="#b6bfb8"
            value={username}/>
          <TextInput onChangeText={nameOnChange}
            maxLength={40}
            style={styles.textField} 
            placeholder="Full name"
            placeholderTextColor="#b6bfb8"
            value={name}/>
          <TextInput
            maxLength={40}
            secureTextEntry={true} 
            placeholder="Password"
            placeholderTextColor="#b6bfb8"
            onChangeText={passwordOnChange}
            style={styles.textField} 
            value={password}/>
          <TouchableOpacity onPress={checkCredentials} style = {styles.submit}>
            <Text style={styles.submitTxt}>
               Register
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.errMessage,{backgroundColor:errorBg}]}>
            {errorMessage}
        </Text>
      </ImageBackground> 
    </TouchableWithoutFeedback>
  );
}

