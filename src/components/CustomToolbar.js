import React, { PropTypes } from 'react'
import { View, ToolbarAndroid, StyleSheet } from 'react-native'

const CustomToolbar = ({ text, ...otherProps }) => {

  return (
    <View style={styles.toolbarWrapper}>
      <ToolbarAndroid
          // actions={toolbarMenu}
          // onActionSelected={}
          // style={styles.toolbar}
          title={text} />
    </View>
  )

}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#000000',
        height: 56,
    },
    toolbarWrapper: {
        borderBottomColor: '#e0e0e0',
        elevation: 3
    },
    row: {
        flexDirection: 'row',
    }
});


export default CustomToolbar