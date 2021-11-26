import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  Image,
  ImageBackground, 
  SafeAreaView} from 'react-native';

const bg = "../assets/background2.png";
const backIcon = "../assets/back.png";

export default function Login(props) {
  
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  
  const [errorMessage,setErrorMessage] = useState("");
  
  const checkCredentials = () => {
    // const user = {
    //   username,password
    // }
    
    // console.log(user);
    // axios.post('/users/login',user)
    //   .then((response) => {
    //     console.log("x");
        
    //     if(response.data.status != "ERROR"){
    //       console.log("==>")
    //     }else{
    //       setErrorMessage(response.data.message);
    //     }
        
    //   })
    //   .catch(err => console.log(":("+err));
  }

  const usernameOnChange = (text) =>{
    // setUsername(text);
  } 

  const passwordOnChange = (text) =>{
    // setPassword(text);
  }

  return (  
    <ImageBackground source={require(bg)} style={styles.background}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" /> 
      <SafeAreaView style={styles.defCont}>
        <View style={styles.nav}>
            <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('home')}>
              <Image source={require(backIcon)} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.navTxt}>Welcome to Eden</Text>
        </View>
        <View style={styles.logForm}>
          <TextInput onChangeText={usernameOnChange} style={styles.input} 
            placeholder="Username"
            placeholderTextColor="#b6bfb8"
            value={username}/>
          <TextInput onChangeText={passwordOnChange} style={styles.input} 
            placeholder="Password"
            placeholderTextColor="#b6bfb8"
            value={password}/>
          <TouchableOpacity onPress={()=>props.change('userscreen')}>
            <View style = {styles.submit}>
              <Text style = {styles.submitTxt}>Lo­g in</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.errMessage}>{errorMessage}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  errMessage: {
    color:"red"
  },

  defCont: {
    width:'100%',
    height:'100%',
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
    justifyContent:'center',
    backgroundColor:'#aac4a0'  
  },

  backTouch: {
    position:'absolute',
    right:'95%',
    bottom:'60%'
  },

  back: {
    width:19,
    height:19
  },

  navTxt: {
    color:'black',
    fontSize:16,
    fontWeight:'bold'
  },

  background: {
    flex:1,
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },

  logForm: {
    marginTop:'30%',
    justifyContent:'space-between',
    width:'80%'
  },

  input: {
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    padding:4,
    paddingHorizontal: 17,
    borderColor:'#cdcdcd'
  },

  submit: {
    marginTop:10,
    paddingVertical:7,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#217e60'
  },

  submitTxt: {
    fontSize:14,
    color:'white'
  }

});
