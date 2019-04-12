const Joi = require("joi");

module.exports = {
  createInvestorValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string()
        .max(10)
        .required(),
      numberID: Joi.string().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(100)
        .required(),
      phoneNumber: Joi.string().phoneNumber(),
      faxNumber: Joi.string().phoneNumber(),
      accountStatus: Joi.boolean().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: Joi.string().required(),
      capital: Joi.number().required(),
      capitalCurrency: Joi.string()
        .currency()
        .required()
    };

    return Joi.validate(request, createSchema);
  },

  createLawyerValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string().required(),
      numberID: Joi.string().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(100)
        .required(),
      phoneNumber: Joi.phoneNumber().required(),
      faxNumber: Joi.phoneNumber().required(),
      accountStatus: Joi.boolean().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),

      investorType: null,
      capital: null,
      capitalCurrency: null
    };

    return Joi.validate(request, createSchema);
  },

  createReviewerValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(2)
        .max(50)
        .required(),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string().required(),
      numberID: Joi.string().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(100)
        .required(),
      phoneNumber: Joi.number()
        .min(7)
        .max(20)
        .required(),
      faxNumber: Joi.number()
        .min(3)
        .max(20)
        .required(),
      accountStatus: Joi.boolean().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: null,
      capital: null,
      capitalCurrency: null
    };

    return Joi.validate(request, createSchema);
  },

  createAdminValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(2)
        .max(50)
        .required(),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string().required(),
      numberID: Joi.string().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(100)
        .required(),
      phoneNumber: Joi.phoneNumber().required(),
      faxNumber: Joi.phoneNumber().required(),
      accountStatus: Joi.boolean().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: null,
      capital: null,
      capitalCurrency: null
    };

    return Joi.validate(request, createSchema);
  },

  updateAdminValidation: request => {
    const AdminupdateSchema = {
      name: Joi.string()
        .min(2)
        .max(50),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20),
      typeID: Joi.string(),
      numberID: Joi.string(),
      dateOfBirth: Joi.date(),
      address: Joi.string().min(100),
      phoneNumber: Joi.phoneNumber(),
      faxNumber: Joi.phoneNumber(),
      accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      //enum investor type
      investorType: null,
      capital: null,
      capitalCurrency: null
    };

    return Joi.validate(request, updateSchema);
  },

  updateInvestorValidation: request => {
    const InvestorupdateSchema = {
      name: Joi.string()
        .min(2)
        .max(50),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20),
      typeID: Joi.string(),
      numberID: Joi.string(),
      dateOfBirth: Joi.date(),
      address: Joi.string().min(100),
      phoneNumber: Joi.phoneNumber(),
      faxNumber: Joi.phoneNumber(),
      accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      //enum investor type
      investorType: joi.string(),
      capital: joi.number(),
      capitalCurrency: joi.currency(),
      accountStatus: Joi.boolean(),
      rejectionMessage: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  },

  updateLawyerValidation: request => {
    const LawyerupdateSchema = {
      name: Joi.string()
        .min(2)
        .max(50),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20),
      typeID: Joi.string(),
      numberID: Joi.string(),
      dateOfBirth: Joi.date(),
      address: Joi.string().min(100),
      phoneNumber: Joi.phoneNumber(),
      faxNumber: Joi.phoneNumber(),
      accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      //enum investor type
      investorType: null,
      capital: null,
      capitalCurrency: null,
      accountStatus: Joi.boolean(),
      rejectionMessage: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  },

  updateReviewerValidation: request => {
    const ReviewerupdateSchema = {
      name: Joi.string()
        .min(2)
        .max(50),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8),
      //enum gender
      gender: joi.string().valid("Male", "Female"),
      nationality: Joi.string()
        .min(4)
        .max(20),
      typeID: Joi.string(),
      numberID: Joi.string(),
      dateOfBirth: Joi.date(),
      address: Joi.string().min(100),
      phoneNumber: Joi.phoneNumber(),
      faxNumber: Joi.phoneNumber(),
      accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      //enum investor type
      investorType: null,
      capital: null,
      capitalCurrency: null,
      accountStatus: Joi.boolean(),
      rejectionMessage: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
