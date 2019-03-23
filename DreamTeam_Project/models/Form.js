const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BoardofdirectorsSchema= require('../models/Boardofdirectors');
const FormSchema = new Schema({
 companyName: {
   type: String,
   required: true
 },
 companyNameEng: {
   type: String,
   required: false
 },
 companyType: {
   type: String,
   required: false
 },
 headquarters: {
   governorate: {
     type: String,
     required: true
   },
   city: {
     type: String,
     required: true
   },
   address: {
     type: String,
     required: true
   },
   telephone: {
     type: String,
     required: true
   },
   fax: {
     type: String,
     required: true
   }
 },

 // boardOfDirectors: {
 //       name: {
 //       type: String,
 //       required: true
 //       } ,
 //       investorType  :{
 //       type: String,
 //       require: true
 //       } ,
 //       gender: {
 //         type: String,
 //         required: true
 //       } ,
 //       Nationality: {
 //         type: String,
 //         required: true
 //       },
 //       typeID: {
 //         type: String,
 //         required: true
 //        },
 //       numberID: {
 //         type: Number,
 //         required: true
 //       },
 //       dateOfBirth: {
 //         type: Date,
 //         required: true
 //       },
 //       titleinBoard: {
 //         type: String,
 //         required: true
 //       }

 // },


 financialInfo: {
   Currency: {
     type: String

   },
   Capital: {
     type: Number

   }
 },
 investor: {
   type: Schema.Types.ObjectId,
   ref: 'Investor',
   required: true
 },
 lawyer: {
   type: Schema.Types.ObjectId,
   ref: 'Lawyer'
 },
 lawyerComment: {
   type: String,
   required: false
 },

 lawyerDecision: {
   type: Number,
   required: false
 },
 reviewer: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Reviewer'

 },
 reviwerComment: {
   type: String

 },
 reviewerDecision: {
   type: Number

 },
 dateOfApproval: {
   type: Date

 },
 amountOfPayment: {
   type: Double

 },
 dateOfPayment: {
   type: String
 },
 paymentId: {
   type: Number
 },
 formStatus: {
   type: String
 },

 board:[BoardofdirectorsSchema]
})
module.exports = Form = mongoose.model('Form', FormSchema);