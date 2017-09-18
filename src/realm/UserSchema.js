import Realm from 'realm';

const UserSchema = {
  name : "User",
  primaryKey : '_id',
  properties : {
    _id : "string",
    token : "string",
    user : "string"
  }
}

let realm = new Realm({schema : [UserSchema]})
export default realm;
