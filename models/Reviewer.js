const mongoose = require('mongoose')
const Schema = mongoose.Schema

  var reviewerschema = new Schema({

      name: {
          type: String,
          required: true
      },
      gender: {
          type: String,
          required: true
      },
      Nationality: {
          type: String,
          required: true
      },
      ID_Type: {
          type: String,
          required: true
      },
      ID_Number: {
          type: Number,
          required: true
      },
      Date_of_Birth: {
          type: Date,
          required: true
      }
      ,
      Address: {
          type: String,
          required: true
      },
       Phone_number: {
          type: Number,
          required: true
      },
      Fax_number: {
          type: Number,
          required: true
      },
      Email: {
          type: String,
          required: true
      }
      ,

      account_status: {
          type: Boolean,
          required: true
      },

      password: {
          type: String,
          required: true
      }
  })


module.exports = Reviewer = mongoose.model('Reviewer', reviewerschema)