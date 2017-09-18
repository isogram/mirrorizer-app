import React, { Component } from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux';

import AuthScreen from './containers/AuthScreen'
import HomeScreen from './containers/HomeScreen'
import Settings from './containers/Settings'
import DrawerMenu from './components/DrawerMenu'
import SideBar from './components/SideBar'

import {UserStore, FileStore} from './stores';

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
export default class MirrorizerApp extends Component {

   componentWillMount(){
      // UserStore.avaibleUser()
      const {userLogin, logout} = UserStore;
      this.scenes = Actions.create(
        <Scene key="root">
          <Scene key="drawer" drawer contentComponent={SideBar} open={true} hideNavBar>
            <Scene key="main" >
              <Scene key="Settings" component={Settings} store={UserStore} hideNavBar />
              <Scene key="HomeScreen" component={HomeScreen} store={FileStore} token={userLogin.token} user={userLogin.user} logout={()=>{logout()}} hideNavBar/>
              <Scene key="AuthScreen" initial={(userLogin.token == "")} component={AuthScreen} store={UserStore} hideNavBar/>
            </Scene>
          </Scene>
        </Scene>
      );
  }

  render(){
    return <Router scenes={this.scenes}/>
  }

}
