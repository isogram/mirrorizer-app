import {observable} from 'mobx'
import {ToastAndroid} from 'react-native'
import config from '../config'

class FileStore{

  @observable isLoading = false;

  /**
    untuk menyimpan data yang sedang ditampilkan
    {detail : 'objDetail', arrData : 'array_data'}
    - detail = detail objek (direktori) yang sedang ditampilkan
    - arrData = array data yang berada dalam direktori
  **/
  dataShow = [];

  /**
    data => untuk menampung data directory yang telah diambil
    {"key" : {objDetail : "objDetail", arrData : "array_data"}}
    - key = directory_id
    - objDetail = data detail object (directory)
    - array_data = array on directory
  **/
  data = {};

  /**
    function untuk mengirim request ke server Mirrorizer
    - path : path server yang di tuju (e.g directory)
    - option : set option request (methods, header, body)
    - action : function yang dieksekusi setela request selesai
  **/
  async fetchData(path, option, action){
    this.isLoading = true;
    let resJSON = {error : true, message:"", result:[]}
    try{
      const response = await fetch(config.urlEndPoint+path, option)
      resJSON = await response.json();
    }catch(err){
      resJSON.message = err.message;
    }
    ToastAndroid.show(resJSON.message, ToastAndroid.SHORT);
    action(resJSON);
    this.isLoading = false;
    return resJSON;
  }

 /**
  function untuk validasi data yang akan di gunakan
  - arrData = daftar data yang di validas
  - actionName = nama aksi yang akan ditampilkan ketika data tidak lengkap
 **/
  validasiData(arrData, actionName){
    let result = {error : false, message:"", result:[]};
    for(key in arrData){
		  if(!arrData[key]){
        result = {error : true, message:"Data "+actionName+" belum lengkap", result:[]}
        break;
      }
	  }
    if(result.error){
      ToastAndroid.show(result.message, ToastAndroid.SHORT);
    }
    return result;
  }

  // function untuk membersihkan data yang telah digunakan
  clearData(){
    this.dataShow = [];
    this.data = {};
  }

  /**
    function untuk mendapatkan daftar folder dan file
    - token = token yang didapatkan setelah user login
    - parent_id = parent_id dari folder yang di request
    - objDetail = detail objek (folder)
    - page =
    - per_page = limit jumlah item (folder/file)
    - userLogin = (boolean) true jika diinginkan mencari data dari local hp (this.data), false untuk mendapatkan data dari server
  **/
  async list(token, parent_id, objDetail, page, per_page, useLocal){
    const unValidData = this.validasiData([token, (parent_id >= 0)], 'List');

    if(unValidData.error){
      return unValidData;
    }
    if(useLocal && this.data[parent_id]){
      this.dataShow = this.data[parent_id].arrData;
      this.isLoading = false;
    }else{
      this.dataShow = [];
      const res = await this.fetchData(
        "/lists/?page="+page+"&parent_id="+parent_id+"&per_page="+per_page,
        {
          method : "GET",
          headers : {
            "token": token, "Content-Type": "application/json","Accept": "application/json"
          }
        },
        (resJSON)=>{
          // console.log('getList', res);
          if(!resJSON.error){
            this.dataShow = resJSON.result.data;
            if(!this.data[parent_id]){
              this.data[parent_id] = {objDetail : objDetail, arrData : resJSON.result.data};
            }
          }
        }
      );
    }
    console.log('data', this.data, this.dataShow);
    return true;
  }

