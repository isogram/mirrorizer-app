import React from 'react'
import {Modal, StyleSheet, Text, View, Linking, ToastAndroid, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem, Left, Body} from 'native-base'

const styles = StyleSheet.create({
  modal : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor : 'rgba(0,0,0,0.3)'
  },
  modalShow : {
    backgroundColor : '#FFF',
    margin : 10,
    padding : 10,
    borderRadius :10,
    justifyContent : 'space-around'
  },
  containerButton : {
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  icon : {
    fontSize:25,
  }
})

const linksVendor = {
  GDRIVE : {name:"GOOGLE DRIVE", icon:"google-drive"},
  DROPBOX : {name:"DROPBOX", icon:"dropbox"},
  ONEDRIVE : {name:"ONE DRIVE", icon:"onedrive"},
}

const handleOpenLink = (url)=>{
  Linking.canOpenURL(url).then(supported =>{
    if(supported){
      return Linking.openURL(url)
    }else{
      ToastAndroid.show('cant open this file', ToastAndroid.SHORT);
    }
  }).catch( err=>{
    ToastAndroid.show('cant open this file '+err.message, ToastAndroid.SHORT);
  })
}

const renderVendor = (vendorItem, iter)=>{
  const {vendor, status, url} = vendorItem;
  if(status !== 'SUCCESS'){ return}
  const {key, name, icon} = linksVendor[vendor];
  return (
    <ListItem icon key={iter} onPress={()=>{ handleOpenLink(url) }}>
      <Left>
        <Icon name={icon} style={styles.icon} />
      </Left>
      <Body>
        <Text >{name}</Text>
      </Body>
    </ListItem>
  )
}

const MenuLink = (visible, vendors, hideMenuLink)=>{
  console.log('render Menu Link', vendors);
  if(!vendors){return null}
  return(
    <Modal
      transparent = {true}
      visible = {visible}
      onRequestClose = {()=>{console.log('request close')}}
    >
    <TouchableOpacity style={styles.modal} onPress={hideMenuLink}>
      <View style={styles.modalShow}>
        <Text>Open File</Text>
        {
          vendors.map( renderVendor )
        }
      </View>
    </TouchableOpacity>
    </Modal>
  )
}


export default MenuLink;
