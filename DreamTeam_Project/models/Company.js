const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Company = new Schema({
    
   

    approved_form: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    },
    Date_of_payment: {
        type: Date, 
        required: true
    },
    Payment_id: {
        type: number,
        required: true
    },
})

//var reviewer = mongoose.model('person', personschema);
module.exports = Company = mongoose.model('Companies', Company);