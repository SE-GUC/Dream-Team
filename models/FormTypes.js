const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormTypesSchema = new Schema(
  {
    formType: {
      type: String,
      unique: true
    },
    formSchema: {
      type: Object
    },
    required: {
      type: [String]
    }
  },
  { versionKey: false }
);
module.exports = mongoose.model('FormTypes', FormTypesSchema);
