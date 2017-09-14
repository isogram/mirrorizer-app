import React, { Component } from 'react'
import {Actions, scenes, Router} from 'react-native-router-flux';

import AuthScreen from './containers/AuthScreen'
import HomeScreen from './containers/HomeScreen'

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
export default class MirrorizerApp extends Component {

  componentWillMount(){
    this.scenes = Actions.create(
      <Scene key="root" tabs={false}>
        
      </Scene>
    );
  }

}
