const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LawyerformSchema= new Schema({
    
    lawyer:{
      type: Schema.Types.ObjectId,
      ref: 'Lawyer'
    },
    comment:{
     type:String,
    required: false
    },
    form :{
       type: Schema.Types.ObjectId,
        ref: 'Form'
    },
    approved:{
      type:Number,
      required:false
    }
})
module.exports = mongoose.model('Lawyer_form', LawyerformSchema);