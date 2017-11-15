import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, RefreshControl, BackHandler, Alert, ToastAndroid } from 'react-native'
import {
  Container, Header, Drawer, Title, Content, List, ListItem,
  Button, Left, Right, Body, Icon
} from 'native-base';
import {observer} from 'mobx-react/native'
import {Actions} from 'react-native-router-flux'

import config from '../../config';

const LIMIT_PAGE = 100;

@observer
export default class MoveFile extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount(){
    const {store, token, parent_id, objDetail, useLocal, objMove} = this.props;
    store.list(token, parent_id, objDetail, 0, LIMIT_PAGE, true);

    BackHandler.addEventListener('hardwareBackPress', function() {
      const parent_id = objDetail.parent_id;
      if(objDetail.directory_id == '0'){
        Alert.alert("Konfirmasi", "Batal pindah file?",
          [
            {text:"Tidak", style:'cancel'},
            {text:"Ya", onPress:()=>{
              Actions.HomeScreen()
            }}
          ]
        )

      }else{
        const objDetail = store.data[parent_id].objDetail;
        Actions.MoveFile({parent_id : parent_id, objDetail : objDetail, useLocal : true})
      }
     return true;
    });
  }

  // in render function
  render() {
    const {store, token, parent_id, objDetail, useLocal} = this.props;
    const {isLoading, dataShow} = store;
    console.log('MoveFile.render ', this.props)
    return (
      <Container>
        {this.renderHeader(objDetail.name)}
        <Content style={{backgroundColor:'#FFF'}}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={()=>{ store.list(token, parent_id, objDetail, 0, LIMIT_PAGE, false) }}
            />}
        >
          <List
            dataArray={dataShow.slice()}
            renderRow={this.renderRow.bind(this)}
            >
          </List>
        </Content>
        { this.renderMenu() }
      </Container>
    );
  }

  renderHeader(title){
    return(
      <Header>
        <Left>
          <Button transparent onPress={Actions.drawerOpen}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  renderRow(data, section, iter){
    if(!data){return null}
    const {name, parent_id, type, directory_id, upload_id} = data;
    const icon = type == 'dir' ? "ios-folder-outline" : "ios-document-outline";
    const colorText = type == 'dir' ? config.themeColor : '#aaa';
    // if(type != 'dir'){ return null }
    return(
      <ListItem icon key={iter}>
        <Left>
          <Icon name={icon} style={styles.icon}/>
        </Left>
        <Body>
          <TouchableOpacity
            onPress={()=>{if(type != 'dir'){ return null } Actions.MoveFile({parent_id : directory_id, objDetail : data, useLocal : true, objMove : this.props.objMove})}}>
            <Text style={{color:colorText}} numberOfLines={2}>{name}</Text>
          </TouchableOpacity>
        </Body>
      </ListItem>
    )
  }

  renderMenu(){
    return ( <TouchableOpacity style={styles.btnMove}
            onPress={ async ()=>{
              const {store, token, objMove, parent_id} = this.props;
              const {upload_id, directory_id, index, name} = objMove;
              const resMove = await store.moveFile(token, upload_id, parent_id, directory_id, index, name);
              console.log('moving', resMove)
              if(!resMove.error){
                Actions.HomeScreen(this.props)
              }
            }}>
            <Text style={{color:'#FFF', fontSize:13}}>Pindahkan</Text>
          </TouchableOpacity> )
  }

}

const styles = StyleSheet.create({
  btnMove : {
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#5968b7',
    position : 'absolute',
    height : 40,
    width : 80,
    bottom : 20,
    right : 20,
    borderRadius : 5
  },
  icon : {
    fontSize:25, color:config.themeColor
  }
})
