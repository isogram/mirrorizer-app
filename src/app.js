import React, { Component } from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux';

import AuthScreen from './containers/AuthScreen'
import HomeScreen from './containers/HomeScreen'
import Settings from './containers/Settings'
import About from './containers/About'
import MoveFile from './containers/HomeScreen/MoveFile'
import SideBar from './components/SideBar'

import {UserStore, FileStore} from './stores';

const INITIAL_DETAIL = {parent_id : 0, directory_id : 0, name : "Mirrorizer"};

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
              <Scene key="HomeScreen" type="replace" component={HomeScreen} store={FileStore} token={userLogin.token} parent_id={0} objDetail={INITIAL_DETAIL} useLocal={false} hideNavBar/>
              <Scene key="MoveFile" type="replace" component={MoveFile} store={FileStore} token={userLogin.token} parent_id={0} objDetail={INITIAL_DETAIL} objMove={null} useLocal={true} hideNavBar/>
              <Scene key="AuthScreen" initial={(userLogin.token == "")} component={AuthScreen} store={UserStore} hideNavBar/>
              <Scene key="About" component={About} hideNavBar/>
              <Scene key="Settings" component={Settings} store={UserStore} hideNavBar />
            </Scene>
          </Scene>
        </Scene>
      );
  }

  render(){
    return <Router scenes={this.scenes}/>
  }

}
