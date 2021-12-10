import { StyleSheet , Dimensions } from 'react-native';

const btn = [8,'48%',15]; //padding , width
const windowWidth = Dimensions.get('window').width;
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
    height:windowHeight,
    justifyContent:'flex-start',
    alignItems:'center'
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

  errMessage: {
    color:"red"
  },

  defCont: {
    flex:1,
    width:windowWidth,
    height:windowHeight,
    justifyContent:'flex-start',
    alignItems:'center'
  },

  nav: { 
    paddingTop:'13%',
    padding:12,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#aac4a0'  
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
    backgroundColor:'#217e60'
  },

  submitTxt: {
    fontSize:14,
    color:'white'
  },

  //USERSCREEN STYLE
  mainCont: {
    width:'100%',
    height:windowHeight,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom: 10,
  },

  headerBar: {
    paddingTop:'12.5%',
    padding: '3.5%',
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
    height:'100%',
    width:'11.5%'
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

  addPlant: {
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor: '#f9f5f6',
    borderRadius: 10,
    padding: '2.5%',
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
    borderRadius: 7,
    width:'100%',
    height:'44%',
    backgroundColor: '#f9f5f6',
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

  plantPanels: {
    marginVertical:'1%',
    width:'80%',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },

  lineBreak: {
    width:'100%',
    height:'0.2%',
    backgroundColor: '#ddd',
  },

  plantCardImg: {   
    borderTopLeftRadius:11,
    borderTopRightRadius:11,
    width:'100%',
    height:'83%'
  },

  plantCard:{
    borderRadius:12,
    borderWidth:1,
    borderColor:'#b8b8b8',
    marginVertical: '2%',
    width:'48%',
    height:150,
  },

  plantCardNameCont: {
    justifyContent:'center',
    alignItems:'center',
    height:'17%',
    width:'100%'
  },

  plantCardName: {
    fontWeight:'bold',
  },

  //ACCOUNT SETTINGS
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

  //plantInfo
  navB: {
    paddingTop:'13%',
    padding:12,
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

  plantTxt: {
    marginLeft:'3%',
    fontSize: 15
  }

});

export default styles;

