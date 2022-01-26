import { StyleSheet , Dimensions } from 'react-native';

const btn = [8,'48%',15]; //padding , width
const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  //HOME,LOGIN,REGISTER
  backgroundSplash: {
    flex:1,
    width:windowWidth,
    height:windowHeight,
    backgroundColor:'#aac4a0',
    alignItems:'center',   
    justifyContent:'center'
  },

  background: {
    flex:1,
    position:'absolute',
    width:windowWidth,
    height:screenHeight,
    justifyContent:'flex-start',
    alignItems:'center'
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
    marginTop:245 ,
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
    fontSize:60,
    fontWeight:'700'
  },

  tagLine: {
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
    fontWeight:'bold'
  },

  errMessage: {
    borderRadius:3,
    padding:'2.4%',
    textAlign:'center',
    marginVertical: '4%',
    width:'83%',
    color:"#db3327"
  },

  defCont: {
    flex:1,
    width:windowWidth,
    height:screenHeight,
    justifyContent:'flex-start',
    alignItems:'center'
  },

  nav: {
    padding:'4%',
    paddingHorizontal:12,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#aac4a0'  
  },

  backTouch: {
    position:'absolute',
    right:'97%',
    bottom:'70%'
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

  logForm: {
    marginTop:'30%',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
  },

  textField: {
    width:'83%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    padding:7,
    paddingHorizontal: 17,
    borderColor:'#cdcdcd'
  },

  submit: {
    width:'83%',
    marginTop:10,
    paddingVertical:9,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4b927b'
  },

  submitTxt: {
    fontSize:14,
    color:'white'
  },

  alertNotif: {
    borderRadius:3,
    padding:'2.4%',
    textAlign:'center',
    marginVertical: '4%',
    width:'83%'
  },

  //END OF GENERAL LAYOUTS

  //USERSCREEN STYLE
  mainUserCont: {
    width:windowWidth,
    height:screenHeight,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom: '13%',
  },

  headerBar: {
    height:'7%',
    paddingHorizontal: '3.5%',
    width:'100%',
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
    height:'47.5%',
    width:'7%'
  },

  stats: {
    marginVertical: '6%',
    width:'90%',
    height:'11%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  plantCount: {
    justifyContent:'space-between',
    backgroundColor: '#217e61',
    borderRadius: 10,
    width: '58%',
    paddingVertical: '2.5%',
    paddingHorizontal: '5.5%'
  },

  addBtnIcon: {
    width:52,
    marginBottom:4,
    height:45
  },

  addPlant: {
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor: '#f4f0f1',
    borderRadius: 10,
    paddingVertical: '2.5%',
    width:'24%'
  },

  addLabel: {
    fontWeight:'bold',
    fontSize: 11
  },

  countTag: {
    color: 'white',
    fontSize: 15
  },

  miniBtnCont: {
    width:'11%',
    justifyContent:'space-between'
  },

  miniBtn: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7,
    width:'100%',
    height:'45%',
    backgroundColor: '#f4f0f1',
  },

  miniBtnIcon: {
    width:19,
    height:19
  },

  countCont:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },

  countLabel: {
    color: 'white',
    fontSize: 24
  },

  searchBox: {
    backgroundColor: 'white',
    borderWidth: 1.3,
    borderColor: "#aaa",
    borderRadius: 40,
    width:'90%',
    padding: 2,
    paddingHorizontal:'4%',
    color: '#a2a7a6',
    fontSize: 14,
    marginVertical: '5%'
  },

  plantPanels: {
    paddingTop:'4%',
    paddingVertical:'15%',
    paddingHorizontal:'5%',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    width:windowWidth,
  },

  plantCardImg: {
    position:'absolute',
    borderColor:'#bbb',
    borderWidth:0.5,
    borderRadius:5,
    width:'100%',
    height:'100%'
  },

  plantCard:{
    backgroundColor:'white',
    justifyContent:'flex-end',
    marginVertical: '1%',
    width:'49%',
    height:170,
  },

  plantCardName: {
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    fontSize:12.5,
    height:'17%',
    paddingHorizontal: '5%',
    paddingTop:'2%',
    fontWeight:'700',
    color:'white',
    backgroundColor:'rgba(0, 0, 0, 0.3)'
  },

  //ACCOUNT SETTINGS
  bar: {
    backgroundColor: 'black',
    height: 20,
  },

  profileBox: {
    paddingHorizontal:'8%',
    width:'100%',
    flexDirection: 'row',
    marginVertical: '11%',
    justifyContent: 'flex-start'
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

  thickLine: {
    width:'100%',
    height:'1.2%',
    backgroundColor: '#ccc',
  },

  lineBreak: {
    width:'100%',
    height:'0.1%',
    backgroundColor: '#ccc',
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

  //plantInfo
  navB: {
    padding:'4%',
    paddingHorizontal:12,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#aac4a0'  
  },

  edit: { 
    width:22,
    height:22
  },

  plantPic: {
    borderColor:'#bbb',
    borderWidth:1,
    borderRadius:11,
    marginTop: '8%',
    width: '75%',
    height: '36.5%',
  },

  plantName: {
    marginTop: '6%',
    fontSize: 22
  },

  infoCont: {
    justifyContent:'flex-start',
    width:'80%',
  },

  infoTxt: {
    color:'#333'
  },

  label: {
    marginTop: '10%',
    fontSize: 14.5,
    fontWeight:'bold'
  },

  plantTxt: {
    marginLeft:'3%',
    fontSize: 15
  },

  optionsPanel: {
    width:120,
    padding:5,
    marginTop:25 
  },

  optionCont: {
    paddingVertical: '10%',
    alignItems:'center',
    flexDirection:'row'
  },

  optionIcon: {
    width:20,
    height:20,
    marginRight:'10%'
  },

  textOption: {
    fontSize:15
  },

  //plantinfo -- END

  //addplant -- 
  imagePanel:{ 
    width: '100%', 
    height: '100%', 
    borderRadius: 13
  },

  formCont:{
    marginBottom: '12%',
    width:'100%',
    alignItems:'center'
  },

  tapInfo:{
    color:'#999',
    textAlign:'center'
  },

  save: {
    width:20,
    height:20
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
    borderWidth: 1,
    height: '33%',
    width: '53%',
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

  dateField: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'10%',
    width:'85%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    padding:'3.5%',
    paddingHorizontal:'4.3%',
    borderColor:'#cdcdcd'
  },

  inputFieldDesc: {
    padding:'1%',
    paddingBottom:'13%',
    width:'85%',
    marginVertical: 6,
    borderRadius:8,
    borderWidth:1,
    paddingHorizontal: 17,
    borderColor:'#cdcdcd'
  },

  dateBtn: {
   color:'white',
   justifyContent:'center',
   alignItems:'center',
   padding:'1.5%',
   paddingHorizontal: '3%',
   backgroundColor: '#559782'
  },

  dateBtnTxt: {  
   color:'white',
  },

  pickedDate: {
    fontSize: 14,
    color: 'black',
    borderColor:'#cdcdcd', 
  },
  
  dateText: {
    fontSize:12,
    borderRadius:8,
    borderWidth:1,
    color: "#bbbbbb",
    borderColor:'#cdcdcd'  
  }

});

export default styles;

