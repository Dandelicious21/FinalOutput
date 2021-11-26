import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View,Text } from 'react-native';
import Home from './screens/home';
import Register from './screens/register';
import Login from './screens/login';
import UserScreen from './screens/userscreen';
import Settings from './screens/settings';
import ChangePass from './screens/changepass';
import PlantInfo from './screens/plantinfo';
import AddPlant from './screens/addplant';

//change settings to account settings
export default function App() {
  const [page, setPage] = useState("home");
  const changePage = (newPage) => {
    setPage(newPage);
  }

  if(page == 'home'){
    return (
      <Home change={changePage}/>
    )
  }else if(page == 'login'){
    return (
      <Login change={changePage}/>
    )
  }else if(page == 'register'){
    return (
      <Register change={changePage}/>
    )
  }else if(page == 'settings'){
    return (
      <Settings change={changePage}/>
    )
  }else if(page == 'userscreen'){
    return (
      <UserScreen change={changePage}/>
    )
  }else if(page == 'plantinfo'){
    return (
      <PlantInfo change={changePage}/>
    )
  }else if(page == 'changepass'){
    return (
      <ChangePass change={changePage}/>
    )
  }else if(page == 'addplant'){
    return (
      <AddPlant change={changePage}/>
    )
  }
  else{}
}





