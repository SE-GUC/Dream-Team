const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema({});
module.exports = mongoose.model('Admin', AdminSchema);
