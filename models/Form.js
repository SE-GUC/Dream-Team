const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BoardofdirectorsSchema = require('../models/Boardofdirectors');
const regulatedLaw = require('../enums/regulatedLaw');
const entityType = require('../enums/entityType');
const formStatus = require('../enums/formStatus');
const formType = require('../enums/formType');
const FormSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  companyNameEng: {
    type: String
    //required: false
  },
  companyType: {
    type: formType.formTypes
    // required: false
  },
  headquarters: {
    governorate: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    telephone: {
      type: String
      //required: true
    },
    fax: {
      type: String
      // required: true
    }
  },
  financialInfo: {
    currency: {
      type: String,
      required: true
    },
    capital: {
      type: Number
      //required: true
    }
  },
  regulatedLaw: {
    type: regulatedLaw.regulatedLaw,
    required: true
  },
  investor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lawyer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  lawyerComment: {
    type: String
    //required: false
  },
  lawyerDecision: {
    type: Number
    //required: false
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reviwerComment: {
    type: String
  },
  reviewerDecision: {
    type: Number
  },
  feesCalculation: {
    type: String
  },
  dateOfApproval: {
    type: Date
  },
  payment: {
    paymentId: {
      type: String
    },
    dateOfPayment: {
      type: Date
    },
    method: {
      type: String
    },
    lawyer: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  formStatus: {
    type: formStatus.formStatus
  },
  createdByLawyer: {
    type: Boolean,
    default: false
  },
  board: [BoardofdirectorsSchema]
});

module.exports = mongoose.model('Form', FormSchema);
