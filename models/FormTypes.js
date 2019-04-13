const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormTypesSchema = new Schema({});
module.exports = mongoose.model('FormTypes', FormTypesSchema);
