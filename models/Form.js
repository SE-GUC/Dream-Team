const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BoardofdirectorsSchema = require("../models/Boardofdirectors");
const regulatedLaw = require("../enums/regulatedLaw");
const formStatus = require("../enums/formStatus");
const formType = require("../enums/formType");
const FormSchema = new Schema(
  {
    companyName: {
      type: String
    },
    companyNameEng: {
      type: String
    },
    companyType: {
      type: formType.formTypes
    },
    headquarters: {
      governorate: {
        type: String
      },
      city: {
        type: String
      },
      address: {
        type: String
      },
      telephone: {
        type: String
      },
      fax: {
        type: String
      }
    },
    financialInfo: {
      currency: {
        type: String
      },
      capital: {
        type: Number
      }
    },
    regulatedLaw: {
      type: regulatedLaw.regulatedLaw
    },
    investor: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    lawyer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    lawyerComment: {
      type: []
    },
    lawyerDecision: {
      type: Number
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    reviwerComment: {
      type: []
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
        ref: "User"
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
  },
  { strict: false }
);

module.exports = mongoose.model("Form", FormSchema);
