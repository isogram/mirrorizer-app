import React, {Component} from 'react'
import {StyleSheet, View, TouchableOpacity, Text, TextInput} from 'react-native'
import {
  Container, Drawer, Content, Header, Left, Button, Separator, Spinner,
  Icon, Title, Right, Form, Item, Label, Body, ListItem, Input} from 'native-base'
import {Actions} from 'react-native-router-flux'

import SideBar from '../../components/SideBar'
import config from '../../config'

export default class Settings extends Component{

  constructor(props){
    super(props)
    this.state = {
      changeEmail : false,
      loadingEmail : false,
      changePassword : false,
      loadingPassword : false,
      email : props.store.userLogin.user.email,
      newPassword : "",
      password : ""
    }
  }

  menuPressed = () => {
    console.log('menuPressed', this.props.drawer, this.refs, this.root)
    // this.drawer._root.open()
    // this.props.navigation.navigate.open()
    // Actions.get('drawer').ref.open();
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
          <Title >Settings</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  handleChangeEmail(store){
    if(store){
      const {email, password} = this.state;
      this.setState({loadingEmail : true})
      store.changeEmail(email, password).then((result)=>{
        console.log('handleChangeEmail', result);
        let email = store.userLogin.user.email;
        if(!result.error){
          email = result.result.email;
        }
        this.setState({email : email, password : "", changeEmail : false, loadingEmail : false})
      })
    }
  }

  renderInputEmail(store){
    if(!this.state.changeEmail){
      return (
        <ListItem icon>
          <Left><Icon name="ios-mail-outline" style={styles.icon}/></Left>
          <Body><Text style={{color:config.themeColor}}>{this.state.email}</Text></Body>
          <Right>
            <TouchableOpacity onPress={()=>{this.setState({changeEmail:true})}}>
              <Icon name="md-create" style={styles.icon}/>
            </TouchableOpacity>
          </Right>
        </ListItem>
      )
    }else{
      return(
        <View style={{padding:10}}>
          <Item>
            <Icon name="ios-mail-outline" style={styles.icon}/>
            <TextInput onChangeText={(val)=>{this.setState({email:val})}} style={{color:config.themeColor, flex:1}} underlineColorAndroid="transparent" placeholder="email baru" placeholderTextColor="#aaa"/>
          </Item>
          <Item>
            <Icon name="ios-key-outline" style={styles.icon}/>
            <TextInput secureTextEntry onChangeText={(val)=>{this.setState({password:val})}} style={{color:config.themeColor, flex:1}} underlineColorAndroid="transparent" placeholder="password" placeholderTextColor="#aaa"/>
          </Item>
          {
            this.state.loadingEmail ? <Spinner color="blue" size="small" /> :
            <View style={{flexDirection:'row', justifyContent:'space-around'}} >
              <Button transparent iconLeft onPress={()=>{this.setState({changeEmail:false})}}><Icon name="ios-close"/><Text style={{color:config.themeColor}}>Batal</Text></Button>
              <Button transparent iconLeft
                onPress={()=>{this.handleChangeEmail(store)}}>
                <Icon name="ios-checkmark"/><Text style={{color:config.themeColor}}>Ganti</Text>
              </Button>
            </View>
          }
        </View>
      )
    }
  }

  handleChangePassword(store){
    if(store){
      const {password, newPassword} = this.state;
      this.setState({loadingPassword : true})
      store.changePassword(password, newPassword).then((result)=>{
        console.log('handleChangePassword', result);
        this.setState({password : "", newPassword : "", changePassword : false, loadingPassword : false})
      })
    }
  }

  renderInputPassword(store){
    if(!this.state.changePassword){
      return (
        <ListItem icon>
          <Left><Icon name="ios-key-outline" style={styles.icon}/></Left>
          <Body><Text style={{color:config.themeColor}}>******</Text></Body>
          <Right><TouchableOpacity onPress={()=>{this.setState({changePassword:true})}}><Icon name="md-create" style={styles.icon}/></TouchableOpacity></Right>
        </ListItem>
      )
    }else{
      return(
        <View style={{padding:10}}>
          <Item>
            <Icon name="ios-key-outline" style={styles.icon}/>
            <TextInput secureTextEntry onChangeText={(val)=>{this.setState({password:val})}} style={{color:config.themeColor, flex:1}} underlineColorAndroid="transparent" placeholder="password lama" placeholderTextColor="#aaa"/>
          </Item>
          <Item>
            <Icon name="ios-key" style={styles.icon}/>
            <TextInput secureTextEntry onChangeText={(val)=>{this.setState({newPassword:val})}} style={{color:config.themeColor, flex:1}} underlineColorAndroid="transparent" placeholder="password baru" placeholderTextColor="#aaa"/>
          </Item>
          {
            this.state.loadingPassword ? <Spinner color="blue" size="small"/> :
            <View style={{flexDirection:'row', justifyContent:'space-around'}} >
              <Button transparent iconLeft onPress={()=>{this.setState({changePassword:false})}}><Icon name="ios-close"/><Text style={{color:config.themeColor}}>Batal</Text></Button>
              <Button transparent iconLeft onPress={()=>{this.handleChangePassword(store)}}><Icon name="ios-checkmark"/><Text style={{color:config.themeColor}}>Ganti</Text></Button>
            </View>
          }
        </View>
      )
    }
  }

  render(){
    const {userLogin, logout} = this.props.store;
    const {user} = userLogin;
    console.log('render settings',this.props, this.props.content);
    return(
        <Container style={styles.container}>
          {this.renderHeader()}
          <Content style={{paddingTop:20}}>
            <Separator bordered><Text>Email</Text></Separator>
            {this.renderInputEmail(this.props.store)}
            <Separator bordered><Text>Password</Text></Separator>
            {this.renderInputPassword(this.props.store)}
          </Content>
        </Container>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#FFF'
  },
  icon : {
    fontSize:25,
    color:config.themeColor
  }
})
