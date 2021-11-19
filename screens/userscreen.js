import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View, 
  TextInput,
  Image,
  SafeAreaView} from 'react-native';

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
        <View style={styles.firstRow}>
          <View style={styles.plantCount}>
              <Text style={styles.countTag}>Plant total</Text>
              <Text style={styles.countLabel}>1</Text>
          </View>
          <View style={styles.addPlant}>
            <Text style={styles.addLabel}>Add plant</Text>
          </View>
        </View>
        <TextInput style={styles.searchBox}>Search</TextInput>
        <View style={styles.sort}>
          <Text style={styles.sortText}>Sort by:</Text>
          <Text style={styles.sortText}>Alphabetical(A - Z)</Text>
        </View>
        <View style={styles.plantPanels}>
          <TouchableOpacity 
            style={styles.box} 
            onPress={()=>props.change('plantinfo')}>  
          </TouchableOpacity>    
          <TouchableOpacity 
            style={styles.box} 
            onPress={()=>props.change('home')}>  
          </TouchableOpacity>    
          <TouchableOpacity 
            style={styles.box} 
            onPress={()=>props.change('home')}>  
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
    backgroundColor: '#b9d5ad',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },

  edenHeader: {
    fontSize: 22,
    fontFamily: 'sans-serif'
  },

  profIcon: {
    height:35,
    width:35
  },

  firstRow: {
    marginTop: '8%',
    marginBottom: '5%',
    width:'85%',
    height:'15%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  plantCount: {
    backgroundColor: '#217e61',
    borderRadius: 10,
    width: '60%',
    padding: '5%'
  },

  countTag: {
    color: 'white',
    fontSize: 15
  },

  countLabel: {
    paddingTop:'5%',
    paddingLeft:'90%',
    color: 'white',
    fontSize: 25
  },
  
  addPlant: {
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor: '#f9f5f6',
    borderRadius: 10,
    width: '32%',
    padding: '5%'
    },

  addLabel: {
    fontSize: 14
  },

  searchBox: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: "#cbcbcb",
    borderRadius: 20,
    width:'85%',
    padding: 8,
    paddingHorizontal:'4%',
    color: '#a2a7a6',
    fontSize: 17,
    marginVertical: '1%'
  },

  sort: {
    marginVertical:'5%',
    width:'85%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sortText: {
    fontSize: 15
  },

  plantPanels: {
    marginVertical:'1%',
    width:'87%',
    height:'20%',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },

  box:{
    marginVertical: '2%',
    borderRadius:12,
    width:'48%',
    height:'100%',
    backgroundColor: '#b9d5ad'
  }
});
