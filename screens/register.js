import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import axios from 'axios';
import config from '../config';
import styles from '../config/styles';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  Image,
  ImageBackground} from 'react-native';

const bg = "../assets/background2.png";
const backIcon = "../assets/back.png";

export default function Register(props) {

  const [username,setUsername] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  
  const [errorMessage,setErrorMessage] = useState("");

  const checkCredentials = async() => {
    const user = {
      username,name,password
    }
    
    await config.post('users/add',user)
      .then((response) => {  
        if(response.data.status != "error"){
          props.loadUser({
            id:response.data.user._id,
            username:response.data.user.username,
            name:response.data.user.name
          });
          props.change('userscreen');
        }else{
          setErrorMessage(response.data.message);
        }
      })
      .catch(err => setMessage("Error register: "+err.message));
  }

  const usernameOnChange = (text) =>{
    setUsername(text);
  } 

  const nameOnChange = (text) =>{
    setName(text);
  } 

  const passwordOnChange = (text) =>{
    setPassword(text);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground onPress={Keyboard.dismiss} source={require(bg)} style={styles.background}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" /> 
        <View style={styles.nav}>
            <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('home')}>
              <Image source={require(backIcon)} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.navTxt}>Create an account</Text>
        </View>
        <View style={styles.logForm}>
          <TextInput onChangeText={usernameOnChange}
            style={styles.textField} 
            placeholder="Username"
            placeholderTextColor="#b6bfb8"
            value={username}/>
          <TextInput onChangeText={nameOnChange}
            style={styles.textField} 
            placeholder="Full name"
            placeholderTextColor="#b6bfb8"
            value={name}/>
          <TextInput onChangeText={passwordOnChange}
            style={styles.textField} 
            placeholder="Password"
            placeholderTextColor="#b6bfb8"
            value={password}/>
          <TouchableOpacity onPress={checkCredentials} style = {styles.submit}>
            <Text style = {styles.submitTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.errMessage}>{errorMessage}</Text>
      </ImageBackground> 
    </TouchableWithoutFeedback>
  );
}

