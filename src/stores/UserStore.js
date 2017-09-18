import {observable} from 'mobx'
import {ToastAndroid} from 'react-native'
import config from '../config'
import realm from '../realm/UserSchema'

class UserStore{

  @observable userLogin = {
    token : "",
    user : {
      created_at : "",
      id : "",
      username : "",
      email : "",
      is_active : "",
      update_at : ""
    }
  }
  @observable isLoading = false;

  constructor(){
    this.avaibleUser()
  }

  async fetchData(path, method, body){
    this.isLoading = true;
    const token = this.userLogin.token;
    let resJSON = {error : true, message:"", result:[]}
    try{
      const response = await fetch(config.urlEndPoint+"/members/"+path, {
        method : method,
        headers : {"Content-Type": "application/json", "Accept": "application/json", "token":token},
        body : JSON.stringify(body)
      })
      resJSON = await response.json();
    }catch(err){
      resJSON.message = err.message;
    }
    ToastAndroid.show(resJSON.message, ToastAndroid.SHORT);
    this.isLoading = false;
    return resJSON;
  }

  validasiData(arrData, actionName){
    let result = {error : false, message:"", result:[]};
    for(key in arrData){
		  if(!arrData[key]){
        result = {error : true, message:"Data "+actionName+" belum lengkap", result:[]}
        break;
      }
	  }
    return result;
  }

  avaibleUser(){
    const userRealm = realm.objects("User");;
    if(userRealm.length > 0){
      const {token, user} = userRealm[0];
      this.userLogin = {token : token, user : JSON.parse(user) };
      console.log('avaibleUser', this.userLogin);
    }else{
      this.userLogin = {
        token : "",
        user : {
          created_at : "",
          id : "",
          username : "",
          email : "",
          is_active : "",
          update_at : ""
        }}
    }
    console.log('avaibleUser', this.userLogin);
  }

  async register(email, password, username){
    const unValidData = this.validasiData([username, email, password], 'register');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("register", "POST", {
      username : username,
      email : email,
      password : password
    });
    return res;
  }

  async login(email, password){
    const validData = this.validasiData([email, password], 'login');
    if(validData.error){
      return validData;
    }
    const res = await this.fetchData("login", "POST", {
      email : email,
      password : password
    });
    if(!res.error){
      // await AsyncStorage.setItem('user', JSON.stringify(res.result))
      const {token, user} = res.result;
      realm.write(()=>{
        realm.create("User", {_id: '1', token : token, user : JSON.stringify(user)}, true)
      })
      this.avaibleUser();
    }
    return res;
  }

  async resetPassword(email){
    const validData = this.validasiData([email], 'reset password');
    if(validData.error){
      return validData;
    }
    const res = await this.fetchData("reset-password", "POST", {
      email : email
    });
    return res;
  }

  async changeEmail(email, password){
    const validData = this.validasiData([email, password], 'change email');
    if(validData.error){
      return validData;
    }
    const res = await this.fetchData('change-email', 'POST', {
      email : email,
      current_password : password
    });
    if(!res.error){
      const token = this.userLogin.token;
      realm.write(()=>{
        realm.create("User", {_id : '1', token : token, user : JSON.stringify(res.result)}, true)
      })
      this.avaibleUser();
    }
    return res;
  }

  async changePassword(oldPassword, newPassword){
    const validData = this.validasiData([oldPassword, newPassword], 'change password');
    if(validData.error){
      return validData;
    }
    const res = await this.fetchData('change-password', 'POST', {
      password : newPassword,
      current_password : oldPassword
    });
    return res;
  }

  async logout(){
    const storage = realm.write(()=>{
      const user = realm.objects('User');
      realm.delete(user);
    })
    console.log('UserStore.logout', storage);
    this.avaibleUser();
  }



}

const userStore = new UserStore();
export default userStore;
