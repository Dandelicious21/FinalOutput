import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  ImageBackground, 
  SafeAreaView} from 'react-native';

const bg = "../assets/background.png";

export default function Home(props) {
  return (  
    <ImageBackground source={require(bg)} style={styles.image}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainNav}>
          <Text style={styles.mainNavTxt}>Home</Text>
          <Text style={styles.mainNavTxt}>About</Text>
          <Text style={styles.mainNavTxt}>Updates</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.appTitle}>Eden</Text>
          <Text style={styles.tagLine}>manage your digital garden</Text>
          <View style={styles.btnCont}>
            <TouchableOpacity style = {styles.signIn} onPress={()=>props.change('login')}>
              <Text style = {styles.signInTxt}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.reg} onPress={()=>props.change('register')}>
              <Text style = {styles.regTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>version 1.0</Text>
      </SafeAreaView>
    </ImageBackground>
    );
}

const btn = [8,'48%',15]; //padding , width

const styles = StyleSheet.create({
  image: {
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'#aac4a0',
    alignItems:'center',   
    justifyContent:'center'
  },

  mainNav: {
    flexDirection:'row',
    justifyContent:'flex-end',
    width:'100%',
  },

  mainNavTxt:{
    fontWeight:'bold',
    margin:13,
    color:'black'
  },

  container: {
    paddingTop: 50,
    width:'100%',
    height:'100%',
    flex: 2,
    justifyContent:'space-between',
    padding:28,
    alignItems: 'flex-start'
  },

  plant: {
    height:300,
    width:'100%'
  },

  mainContent: {
    flex:0,
    width:'100%',
    paddingVertical:2,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  btnCont: {
    marginTop:24,
    justifyContent:'space-between',
    width:'80%',
    flexDirection:'row'
  },

  appTitle: {
    color:'#000',
    fontSize:55,
    fontWeight:'700'
  },

  tagLine: {
    fontWeight:'bold',
    fontSize:17,
    color:'#000',
  },

  signIn: {
    padding:btn[0],
    justifyContent:'center',
    paddingHorizontal:15,
    borderRadius:btn[2],
    width:btn[1],
    backgroundColor: '#357762',
    alignItems:'center'
  },

  signInTxt: {
    fontWeight:'bold',
    color:'#fff'
  },

  reg: {
    justifyContent:'center',
    paddingHorizontal:15,
    borderRadius:btn[2],
    width:btn[1],
    backgroundColor: '#e2ede4',
    alignItems:'center'
  },

  regTxt: {
    color:'#000',
    fontWeight:'200'
  },
});


