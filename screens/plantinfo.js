import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  Text, 
  View, 
  Image } from 'react-native';

export default function PlantInfo(props) {

  const plantImg = '../assets/fortune.jpg';
  const backIcon = "../assets/back.png";
  const editIcon = '../assets/edit-icon.png';

  return (
    <View style={styles.defCont}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
      <View style={styles.nav}>
        <TouchableOpacity onPress={()=>props.change('userscreen')}>
          <Image source={require(backIcon)} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.navTxt}>Plant Information</Text>
         <TouchableOpacity>
          <Image source={require(editIcon)} style={styles.edit}/>
        </TouchableOpacity>
      </View>
      <Image style={styles.plantPic} source={require(plantImg)} />
      <Text style={styles.plantName}>Zaito</Text>
      <View style={styles.infoCont}>
        <Text style={styles.label}>Species</Text>
        <Text style={styles.txt}>Fortune</Text>
        <Text style={styles.label}>Date Acquired</Text>
        <Text style={styles.txt}>November 1, 2012 (9 years old)</Text>
        <Text style={styles.label}>Details</Text>
        <Text style={styles.txt}>Matampuhin sa chat</Text>
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

  nav: {
    paddingTop:'14%',
    padding:12,
    width:'100%',
    height:'12%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#aac4a0'  
  },

  edit: { 
    width:22,
    height:22
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

  plantPic: {
    borderRadius:15,
    marginVertical: '8%',
    width: '65%',
    height: '30%',
  },

  plantName: {
    fontSize: 25
  },

  infoCont: {
    justifyContent:'flex-start',
    width:'80%',
  },

  label: {
    marginTop: '10%',
    fontSize: 16,
    fontWeight:'bold'
  },

  txt: {
    marginLeft:'3%',
    fontSize: 15
  }
});
