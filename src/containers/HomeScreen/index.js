import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CustomButton from '../../components/CustomButton'
import DrawerMenu from '../../components/DrawerMenu'

import ActionBar from 'react-native-action-bar';

/**
 * Just a centered logout button.
 */
export default class HomeScreen extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

// in render function
render() {

  return (
    <DrawerMenu
      drawerPosition={"left"}
    >

      <View style={styles.container}>

        <ActionBar
          containerStyle={styles.bar}
          title={'React-native-action-bar Example'}
          rightText={'Hello'}
          leftIconName={'menu'}
          leftIconContainerStyle={styles.leftIconContainer}
          leftIconImageStyle={styles.leftIconBar}
          onLeftPress={() => console.log('Left!')}
          onTitlePress={() => console.log('Title!')}
        />

        <CustomButton
          text={'Logout'}
          onPress={this.props.logout}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>

    </DrawerMenu>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  bar: {
    backgroundColor: '#E81123',
    height: 60
  },
  leftIconContainer : {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconBar : {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
})
