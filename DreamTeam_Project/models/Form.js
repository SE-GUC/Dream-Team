const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const FormSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    company_name_E: {
        type: String,
        required: true
    },
    headquarters: {
        governorate:{type: String},
        city:{type: String},
        address:{type: String},
        telephone:{type: String},
        fax:{type:String}
    },
    financial_info: {
        Currency:{type:String},
        Capital:{type:Number}
    },
    founder: {
        type: Schema.Types.ObjectId,
        ref: 'Investor'
    }
})

module.exports = Form = mongoose.model('forms', FormSchema);