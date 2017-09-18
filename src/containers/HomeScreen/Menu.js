import React, {Component} from 'react'
import {View, StyleSheet, Modal, Text, TouchableOpacity} from 'react-native'
import {containers, List, ListItem,
  Left, Right, Body, Icon} from 'native-base'

import config from '../../config'

export default class Menu extends Component{

  componentWillMount(){
  }

  renderRow(menu, iter){
    if(!menu){return null}
    const {name, icon, action} = menu;
    return (
      <ListItem icon key={iter} onPress={action}>
        <Left>
          <Icon name={icon} style={styles.icon}/>
        </Left>
        <Body>
          <Text style={{color:config.themeColor}} numberOfLines={2}>{name}</Text>
        </Body>
      </ListItem>
    )
  }

  render(){
    const {title, iconTitle, arMenu, hideMenu} = this.props;
    return(
      <Modal
        transparent = {true}
        visible = {true}
        style={{flex:3}}
        onRequestClose = {()=>{console.log('request close')}}
      >
        <TouchableOpacity style={styles.space} onPress={hideMenu} />
        <View
          style={styles.menu}
        >
          <ListItem itemHeader>
            { iconTitle ? <Icon name={iconTitle} style={{fontSize:20}}/> : null }
            <Text> {title}</Text>
          </ListItem>
          <List
            dataArray={arMenu}
            renderRow={this.renderRow}
          />
        </View>
      </Modal>
    )
  }

}

const styles = StyleSheet.create({
  space : {
    flex:2,
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  menu : {
    flex:1.5,
    backgroundColor:'#FFF',
    paddingRight : 20
  },
  icon : {
    fontSize:25,
    color:config.themeColor
  }
})
