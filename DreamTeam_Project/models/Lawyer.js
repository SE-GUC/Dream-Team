const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LawyerSchema= new Schema({
    Person :{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Person',
        required: true
    },
    Account_Status  :{
        type: String,
        required: true
}
})
module.exports = Lawyer  = mongoose.model('Lawyer', LawyerSchema);