const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Approved_Form= new Schema({
   form :{
       type: mongoose.Schema.Type.ObjectId,
       ref: 'Reviewer_form',
       required: true
   },
    date_of_approval
 :{
           type: Date,
           required: true
   } ,
    amount_of_payment:{
           type: Double,
           required:true
   } ,

})
module.exports = Approved_Form = mongoose.model('Approved_Form',Approved_Form);