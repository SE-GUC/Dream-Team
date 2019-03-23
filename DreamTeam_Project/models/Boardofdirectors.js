const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BoardofdirectorsSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    investorType: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    idType:{
        type:String,
        required: true
    },
    id:{
        type:String,
        required: true
    },
    dateOfBirth:{
        type:Date,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    //enum for director role
    title:{
        type:String ,
        required: true
    }

    

});
module.exports = BoardofdirectorsSchema