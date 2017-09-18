import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native'
import {
  Container, Header, Drawer, Title, Content, List, ListItem,
  Footer, FooterTab, Button, Left, Right, Body, Icon, Fab
} from 'native-base';
import {observer} from 'mobx-react/native'
import {Actions} from 'react-native-router-flux'

import SideBar from '../../components/SideBar'
import Menu from './Menu'
import InputAddUpdate from './InputAddUpdate'
import config from '../../config';

@observer
export default class HomeScreen extends Component {
  // static propTypes = {
  //   logout: PropTypes.func
  // }

  constructor(props) {
    super(props)
    this.drawer=""
    this.state = {
      showMenu : false,
      showMenuItem : false,
      itemSelected : {},
      showInputAddUpdate : false
    }
  }

  componentWillMount(){
    const {store, token} = this.props;
    // this.refreshData(store, token);

    this.arMenu = [
      {name : "Unggah File", icon : "ios-cloud-upload-outline", action : ()=>{}},
      {name : "Buat Folder", icon : "ios-folder-outline", action : ()=>{
        this.setState({
          showInputAddUpdate : true,
          itemSelected : {type : 'dir', name:"", rename:false},
          showMenu : false
        })
      }}
    ]
    this.arMenuItemFolder = [
      {name : "Ganti nama", icon : "ios-create-outline", action : ()=>{
        this.setState({showInputAddUpdate : true});
      }},
      {name : "Hapus", icon : "ios-trash-outline", action : ()=>{}}
    ]
    this.arMenuItemFile = [
      {name : "Ganti nama", icon : "ios-create-outline", action : ()=>{
        let item = this.state.itemSelected;
        item.rename = true;
        this.setState({
          showInputAddUpdate : true,
          itemSelected : item,
          showMenuItem : false
        })
      }},
      {name : "Pindahkan", icon : "ios-redo-outline", action : ()=>{}},
      {name : "Hapus", icon : "ios-trash-outline", action : ()=>{}}
    ]
  }

  refreshData(store, token){
    store.list(token, 0, 0, 100);
  }

  menuPressed = () => {
    this.drawer._root.open()
  }

  renderHeader(){
    return(
      <Header>
        <Left>
          <Button transparent onPress={Actions.drawerOpen}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Mirrorizer</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  renderRow(data, iter){
    if(!data){return null}
    const {name, parent_id, type} = data;
    const icon = type == 'dir' ? "ios-folder-outline" : "ios-document-outline";

    return(
      <ListItem icon key={iter}>
        <Left>
          <Icon name={icon} style={styles.icon}/>
        </Left>
        <Body>
          <Text style={{color:config.themeColor}} numberOfLines={2}>{name}</Text>
        </Body>
        <Right >
          <TouchableOpacity
            onPress={()=>{ this.setState({showMenuItem:true, itemSelected:data}) }}
          >
            <Icon name="ios-arrow-dropdown" style={styles.icon}/>
          </TouchableOpacity>
        </Right>
      </ListItem>
    )
  }

  renderMenu(){
    if(this.state.showMenu){
      return <Menu
              title="Tambahkan ke Mirrorizer"
              arMenu={this.arMenu}
              hideMenu = {()=>{this.setState({showMenu:false})}} />
    }
    return (
      <TouchableOpacity
       onPress={()=>{this.setState({showMenu : true})}}
       style={styles.btnAdd} >
         <Icon name="md-add" style={{color:'#FFF', fontSize:25}}/>
      </TouchableOpacity>
    )
  }

  renderMenuItem(){
    const {showMenuItem, itemSelected} = this.state;
    if(showMenuItem && itemSelected){
      const {name, parent_id, type} = itemSelected;
      return <Menu
              iconTitle={type == 'dir' ? "ios-folder-outline" : 'ios-document-outline'}
              title={" "+name}
              arMenu={type == 'dir' ? this.arMenuItemFolder : this.arMenuItemFile}
              hideMenu = {()=>{this.setState({showMenuItem:false})}} />
    }
    return null;
  }

  renderInputAddUpdate(){
    const {showInputAddUpdate, itemSelected} = this.state;
    if(showInputAddUpdate && itemSelected){
      const {type, name, rename} = itemSelected;
      let title = (type == 'dir' ? "folder" : "file");
      return <InputAddUpdate
        title={rename ? "Ganti nama "+title : "Buat "+title+" baru"}
        labelHide="BATALKAN" labelProces = {rename ? "GANTI NAMA" : "BUAT"}
        actionHide={()=>{this.setState({showInputAddUpdate:false})}}
        actionProces={()=>{}} />
    }
    return null;
  }

  // in render function
  render() {
    const {store, token, user, logout} = this.props;
    console.log('storeFile', store);
    return (
      <Container>
        {this.renderHeader()}
        <Content style={{backgroundColor:'#FFF'}}
          refreshControl={
            <RefreshControl
              refreshing={store.isLoading}
              onRefresh={()=>{this.refreshData(store, token)}}
            />}
        >
          <List
            dataArray={store.dataShow.slice()}
            renderRow={this.renderRow.bind(this)}
            >
          </List>
        </Content>
        { this.renderMenu() }
        { this.renderMenuItem() }
        { this.renderInputAddUpdate() }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    backgroundColor: config.themeColor,
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  btnAdd: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor: '#5968b7',
    borderRadius:100,
    position:'absolute', bottom:20, right :20
  },
  icon : {
    fontSize:25, color:config.themeColor
  }
})
