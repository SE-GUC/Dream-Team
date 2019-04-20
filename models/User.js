const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const typesEnum = require("../enums/accountType");
const userschema = new Schema({
  name: {
    type: String,
    required: true
  },
  accountType: {
    type: typesEnum.accountTypes,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  typeID: {
    type: String,
    required: true
  },
  numberID: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  faxNumber: {
    type: String,
    required: true
  },
  accountStatus: {
    type: Boolean
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rejectionMessage: {
    type: String
  },
  investorType: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("User", userschema);
