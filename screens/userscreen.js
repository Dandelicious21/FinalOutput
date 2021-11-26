import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  ImageBackground,
  StyleSheet, 
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View, 
  TextInput,
  Image,
  SafeAreaView} from 'react-native';

const plantImg = '../assets/fortune.jpg';
const backIcon = "../assets/back.png";
const profMenu = "../assets/tmpCircle.png";

export default function UserScreen(props) {
  return (
      <SafeAreaView style={styles.mainCont}>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" />
        <View style={styles.headerBar}>
          <Text style={styles.edenHeader}>Eden</Text>
          <TouchableWithoutFeedback onPress={()=>props.change('settings')}>
            <Image source={require(profMenu)} style={styles.profIcon}/>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.stats}>
          <View style={styles.plantCount}>
              <Text style={styles.countTag}>Plant total</Text>
              <Text style={styles.countLabel}>1</Text>
          </View>
          <TouchableOpacity style={styles.addPlant} onPress={()=>props.change('addplant')}>
            <Text style={styles.addLabel}>Add Plant</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lineBreak}></View>
        <TextInput style={styles.searchBox}>Search</TextInput>
        <View style={styles.sort}>
          <Text style={styles.sortText}>Sort by:</Text>
          <Text style={styles.sortText}>Alphabetical(A - Z)</Text>
        </View>
        <View style={styles.plantPanels}>
          <TouchableOpacity 
            style={styles.plantBox} 
            onPress={()=>props.change('plantinfo')}>  
            <Image source={require(plantImg)} style={styles.plantPic}/>
            <View style={styles.plantNameHolder}>
              <Text style={styles.plantName}>Zaito</Text>
            </View>
          </TouchableOpacity>      
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  mainCont: {
    height:'100%',
    justifyContent:'flex-start',
    alignItems:'center'
  },

  headerBar: {
    paddingTop:'12%',
    padding: '3.5%',
    width:'100%',
    height:'12.5%',
    backgroundColor: '#b9d5ad',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },

  edenHeader: {
    fontSize: 23,
    fontFamily: 'sans-serif'
  },

  profIcon: {
    height:'100%',
    width:'11.5%'
  },

  stats: {
    marginVertical: '6%',
    width:'85%',
    height:'12%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  plantCount: {
    backgroundColor: '#217e61',
    borderRadius: 10,
    width: '65%',
    paddingVertical: '4%',
    paddingHorizontal: '5%'
  },

  countTag: {
    color: 'white',
    fontSize: 15
  },

  countLabel: {
    paddingTop:'5%',
    paddingLeft:'92%',
    color: 'white',
    fontSize: 25
  },
  
  addPlant: {
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor: '#f9f5f6',
    borderRadius: 10,
    width: '32%',
    padding: '3%'
  },

  addLabel: {
    fontWeight:'bold',
    fontSize: 13
  },

  searchBox: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: "#cbcbcb",
    borderRadius: 10,
    width:'85%',
    padding: 2,
    paddingHorizontal:'4%',
    color: '#a2a7a6',
    fontSize: 14,
    marginVertical: '6%'
  },

  sort: {
    paddingHorizontal: '1%',
    marginBottom:'3%',
    width:'85%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sortText: {
    fontSize: 14
  },

  plantPanels: {
    marginVertical:'1%',
    width:'87%',
    height:'24%',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },

  lineBreak: {
    width:'100%',
    height:'0.2%',
    backgroundColor: '#ddd',
  },

  plantPic: {   
    borderTopLeftRadius:11,
    borderTopRightRadius:11,
    width:'100%',
    height:'83%'
  },

  plantBox:{
    borderRadius:12,
    borderWidth:1,
    borderColor:'#b8b8b8',
    marginVertical: '2%',
    width:'48%',
    height:'100%',
  },

  plantNameHolder: {
    justifyContent:'center',
    alignItems:'center',
    height:'17%',
    width:'100%'
  },

  plantName: {
    fontWeight:'bold',
  }
});
