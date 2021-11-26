import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  TouchableOpacity, 
  Image } from 'react-native';

export default function AddPlant(props) {
  
  const backIcon = "../assets/back.png";
  const saveIcon = "../assets/save.png";

  return (
   <View style={styles.defCont}>
    <StatusBar backgroundColor="rgba(0,0,0,0.2)" /> 
      <View style={styles.nav}>
        <TouchableOpacity onPress={()=>props.change('userscreen')}>
          <Image source={require(backIcon)} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.navTxt}>Add Plant</Text>
        <TouchableOpacity onPress={()=>props.change('userscreen')}>
          <Image source={require(saveIcon)} style={styles.save}/>
        </TouchableOpacity>
    </View>

    <View style={styles.uploadBox}>
      <Text style={styles.uploadText}>Upload Photo</Text>
    </View>

    <TextInput style={styles.inputField} placeholder="Name"
            placeholderTextColor="#b6bfb8"/>
    <TextInput style={styles.inputField} placeholder="Species"
            placeholderTextColor="#b6bfb8"/>
    <TextInput style={styles.inputField} placeholder="Date Acquired(MM/DD/YYYY)"
            placeholderTextColor="#b6bfb8"/>
    <TextInput style={styles.inputFieldDesc} placeholder="Description"
            placeholderTextColor="#b6bfb8"/>

   

   </View>
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
    justifyContent:'space-between',
    backgroundColor:'#aac4a0'  
  },

  back: {
    width:19,
    height:19
  },

  save: {
    width:23,
    height:23
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
    height: '27%',
    width: '55%',
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
