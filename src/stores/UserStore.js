import {observable} from 'mobx'
import {ToastAndroid} from 'react-native'
import config from '../config'

class UserStore{

  @observable userLogin = {
    token : "",
    user : {
      id : "",
      username : "",
      email : ""
    }
  }
  @observable isLoading = false;

  async fetchData(path, method, body){
    this.isLoading = true;
    let resJSON = {error : true, message:"", result:[]}
    try{
      const response = await fetch(config.urlEndPoint+"/members/"+path, {
        method : method,
        headers : {"Content-Type": "application/json", "Accept": "application/json"},
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



}

const userStore = new UserStore();
export default userStore;
