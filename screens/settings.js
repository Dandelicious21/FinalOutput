import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  Image,
  SafeAreaView} from 'react-native';

const backIcon = "../assets/back.png";

export default function Settings(props) {
  return (
      <View style={styles.defCont}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
        <View style={styles.nav}>
          <TouchableOpacity style={styles.backTouch} onPress={()=>props.change('userscreen')}>
            <Image source={require(backIcon)} style={styles.back}/>
          </TouchableOpacity>
        <Text style={styles.navTxt}>Account</Text>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.dpBox}></View>
            <View style={styles.credentials}>
              <Text style={styles.fullName}>Lodi Petmalu</Text>
              <Text style={styles.username}>@hahahaha</Text>
            </View>
        </View>
        <View style={styles.lineBreak}></View>
        <View style={styles.opt}>
            <TouchableOpacity onPress={()=>props.change('changepass')}>
              <Text style={styles.optTxt}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.change('home')}>
              <Text style={styles.optTxt}>Log out</Text>
            </TouchableOpacity>
        </View>
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
  
  backTouch: {
    position:'absolute',
    right:'95%',
    bottom:'60%'
  },

  back: {
    width:19,
    height:19
  },

  nav: { 
    paddingTop:'12%',
    padding:12,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#aac4a0'  
  },

  navTxt: {
    color:'black',
    fontSize:16,
    fontWeight:'bold'
  },

  bar: {
    backgroundColor: 'black',
    height: 20,
  },

  profileBox: {
    paddingHorizontal:'8%',
    width:'100%',
    height:'15%',
    flexDirection: 'row',
    marginVertical: '11%',
    justifyContent: 'flex-start'
  },

  dpBox: {
    width: '36%',
    height: '100%',
    backgroundColor: '#EBF4FA',
    borderRadius: 15,
  },

  credentials: {
    marginLeft:'5%',
    alignItems:'flex-start',
    justifyContent:'center',
  },

  fullName: {
    marginVertical:5,
    fontWeight:'bold',
    fontSize: 22,
  },

  username: {
  fontSize: 13,
  },

  lineBreak: {
    width:'100%',
    height:'0.1%',
    backgroundColor: '#ddd',
  },

  optTxt: {
    fontSize: 14,
    marginVertical: '4%',
  },

  opt: {
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    width:'100%',
    alignSelf:'flex-start'
  },
});