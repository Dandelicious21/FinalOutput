import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import config from '../config';
import styles from '../config/styles';
import { 
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
  const [errorMessage,setErrorMessage] = useState("");

  const comparePassword = async() => {
    const user = {
      id,oldPassword,newPassword
    }
    
    if(newPassword.length < 8){
      setErrorMessage("Minimum password length is 8")
    }else{
      await config.post('users/update/:id',user)
        .then((response) => {  
            if(response.data.status != "error"){
              setErrorMessage(response.data.message);
            }else{

            }
        })
        .catch(err => setErrorMessage(err.message));            
    } 
  
  }

  const oldPasswordOnChange = (text) =>{
    setOldPassword(text);
  } 

  const newPasswordOnChange = (text) =>{
    setNewPassword(text);
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
        <TextInput style={styles.input} 
          placeholder="Old Password"
          placeholderTextColor="#b6bfb8"
          value={oldPassword}
          onChangeText={oldPasswordOnChange}/>
        <TextInput style={styles.input} 
          placeholder="New Password"
          placeholderTextColor="#b6bfb8"
          value={newPassword}
          onChangeText={newPasswordOnChange}/>
        <TouchableOpacity style={styles.submit} onPress={comparePassword}>
          <Text style={styles.submitTxt}>Confirm</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errMessage}>{errorMessage}</Text>
    </SafeAreaView>
    );
}


