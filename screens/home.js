import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../config/styles';
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
    <ImageBackground source={require(bg)} style={styles.backgroundSplash}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainNav}>
          <Text style={styles.mainNavTxt}>Home</Text>
          <Text style={styles.mainNavTxt}>About</Text>
          <Text style={styles.mainNavTxt}>Updates</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.appTitle}>eden</Text>
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

