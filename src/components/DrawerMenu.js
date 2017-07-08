import React, { PropTypes } from 'react'
import { Platform, StyleSheet, View, Text, Easing } from 'react-native'
import Drawer from 'react-native-drawer-menu';

const IS_ANDROID = Platform.OS === 'android'

const DrawerMenu = ({ drawerPosition, children }) => {

  var drawerContent = (<View style={styles.drawerContent}>
      <View style={styles.leftTop}/>
      <View style={styles.leftBottom}>
        <View><Text>Drawer Content</Text></View>
      </View>
    </View>
  )

  return (

    <Drawer
      style={styles.container}
      drawerWidth={300}
      drawerContent={drawerContent}
      type={Drawer.types.Overlay}
      customStyles={{drawer: styles.drawer}}
      drawerPosition={drawerPosition}
      onDrawerOpen={() => {console.log('Drawer is opened ss');}}
      onDrawerClose={() => {console.log('Drawer is closed')}}
      easingFunc={Easing.ease}
    >
      <View style={styles.content}>

        {children}

      </View>


    </Drawer>

  )
}

DrawerMenu.propTypes = {
  drawerPosition: PropTypes.string,
  children: PropTypes.any
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    position: 'absolute',
    backgroundColor: '#2ba'
  },
  head: {
    height: 60,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#6a0d45'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftTop: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#cacaca'
  },
  leftBottom: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f0'
  },
  leftDrawer: {
    borderRightWidth: 4,
    borderRightColor: '#5b585a'
  },
  rightDrawer: {
    borderLeftWidth: 4,
    borderLeftColor: '#5b585a'
  },

  drawer: {
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10
  },
  mask: {}, // style of mask if it is enabled
  main: {}, // style of main board
});

export default DrawerMenu