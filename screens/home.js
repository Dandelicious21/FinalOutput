import React,{useRef , useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../config/styles';
import { 
  StatusBar,
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  ImageBackground, 
  SafeAreaView} from 'react-native';


export default function Home(props) {
  //assets
  const bg = "../assets/background.png";
  
  //components
  const mounted = useRef();

  useEffect(() => {
    if(!mounted.current){
      getData();    
      mounted.current = true;
    }
  })

  const getData = async () => {
    try{
      const storedToken = await AsyncStorage.getItem("token");
      
      if(storedToken !== null){
        props.assignToken(storedToken);
      }

    }catch(error){
      console.log(`Error encountered Home page ${error.message}`);
    }
  }

  return (  
    <ImageBackground source={require(bg)} style={styles.backgroundSplash}>
      <StatusBar backgroundColor={'#8ea486'} /> 
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.appTitle}>eden</Text>
          <Text style={styles.tagLine}>manage your digital garden</Text>
          <View style={styles.btnCont}>
            <TouchableOpacity style = {styles.signIn} onPress={()=>props.change('login')}>
              <Text style={styles.signInTxt}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reg} onPress={()=>props.change('register')}>
              <Text style={styles.regTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize:16}}>version 1.0</Text>
      </SafeAreaView>
    </ImageBackground>
    );
}

