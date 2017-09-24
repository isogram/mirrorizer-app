import React, {Component} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

import config from '../../config'

const logoApp = require('../../images/logo.png');

export default class About extends Component{

  render(){
    return (
      <View style={styles.containers}>
        <Image source={logoApp} style={styles.logoApp} />
        <View style={styles.content}>
          <Text style={{fontWeight : 'bold', fontSize:14, textAlign:'center'}}>Mirrorizer {config.version}</Text>
          <Text>Build for ...</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containers : {
    flex :2
  },
  logoApp:{
    flex: .6,
    width: null,
    height: null,
    backgroundColor: '#f0f0f0',
    resizeMode: 'contain',
    margin : 10
  },
  content : {
    flex : 1.4,
    backgroundColor : '#f0f0f0',
    padding :10
  }
})
