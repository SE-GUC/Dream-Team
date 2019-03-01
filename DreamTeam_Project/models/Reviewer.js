const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewerschema = new Schema({
    
    person:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'personschema',
        required: true
    }
    
    ,
    account_status: {
        type: String, 
        required: true
    },
})

//var reviewer = mongoose.model('person', personschema);
module.exports = reviewer = mongoose.model('reviewers', reviewerschema);