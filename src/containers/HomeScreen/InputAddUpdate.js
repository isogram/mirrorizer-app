import React, {Component} from 'react'
import {View, StyleSheet, Modal, Text, TextInput, TouchableOpacity} from 'react-native'
import {Item, List, ListItem,
  Left, Right, Body, Icon, Button} from 'native-base'

import config from '../../config'

export default class InputAddUpdate extends Component{

  constructor(props){
    super(props)
    this.state = {
      valueInput : props.valueInput
    }
  }

  renderRow(menu, iter){
    if(!menu){return null}
    const {name, icon, action} = menu;
    return (
      <ListItem icon key={iter}>
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
    const {title, labelHide, labelProces, actionHide, actionProces} = this.props;
    return(
      <Modal
        transparent = {true}
        visible = {true}
        onRequestClose = {()=>{console.log('request close')}}
      >
      <View style={styles.modal}>
        <View style={styles.modalShow}>
          <Text>{title}</Text>
          <Item >
            <Icon name="ios-folder-outline" style={styles.icon}/>
            <TextInput
              onChangeText={(val)=>{this.setState({password:val})}}
              style={{color:config.themeColor, flex:1}}
              underlineColorAndroid="transparent"
              value={this.state.valueInput}/>
          </Item>
          {
            false ? <Spinner color="blue" size="small" /> :
            <View style={styles.containerButton} >
              <Button transparent iconLeft onPress={actionHide}><Text style={{color:config.themeColor}}>{labelHide}</Text></Button>
              <Button transparent iconLeft
                onPress={()=>{this.handleChangeEmail(store)}}>
                <Text style={{color:config.themeColor}}>{labelProces}</Text>
              </Button>
            </View>
          }
        </View>
      </View>
      </Modal>
    )
  }

}

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
    color:config.themeColor
  }
})
