import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import config from '../config';
import styles from '../config/styles';
import {
  Keyboard, 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  Image,
  SafeAreaView} from 'react-native';

const backIcon = "../assets/back.png";

export default function ChangePass(props) {
  const {id,username,name} = props.loadUser;

  const [oldPassword,setOldPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [message,setMessage] = useState("");
  const [messageBG,setMessageBG] = useState("white");
  const [messageFG,setMessageFG] = useState("#db3327");

  const clearMessage = () => {
    setMessage("");
    setMessageBG('white');
    setMessageFG('white');
  }

  const changeMessage = (txt) => {
    setMessage(txt);
    setMessageBG('#ffdedb');
    setMessageFG('#db3327');
  }

  const comparePassword = async() => {
    Keyboard.dismiss();
    const user = {
      id,oldPassword,newPassword
    }

    //flag means all fields are filled
    var flag = (oldPassword != "") && (newPassword != "");

    if(flag){
      if(newPassword.length < 8){
        changeMessage("Minimum password length is 8")
      }else{
        await config.post('users/update/:id',user)
          .then((response) => {  
              if(response.data.status != "error"){
                setOldPassword("");
                setNewPassword(""); 
                setMessageFG('#558374');
                setMessageBG('#dfece3');
                setMessage("Password has been changed");
              }else{
                changeMessage(response.data.message);
              }
          })
          .catch(err => changeMessage(err.message));            
      }
    }else{
      changeMessage("Please fill all fields");
    }
  }

  const oldPasswordOnChange = (text) =>{
    setOldPassword(text);
    clearMessage();
  } 

  const newPasswordOnChange = (text) =>{
    setNewPassword(text);
    clearMessage();
  }

  return(
    <SafeAreaView style={styles.defCont}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" /> 
      <View style={styles.nav}>
          <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('settings')}>
            <Image source={require(backIcon)} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.navTxt}>Change Password</Text>
      </View>
      <View style={styles.logForm}>
        <TextInput style={styles.textField}
          secureTextEntry={true}
          placeholder="Old Password"
          placeholderTextColor="#b6bfb8"
          value={oldPassword}
          onChangeText={oldPasswordOnChange}/>
        <TextInput style={styles.textField}
          secureTextEntry={true} 
          placeholder="New Password"
          placeholderTextColor="#b6bfb8"
          value={newPassword}
          onChangeText={newPasswordOnChange}/>
        <TouchableOpacity style={styles.submit} onPress={comparePassword}>
          <Text style={styles.submitTxt}>Confirm</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.alertNotif,{
        backgroundColor:messageBG,
        color:messageFG
      }]}>
        {message}
      </Text>
    </SafeAreaView>
    );
}


