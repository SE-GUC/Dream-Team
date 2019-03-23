const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userschema = new Schema({
   name: {
       type: String,
       required: true
   },
   accountType:{
       type: String,
       required: true
   },
   gender: {
       type: String,
      // required: true
   },
   nationality: {
       type: String,
       required: true
   },
   typeID: {
       type: String,
       required: true
   },
   numberID: {
       type: Number,
       required: true
   },
   dateOfBirth: {
       type: Date,
       required: true
   },

   address: {
       type: String,
       required: true
   },
    phoneNumber: {
       type: Number
      // required: true
   },
   faxNumber: {
       type: Number
      // required: true
   },
   accountStatus: {
       type: Boolean,
       default : false
   },

   email: {
       type: String,
      // required: true
   },
   password: {
       type: String,
       required: true
   },
   rejectionMessage: {
    type: String,
    default : false
},
   investorType  :{
       type: String
      // require: true
   } ,
   capital:{
       type:Number,
       require:true
   } ,
   capitalCurrency: {
   type:String,
   require: true
   }
})

module.exports = user = mongoose.model('User', userschema);