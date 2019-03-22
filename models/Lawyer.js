const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LawyerSchema= new Schema({
   /* Person :{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Person',
        required: true
    },*/ 
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    ID_Type: {
        type: String, 
        required: true
    },
    ID_Number: {
        type: Number, 
        required: true
    },
    Date_of_Birth: {
        type: String, 
        required: true
    }
    ,
    Address: {
        type: String, 
        required: true
    },
     Phone_number: {
        type: Number, 
        required: true
    },
    Fax_number: {
        type: Number, 
        required: true
    },
    Email: {
        type: String, 
        required: true
    } , Account_Status  :{
        type: Boolean,
        required: true
    },password : {
        type: String,
        required: true
    }
 
})
module.exports = Lawyer  = mongoose.model('Lawyer', LawyerSchema);