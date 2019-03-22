const mongoose = require('mongoose')
const Schema = mongoose.Schema
var CompanySchema = new Schema({
    
    //  Approved_form: {
    //      type: mongoose.Schema.Types.ObjectId, 
    //      ref:'Approved_form'
    //  },
     // very important note 
     //here i couldn't link the object so the crud methods do not oppearte good but if u commanded the approved_form it will execute
// and we are planing to remove the approved form from company as it is not needed anyway
    Date_of_payment: {
        type: String, 
        //required: true
    },
    Payment_id: {
        type: Number,
        //required: true
    },
})

//var reviewer = mongoose.model('person', personschema);
module.exports = Company = mongoose.model('Companies', CompanySchema);