  /**
    function untuk request buat folder ke server
    - token = token user
    - parent_id = directory_id tempat folder
    - name = nama folder
  **/
  async createDir(token, parent_id, name){
    const unValidData = this.validasiData([token, (parent_id >= 0), name], 'Buat Folder');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("/directory", {
        method : "POST",
        headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"},
        body : JSON.stringify({name : name, parent_id : parent_id})
      },
      (resJSON)=>{
        // console.log('fileStore.createDir', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(0,0,result);
          this.data[parent_id].arrData = this.dataShow;
        }
      }
    )
    return res;
  }

  /**
   function untuk request ubah nama directory ke server
   - token = token user
   - dir_id = id directory yang akan dirubah namanya
   - parent_id = id parent directory
   - index = letak directori di daftar tampilan (this.dataShow)
   - name = nama baru untuk directory
  **/
  async renameDir(token, dir_id, parent_id, index, name){
    const unValidData = this.validasiData([token, (dir_id >= 0), (parent_id >= 0), (index >=0), name], 'Ubah nama folder');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("/directory/"+dir_id, {
        method : "POST",
        headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"},
        body : JSON.stringify({name : name, parent_id : parent_id})
      },
      (resJSON)=>{
        // console.log('fileStore.renameDir', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(index, 1, result);
          this.data[parent_id].arrData = this.dataShow;
        }
      }
    )
    return res;
  }

  /**
   function untuk request hapus directory ke server
   - token = token user
   - dir_id = id directory yang akan dihapus
   - parent_id = id parent directory
   - index = letak directori di daftar tampilan (this.dataShow)
  **/
  async removeDir(token, dir_id, parent_id, index){
    const unValidData = this.validasiData([token, (dir_id >= 0), (parent_id >= 0), (index >=0)], 'Hapus Folder');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("/directory/"+dir_id, {
        method : "DELETE",
        headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"}
      },
      (resJSON)=>{
        // console.log('fileStore.removeDir result =>', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(index, 1);
          this.data[parent_id].arrData = this.dataShow;
        }
      }
    )
    return res;
  }

  /**
    function untuk upload file ke server
    - token = token user
    - file = object file yang dikirim e.g {name : "name.jpg", type : "image/jpeg", uri : "file://storage/" }
    - parent_id = directory_id tempat folder
  **/
  async uploadFile(token, file, directory_id, parent_id){
    const unValidData = this.validasiData([token, file, (directory_id >= 0), (parent_id >= 0)], 'Upload File');
    if(unValidData.error){
      return unValidData;
    }
    let data = new FormData();
    data.append('file', file);
    data.append('directory_id', directory_id);
    const res = await this.fetchData("/uploads", {
        method : "POST",
        headers : {"token": token, "Content-Type": "multipart/form-data", "Accept": "application/json"},
        body : data
      },
      (resJSON)=>{
        // console.log('fileStore.uploadFile', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(0,0,result);
          this.data[parent_id].arrData = this.dataShow;
        }
      }
    )
    return res;
  }

  /**
   function untuk request ubah nama file ke server
   - token = token user
   - file_id = id file (upload_id) yang akan dirubah namanya
   - parent_id = id directory (directory_id)
   - index = letak directori di daftar tampilan (this.dataShow)
   - fileName = nama baru untuk file
  **/
  async renameFile(token, file_id, parent_id, index, fileName){
    const unValidData = this.validasiData([token, (file_id >= 0), (parent_id >= 0), (index >=0), fileName], 'Ubah nama file');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("/uploads/"+file_id, {
        method : "POST",
        headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"},
        body : JSON.stringify({filename : fileName, directory_id : parent_id})
      },
      (resJSON)=>{
        // console.log('fileStore.renameFile', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(index, 1, result);
          this.data[parent_id].arrData = this.dataShow;
        }
      }
    )
    return res;
  }

  /**
   function untuk request hapus file ke server
   - token = token user
   - file_id = id file yang akan dihapus (upload_id)
   - parent_id = id parent file (directory_id)
   - index = letak file di daftar tampilan (this.dataShow)
  **/
  async removeFile(token, file_id, parent_id, index){
    console.log('FileStore.removeFile ', file_id, parent_id, index);
    const unValidData = this.validasiData([token, (file_id >= 0), (parent_id >= 0), (index >=0)], 'Hapus Folder');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("/uploads/"+file_id, {
        method : "DELETE",
        headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"}
      },
      (resJSON)=>{
        console.log('fileStore.removeFile result =>', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(index, 1);
          this.data[parent_id].arrData = this.dataShow;
        }
      }
    )
    return res;
  }

  /**
   function untuk request ubah nama file ke server
   - token = token user
   - file_id = id file (upload_id) yang akan dirubah namanya
   - parent_id = id directory (directory_id)
   - index = letak directori di daftar tampilan (this.dataShow)
   - fileName = nama baru untuk file
  **/
  async moveFile(token, file_id, newDir_id, oldDir_id, oldIndex, fileName){
    const unValidData = this.validasiData([token, (file_id >= 0), (newDir_id >= 0), (oldDir_id >= 0), (oldIndex >=0), fileName], 'pindah file');
    if(unValidData.error){
      return unValidData;
    }
    const res = await this.fetchData("/uploads/"+file_id, {
        method : "POST",
        headers : {"token": token, "Content-Type": "application/json","Accept": "application/json"},
        body : JSON.stringify({filename : fileName, directory_id : newDir_id})
      },
      (resJSON)=>{
        console.log('fileStore.moveFile', resJSON);
        const {error, message, result} = resJSON;
        if(!error){
          this.dataShow.splice(0, 0, result);
          this.data[newDir_id].arrData = this.dataShow;
          if(this.data[oldDir_id] && this.data[oldDir_id].arrData){
            this.data[oldDir_id].arrData.splice(oldIndex, 1)
          }
        }
      }
    )
    return res;
  }


}

const fileStore = new FileStore();
export default fileStore;
