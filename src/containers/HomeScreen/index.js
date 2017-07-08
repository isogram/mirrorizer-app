import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CustomButton from '../../components/CustomButton'
import DrawerMenu from '../../components/DrawerMenu'

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
    justifyContent: 'center',
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
})
