import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View, 
  TextInput,
  Image,
  ImageBackground, 
  SafeAreaView} from 'react-native';

const bg = "./assets/background.png";
const img = "./assets/plant.png";
const backIcon = "./assets/back.png";
const profMenu = "./assets/tmpCircle.png";

export default function App() {
  
  const [page,setPage] = useState("App");
  const switchPage = (page) => {
    setPage(page);
  }

  if(page == "SignIn"){
    return (
      <ImageBackground source={require(bg)} style={stylesx.background}>
        <SafeAreaView style={styles.defCont}>
          <View style={styles.nav}>
              <TouchableOpacity style={styles.backTouch} onPress={() => switchPage("App")}>
                <Image source={require(backIcon)} style={styles.back}/>
              </TouchableOpacity>
              <Text style={styles.navTxt}>Welcome to Eden</Text>
          </View>
          <View style={stylesx.logForm}>
            <TextInput style={stylesx.input} 
              placeholder="Username"
              placeholderTextColor="#b6bfb8">
            </TextInput>
            <TextInput style={stylesx.input} 
              placeholder="Password"
              placeholderTextColor="#b6bfb8">
            </TextInput>
            <TouchableOpacity onPress={() => switchPage("UserScreen")}>
              <View style = {stylesx.submit}>
                <Text style = {stylesx.submitTxt}>Lo­g in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
    
  }else if(page == "Register"){
    return (
      <ImageBackground source={require(bg)} style={stylesx.background}>
        <SafeAreaView style={styles.defCont}>
          <View style={styles.nav}>
              <TouchableOpacity style={styles.backTouch} onPress={() => switchPage("App")}>
                <Image source={require(backIcon)} style={styles.back}/>
              </TouchableOpacity>
              <Text style={styles.navTxt}>Create an account</Text>
          </View>
          <View style={stylesx.logForm}>
            <TextInput style={stylesx.input} 
              placeholder="Username"
              placeholderTextColor="#b6bfb8">
            </TextInput>
            <TextInput style={stylesx.input} 
              placeholder="Full name"
              placeholderTextColor="#b6bfb8">
            </TextInput>
            <TextInput style={stylesx.input} 
              placeholder="Password"
              placeholderTextColor="#b6bfb8">
            </TextInput>
            <View style = {stylesx.submit}>
              <Text style = {stylesx.submitTxt}>Submit</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }else if(page == "UserScreen"){
     return (
      <SafeAreaView style={stylesA.mainCont}>
        <View style={stylesA.headerBar}>
          <Text style={stylesA.edenHeader}>Eden</Text>
          <TouchableOpacity onPress={() => switchPage("Settings")}>
            <Image source={require(profMenu)} style={stylesA.profIcon}/>
          </TouchableOpacity>
        </View>
        <View style={stylesA.firstRow}>
          <View style={stylesA.plantCount}>
              <Text style={stylesA.countTag}>Plant total</Text>
              <Text style={stylesA.countLabel}>1</Text>
          </View>
          <View style={stylesA.addPlant}>
            <Text style={stylesA.addLabel}>Add plant</Text>
          </View>
        </View>
        <TextInput style={stylesA.searchBox}>Search</TextInput>
        <View style={stylesA.sort}>
          <Text style={stylesA.sortText}>Sort by:</Text>
          <Text style={stylesA.sortText}>Alphabetical(A - Z)</Text>
        </View>
        <View style={stylesA.boxRow}>
           <View style={stylesA.box}></View>
           <View style={stylesA.box}></View>
        </View>
        <View style={stylesA.boxRow}>
           <View style={stylesA.box}></View>
           <View style={stylesA.box}></View>
        </View>
      </SafeAreaView>
    );
  }else if(page == "Settings"){
    return (
      <View style={styles.defCont}>
        <View  style={styles.nav}>
          <TouchableOpacity style={styles.backTouch} onPress={() => switchPage("UserScreen")}>
            <Image source={require(backIcon)} style={styles.back}/>
          </TouchableOpacity>
        <Text style={stylesB.navTxt}>Account</Text>
        </View>
        <View style={stylesB.profileBox}>
          <View style={stylesB.dpBox}></View>
            <View style={stylesB.credentials}>
              <Text style={stylesB.fullName}>Lodi Petmalu</Text>
              <Text style={stylesB.username}>@hahahaha</Text>
            </View>
        </View>
        <View style={stylesB.lineBreak}></View>
        <View style={stylesB.opt}>
            <Text style={stylesB.optTxt}>Change Password</Text>
            <TouchableOpacity onPress={() => switchPage("App")}>
              <Text style={stylesB.optTxt}>Log out</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }else{
    return (  
    <ImageBackground source={require(bg)} style={styles.image}>
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
          <TouchableOpacity style = {styles.signIn} onPress={() => switchPage("SignIn")}>
            <Text style = {styles.signInTxt}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.reg} onPress={() => switchPage("Register")}>
            <Text style = {styles.regTxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>version 1.0</Text>
    </SafeAreaView>
    </ImageBackground>
    );
  }

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

  nav: {
    height:'7%',
    marginTop:'8%',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth: 0.5,
    backgroundColor:'#aac4a0',
    borderBottomColor: 'grey'    
  },

  navTxt: {
    color:'black',
    fontSize:16,
    fontWeight:'bold'
  },

  backTouch: {
    position:'absolute',
    left:10
  },

  back: {
    width:20,
    height:20
  },

  defCont: {
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  }

});

const stylesx = StyleSheet.create({
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
    borderRadius:20,
    borderWidth:2,
    padding:3,
    paddingHorizontal: 15,
    borderColor:'#ced8d0'
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
    color:'white'
  }
});

const stylesA = StyleSheet.create({
  mainCont: {
    marginTop:'5%',
    justifyContent:'center',
    alignItems:'center'
  },

  headerBar: {
    height:'9%',
    width:'100%',
    paddingHorizontal:'5%',
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
    height:'55%',
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

  boxRow: {
    marginVertical:'4%',
    width:'87%',
    height:'20%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  box:{
    borderRadius:12,
    width:'48%',
    height:'100%',
    backgroundColor: '#b9d5ad'
  }
});

const stylesB = StyleSheet.create({
  backTouch: {
    position:'absolute',
    left:10
  },

  back: {
    width:20,
    height:20
  },

  bar: {
    backgroundColor: 'black',
    height: 20,
  },

  nav: { 
    padding:13,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth: 0.5,
    backgroundColor:'#aac4a0',
    borderBottomColor: 'grey'    
  },

  navTxt: {
    color:'black',
    fontSize:16,
    fontWeight:'bold'
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