const mongoose = require('mongoose')

mongoose.Promise = Promise



const url = `mongodb://localhost:27017/what_i_love`
const connection = mongoose.connect(url, { useMongoClient: true })
const db = mongoose.connection


const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
// ObjectId = mongoose.Types.ObjectId
const UserSchema = new Schema({
  name: { type: String, require: true,  unique: true, index: 1 }, // index 排序（1 正序， -1 逆序）
  age: { type: Number, max: 188, min: [0, 'you are too young to be born'] },
})

const UserModel = mongoose.model('user', UserSchema)

;(async ()=> {
  /*const u = await UserModel.create({
    name: "b",
    age: 21
  })
  return u*/
  /*const users = await UserModel.findOne({
    name: 'a'
  })*/
  const users = await UserModel.find({}, { age: 1 })
  return users
})()
 .then((r) => {
   console.log(r)
 })
 .catch((e) => {
   console.log(e)
 })

db.on('open', () => {
  console.log('db connected')
})

db.on('error', () => {
  console.log(e)
})
