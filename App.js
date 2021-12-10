import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Home from './screens/home';
import Register from './screens/register';
import Login from './screens/login';
import UserScreen from './screens/userscreen';
import AccountSettings from './screens/accountsettings';
import ChangePass from './screens/changepass';
import PlantInfo from './screens/plantinfo';
import AddPlant from './screens/addplant';
import EditPlant from './screens/editplant';
import { ScrollView } from 'react-native'

//change settings to account settings
export default function App() {

  const [user,setUser] = useState("");
  const [plant,setPlant] = useState("");
  const [page, setPage] = useState("home");

  const assignUser = (newUser) =>{
    setUser(newUser);
  }

  const assignPlant = (data) => {
    setPlant(data);
  }

  const changePage = (newPage) => {
    setPage(newPage);
  }

  if(page == 'home'){
    return (
      <Home change={changePage}/>
    )
  }else if(page == 'login'){
    return (
      <Login change={changePage} loadUser={assignUser}/>
    )
  }else if(page == 'register'){
    return (
      <Register change={changePage} loadUser={assignUser}/>
    )
  }else if(page == 'settings'){
    return (
      <AccountSettings change={changePage} loadUser={user}/>
    )
  }else if(page == 'userscreen'){
    return (
      <UserScreen change={changePage} loadPlant={assignPlant} loadUser={user}/>
    )
  }else if(page == 'plantinfo'){
    return (
      <PlantInfo change={changePage} loadPlant={plant}/>
    )
  }else if(page == 'changepass'){
    return (
      <ChangePass change={changePage} loadUser={user}/>
    )
  }else if(page == 'addplant'){
    return (
      <AddPlant change={changePage} loadUser={user}/>
    )
  }else if(page == 'editplant'){
    return (
      <EditPlant change={changePage}
       changePlant={assignPlant}
       getPlant={plant}
      />
    )
  }
  else{
    //TBD
  }
}





