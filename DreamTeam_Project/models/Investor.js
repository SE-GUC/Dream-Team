const mongoose = require('mongoose')
const Schema = mongoose.Schema
const InvestorSchema= new Schema({
    Person :{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Person',
        required: true
    },
    Investor_Type  :{
            type: String,
            require: true
    } ,
    Capital:{
            type:Number,
            require:true
    } ,
    Capital_Currency: { 
        type:String,
        require: true
    }
})
module.exports = Investor = mongoose.model('Investor', InvestorSchema);