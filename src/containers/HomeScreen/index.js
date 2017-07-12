import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CustomButton from '../../components/CustomButton'
import DrawerMenu from '../../components/DrawerMenu'
import CustomToolbar from '../../components/CustomToolbar'

export default class HomeScreen extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  constructor(props) {
    super(props)
    menuPressed = this.menuPressed.bind(this);
  }

  state = {
    isOpen: null
  }

  menuPressed = () => {
    this.setState({isOpen: true})
  }

  // in render function
  render() {

    return (
      <DrawerMenu
        isOpen={this.state.isOpen}
        drawerPosition={"left"}
      >

        <View style={styles.container}>

          <CustomToolbar
            ref={(r) => { this.drawer = r }}
            text={'Mirrorizer'}
            onPressMenu={ this.menuPressed }
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
})
