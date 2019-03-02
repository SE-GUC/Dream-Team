const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review_formSchema=new Schema({
    form :{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Lawyer_form',
      required:true},
    reviewer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Reviewer',
      required:true
    },
    commment :{
      type:String,
       required: true
    },
    approved:{
      type:Number,
      required:true
    }
})
module.exports = Review_form = mongoose.model('Review_form', Review_formSchema);