const mongoose = require('mongoose')
const Schema = mongoose.Schema
var AdminSchema= new Schema({
  /* Person :{
       type: mongoose.Schema.Type.ObjectId,
       ref: 'Person',
       required: true
   }*/
   name: {
       type: String,
       //required: true
   },
   gender: {
       type: String,
       //required: true
   },
   Nationality: {
       type: String,
       //required: true
   },
   ID_Type: {
       type: String,
       //required: true
   },
   ID_number: {
       type: Number,
     //  required: true
   },
   Date_of_Birth: {
       type: Date,
       //required: true
   }
   ,
   Address: {
       type: String,
       ///required: true
   },
    Phone_number: {
       type: Number,
       //required: true
   },
   Fax_number: {
       type: Number,
       //required: true
   },
   Email: {
       type: String,
       //required: true
   },
   password:{
       type: String
   }
})
module.exports = Admin  = mongoose.model('Admin', AdminSchema);