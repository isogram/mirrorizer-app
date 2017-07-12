import React, { PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import ActionBar from 'react-native-action-bar';


const CustomToolbar = ({ text, onPressMenu, ...otherProps }) => {

  return (
    <ActionBar
      containerStyle={styles.bar}
      title={'Mirrorizer'}
      titleStyle={styles.titleBar}
      leftIconName={'menu'}
      leftIconContainerStyle={styles.leftIconContainer}
      leftIconImageStyle={styles.leftIconBar}
      onLeftPress={ onPressMenu }
      onTitlePress={() => console.log('Title!')}
    />
  )

}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#E81123',
    height: 60
  },
  titleBar: {
    fontSize: 24
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
});


export default CustomToolbar