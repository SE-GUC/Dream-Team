const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BoardofdirectorsSchema = new Schema({

    name: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        //required: true
    },
    investorType: {
        type: String,
        //required: true
    },
    idType:{

        type:String
    },
    id:{
        type:String
    },
    date:{
        type:String
    },
    address:{
        type:String
    },
    title:{
        type:String
    }

    

});
module.exports = BoardofdirectorsSchema