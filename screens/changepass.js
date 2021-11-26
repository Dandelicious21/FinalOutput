import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
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
          placeholderTextColor="#b6bfb8">
        </TextInput>
        <TextInput style={styles.input} 
          placeholder="New Password"
          placeholderTextColor="#b6bfb8">
        </TextInput>
        <View style = {styles.submit}>
          <Text style = {styles.submitTxt}>Confirm</Text>
        </View>
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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

