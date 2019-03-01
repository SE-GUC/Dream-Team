const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AdminSchema= new Schema({
    Person :{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Person',
        required: true
    }
})
module.exports = Admin  = mongoose.model('Admin', AdminSchema);