import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import Home from './screens/home';
import Register from './screens/register';
import Login from './screens/login';
import UserScreen from './screens/userscreen';
import AccountSettings from './screens/accountsettings';
import ChangePass from './screens/changepass';
import PlantInfo from './screens/plantinfo';
import AddPlant from './screens/addplant';
import EditPlant from './screens/editplant';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  const [toaster,setToaster] = useState(["","2","2"]);
  const [user,setUser] = useState("");
  const [plant,setPlant] = useState("");
  const [page, setPage] = useState("login");
  const [plantList, setPlantList] = useState([]);
  const [plantCount,setPlantCount] = useState("");

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

  //Userscreen pre-loaded values

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
        alterToaster={assignToaster} 
        loadToaster={toaster} 
        loadPlantCount={plantCount}
        alterPlantCount={assignPlantCount}
        change={changePage} 
        loadPlantList={plantList}
        alterPlantList={setPlantList}
        loadPlant={assignPlant} 
        loadUser={user}/>
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
        alterToaster={assignToaster} 
        change={changePage} 
        loadUser={user}/>
    )
  }else if(page == 'editplant'){
    return (
      <MenuProvider backHandler={true}>
        <EditPlant 
         alterToaster={assignToaster} 
         change={changePage}
         changePlant={assignPlant}
         getPlant={plant}
         loadUser={user}
        />
      </MenuProvider>
    )
  }
  else{
    // return(
    //   <MenuProvider backHandler={true} >
    //   <View style={{backgroundColor:'green',flex:1,justifyContent:'center',alignItems:'center'
    //   }}>
    //     <Text>Hello world!</Text>
    //     <Menu style={{marginBottom:20}}>
    //       <MenuTrigger text='Select action'/>
    //       <MenuOptions optionsContainerStyle={{ marginTop:40 }}>
    //         <MenuOption onSelect={() => alert(`Save`)} text='Save' />
    //         <MenuOption onSelect={() => alert(`Delete`)} >
    //           <Text style={{color: 'red'}}>Delete</Text>
    //         </MenuOption>
    //         <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
    //       </MenuOptions>
    //     </Menu>
    //   </View>
    //   </MenuProvider>
    // )
  }
}





