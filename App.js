import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect,useRef} from 'react';
import Home from './screens/home';
import Register from './screens/register';
import Login from './screens/login';
import UserScreen from './screens/userscreen';
import AccountSettings from './screens/accountsettings';
import ChangePass from './screens/changepass';
import PlantInfo from './screens/plantinfo';
import AddPlant from './screens/addplant';
import EditPlant from './screens/editplant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuProvider } from 'react-native-popup-menu';
import { View } from 'react-native';

export default function App() {
  const [toaster,setToaster] = useState(["","2","2"]);
  const [user,setUser] = useState("");
  const [plant,setPlant] = useState("");
  const [page, setPage] = useState("home");
  const [plantList, setPlantList] = useState([]);
  const [plantCount,setPlantCount] = useState(0);
  const [token,setToken] = useState(null);
  const [loading,setLoading] = useState(true);
  
  const assignToaster = (data) => {
    setToaster(data);
  }

  const assignUser = (newUser) =>{
    setUser(newUser);
  }

  const assignPlantCount = (count) => {
    setPlantCount(count);
  }

  const assignPlant = (data) => {
    setPlant(data);
  }

  const changePage = (newPage) => {
    setPage(newPage);
  }

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
        setToken(storedToken);  
        changePage("userscreen")
      }
    }catch(error){
      console.log(`Error encountered Home page ${error.message}`);
    }finally{
      setLoading(false);
    }
  }

  if(page == 'home'){
    if(!loading){
      return (
        <Home assignToken={setToken} change={changePage}/>
      )
    }else{
      return(
        <View></View>
      )
    }
  }else if(page == 'login'){
    return (
      <Login 
          assignToken={setToken} 
          change={changePage} 
          loadUser={assignUser}
      />
    )
  }else if(page == 'register'){
    return (
      <Register 
          assignToken={setToken} 
          change={changePage} 
          loadUser={assignUser}
      />
    )
  }else if(page == 'settings'){
    return (
      <AccountSettings 
        clearUser={assignUser}
        clearPlantList={setPlantList}
        clearPlantCount={assignPlantCount}
        change={changePage} 
        loadUser={user}/>
    )
  }else if(page == 'userscreen'){
    return (
      <UserScreen
        setUser={assignUser}
        token={token}
        alterToaster={assignToaster} 
        loadToaster={toaster} 
        loadPlantCount={plantCount}
        alterPlantCount={assignPlantCount}
        change={changePage} 
        loadPlantList={plantList}
        alterPlantList={setPlantList}
        loadPlant={assignPlant} 
        />
    )
  }else if(page == 'plantinfo'){
    return (
      <MenuProvider backHandler={true}>
        <PlantInfo 
          alterToaster={assignToaster}
          change={changePage} 
          loadPlant={plant}/>
      </MenuProvider>
    )
  }else if(page == 'changepass'){
    return (
      <ChangePass change={changePage} loadUser={user}/>
    )
  }else if(page == 'addplant'){
    return (
      <AddPlant
        token={token}
        alterToaster={assignToaster} 
        change={changePage}/>
    )
  }else if(page == 'editplant'){
    return (
      <MenuProvider backHandler={true}>
        <EditPlant
         token={token} 
         alterToaster={assignToaster} 
         change={changePage}
         changePlant={assignPlant}
         getPlant={plant}/>
      </MenuProvider>
    )
  }
  else{
    return(
      <View></View>
    )
  }
}





