import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, RefreshControl, BackHandler, Alert, ToastAndroid } from 'react-native'
import {
  Container, Header, Drawer, Title, Content, List, ListItem,
  Footer, FooterTab, Button, Left, Right, Body, Icon, Fab
} from 'native-base';
import {observer} from 'mobx-react/native'
import {Actions} from 'react-native-router-flux'
import FilePicker from '../../utils/FilePicker'

import SideBar from '../../components/SideBar'
import Menu from './Menu'
import InputAddUpdate from './InputAddUpdate'
import config from '../../config';

const LIMIT_PAGE = 100;

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
    const {store, token, parent_id, objDetail, useLocal} = this.props;
    store.list(token, parent_id, objDetail, 0, LIMIT_PAGE, true);

    this.arMenu = [
      {name : "Unggah File", icon : "ios-cloud-upload-outline", action : ()=>{
        FilePicker((res)=>{
          console.log('response FilePicker', res, this);
          if(res.error){
            ToastAndroid.show(res.message, ToastAndroid.SHORT);
          }else{
            this.state.showMenu = false;
            store.uploadFile(token, res.file, objDetail.directory_id, parent_id);
          }
        });
      }},
      {name : "Buat Folder", icon : "ios-folder-outline", action : ()=>{
        this.setState({
          showInputAddUpdate : true, showMenu : false,
          itemSelected : {type : 'dir', name : "", rename : false,
            action : (name)=>{ store.createDir(token, parent_id, name) }
          }
        })
      }}
    ]
    this.arMenuItemFolder = [
      {name : "Ganti nama", icon : "ios-create-outline", action : ()=>{
        this.setState({ showInputAddUpdate : true, showMenuItem : false });
      }},
      {name : "Hapus", icon : "ios-trash-outline", action : ()=>{
        this.state.showMenuItem = false;
        this.state.itemSelected.actionRemove();
      }}
    ]
    this.arMenuItemFile = [
      {name : "Ganti nama", icon : "ios-create-outline", action : ()=>{
        let item = this.state.itemSelected;
        item.rename = true;
        this.setState({ showInputAddUpdate : true, itemSelected : item, showMenuItem : false })
      }},
      {name : "Pindahkan", icon : "ios-redo-outline", action : ()=>{
        Actions.MoveFile({objMove : this.state.itemSelected})
      }},
      {name : "Hapus", icon : "ios-trash-outline", action : ()=>{
        this.state.showMenuItem = false;
        this.state.itemSelected.actionRemove();
      }}
    ]

    BackHandler.addEventListener('hardwareBackPress', function() {
      const parent_id = objDetail.parent_id;
      if(objDetail.directory_id == '0'){
        Alert.alert("Konfirmasi", "Keluar dari aplikasi?",
          [
            {text:"Tidak", style:'cancel'},
            {text:"Ya", onPress:()=>{BackHandler.exitApp()}}
          ]
        )
      }else{
        const objDetail = store.data[parent_id].objDetail;
        Actions.HomeScreen({parent_id : parent_id, objDetail : objDetail, useLocal : true})
      }
     return true;
    });
  }

  // in render function
  render() {
    const {store, token, user, logout, parent_id, objDetail, useLocal} = this.props;
    const {isLoading, dataShow} = store;
    console.log('storeFile', store);
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
        { this.renderMenuItem() }
        { this.renderInputAddUpdate() }
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

    return(
      <ListItem icon key={iter}>
        <Left>
          <Icon name={icon} style={styles.icon}/>
        </Left>
        <Body>
          <TouchableOpacity
            onPress={()=>{Actions.HomeScreen({parent_id : directory_id, objDetail : data})}}>
            <Text style={{color:config.themeColor}} numberOfLines={2}>{name}</Text>
          </TouchableOpacity>
        </Body>
        <Right >
          <TouchableOpacity
            onPress={()=>{
              const {store, token} = this.props;
              const itemSelected = {
                type : type, name : name, rename : true, index : iter, parent_id : parent_id, directory_id : directory_id, upload_id : upload_id,
                action : (name)=>{
                  type == 'dir' ? store.renameDir(token, directory_id, parent_id, iter, name) :
                          store.renameFile(token, upload_id, directory_id, iter, name)
                 },
                actionRemove : ()=>{ console.log('actionRemove', type);
                  type == 'dir' ? store.removeDir(token, directory_id, parent_id, iter) :
                          store.removeFile(token, upload_id, directory_id, iter);
                }
              }
              this.setState({ showMenuItem:true, itemSelected: itemSelected })
            }}
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
      const {type, name, rename, action} = itemSelected;
      let title = (type == 'dir' ? "folder" : "file");
      return <InputAddUpdate
        title={rename ? "Ganti nama "+title+" "+name : "Buat "+title+" baru"}
        valueInput={name}
        labelHide="BATALKAN" labelProces = {rename ? "GANTI NAMA" : "BUAT"}
        actionHide={()=>{this.setState({showInputAddUpdate:false})}}
        actionProces={action} />
    }
    return null;
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
