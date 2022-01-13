import React,{ useState } from 'react';
import config from '../config';
import styles from '../config/styles';
import { StatusBar, TouchableWithoutFeedback, Keyboard,TouchableOpacity,
   Text, View, TextInput,Image, ImageBackground} from 'react-native';

export default function Login(props) {
  //mini-assets
  const bg = "../assets/background2.png";
  const backIcon = "../assets/back.png";
  
  //controlled components
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const [errorBg,setErrorBg] = useState("white");
   
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
    let fieldCheck = (username.trim() != "" && password.trim());

    if(fieldCheck){
      const user = {
        username,password
      }
      
      await config.post('users/login',user)
        .then((response) => {  
          if(response.data.status != "error"){
            const {_id,username,name} = response.data;  
            props.loadUser({
              id:_id,
              username:username,
              name:name
            });
            props.change('userscreen');
          }else{
            alterErrorMessage(response.data.message);
          }
          
        })
        .catch(err => setErrorMessage("Login failed "+err.message));
    }else{
        alterErrorMessage("Please fill all fields");
    }
  }

  const usernameOnChange = (text) =>{
    clearErrorMessage();
    setUsername(text);
  } 

  const passwordOnChange = (text) =>{
    clearErrorMessage();
    setPassword(text);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require(bg)} style={styles.background}>
        <StatusBar backgroundColor={'#8ea486'} /> 
          <View style={styles.nav}>
              <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('home')}>
                <Image source={require(backIcon)} style={styles.back}/>
              </TouchableOpacity>
              <Text style={styles.navTxt}>Welcome to Eden</Text>
          </View>
          <View style={styles.logForm}>
            <TextInput onChangeText={usernameOnChange} style={styles.textField} 
              placeholder="Username"
              placeholderTextColor="#b6bfb8"
              value={username}/>
            <TextInput secureTextEntry={true} onChangeText={passwordOnChange} style={styles.textField} 
              placeholder="Password"
              placeholderTextColor="#b6bfb8"
              value={password}/>
            <TouchableOpacity onPress={checkCredentials} style = {styles.submit}>
              <Text style={styles.submitTxt}>Lo­g in</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.errMessage,{backgroundColor:errorBg}]}>
              {errorMessage}
          </Text>
          
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
