<<<<<<< HEAD
const Joi = require("joi");
=======
const Joi = require('joi');
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
module.exports = {
  createInvestorValidation: request => {
    const createSchema = {
      name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
<<<<<<< HEAD
      gender: joi.string().valid("Male", "Female"),
=======
      gender: Joi.string().required(),
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
<<<<<<< HEAD
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
        .alphanum()
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

      investorType: null,
      capital: null,
      capitalCurrency: null
    };

    return Joi.validate(request, createSchema);
  },

  createReviewerValidation: request => {
    const createSchema = {
      name: Joi.string()
        .alphanum()
=======
      typeID: Joi.string().required(),
      numberID: Joi.number().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50)
        .required(),
      phoneNumber: Joi.string()
        .min(7)
        .max(20)
        .required(),
      faxNumber: Joi.string()
        .min(3)
        .max(20)
        .required(),

      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: Joi.string().required(),
      capital: Joi.number().required(),
      capitalCurrency: Joi.string().required()
    };
    return Joi.validate(request, createSchema);
  },

  createLawyerValidation: request => {
    const createSchema = {
      name: Joi.string()
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
        .min(2)
        .max(50)
        .required(),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
<<<<<<< HEAD
      gender: joi.string().valid("Male", "Female"),
=======
      gender: Joi.string().required(),
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string().required(),
<<<<<<< HEAD
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

  createAdminValidation: request => {
    const createSchema = {
      name: Joi.string()
        .alphanum()
=======
      numberID: Joi.number().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50)
        .required(),
      phoneNumber: Joi.string()
        .min(7)
        .max(20)
        .required(),
      faxNumber: Joi.string()
        .min(3)
        .max(20)
        .required(),

      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: Joi.string(),
      capital: Joi.number(),
      capitalCurrency: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  createReviewerValidation: request => {
    const createSchema = {
      name: Joi.string()
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
        .min(2)
        .max(50)
        .required(),
      //enum account type
      accountType: Joi.string()
        .min(5)
        .max(8)
        .required(),
      //enum gender
<<<<<<< HEAD
      gender: joi.string().valid("Male", "Female"),
=======
      gender: Joi.string().required(),
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string().required(),
<<<<<<< HEAD
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
        .alphanum()
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
=======
      numberID: Joi.number().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50)
        .required(),
      phoneNumber: Joi.string()
        .min(7)
        .max(20)
        .required(),
      faxNumber: Joi.string()
        .min(3)
        .max(20)
        .required(),

      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: Joi.string(),
      capital: Joi.number(),
      capitalCurrency: Joi.string()
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
      gender: Joi.string().required(),
      nationality: Joi.string()
        .min(4)
        .max(20)
        .required(),
      typeID: Joi.string().required(),
      numberID: Joi.number().required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50)
        .required(),
      phoneNumber: Joi.string()
        .min(7)
        .max(20)
        .required(),
      faxNumber: Joi.string()
        .min(3)
        .max(20)
        .required(),
      // accountStatus: Joi.boolean().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      //enum investor type
      investorType: Joi.string(),
      capital: Joi.number(),
      capitalCurrency: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  updateAdminValidation: request => {
    const AdminupdateSchema = {
      name: Joi.string()
        .min(2)
        .max(50),
      //enum account type
      // accountType: Joi.string().min(5).max(8),
      //enum gender
      // gender: Joi.string().required(),
      // nationality: Joi.string().min(4).max(20),
      typeID: Joi.string(),
      numberID: Joi.number(),
      // dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50),
      phoneNumber: Joi.string()
        .min(7)
        .max(20),
      faxNumber: Joi.string()
        .min(3)
        .max(20),
      // accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8)
    };
    return Joi.validate(request, AdminupdateSchema);
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
  },

  updateInvestorValidation: request => {
    const InvestorupdateSchema = {
      name: Joi.string()
<<<<<<< HEAD
        .alphanum()
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
=======
        .min(2)
        .max(50),
      //enum account type
      // accountType: Joi.string().min(5).max(8),
      //enum gender
      // gender: Joi.string(),
      // nationality: Joi.string().min(4).max(20),
      typeID: Joi.string(),
      numberID: Joi.number(),
      // dateOfBirth: Joi.date(),
      address: Joi.string()
        .min(10)
        .max(50),
      phoneNumber: Joi.string()
        .min(7)
        .max(20),
      faxNumber: Joi.string()
        .min(3)
        .max(20),
      // accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      //enum investor type
      investorType: Joi.string(),
      capital: Joi.number(),
      capitalCurrency: Joi.string()
    };
    return Joi.validate(request, InvestorupdateSchema);
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
  },

  updateLawyerValidation: request => {
    const LawyerupdateSchema = {
      name: Joi.string()
<<<<<<< HEAD
        .alphanum()
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
=======
        .min(2)
        .max(50),
      //enum account type
      // accountType: Joi.string().min(5).max(8),
      //enum gender
      // gender: Joi.string().required(),
      // nationality: Joi.string().min(4).max(20),
      typeID: Joi.string(),
      numberID: Joi.number(),
      // dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50),
      phoneNumber: Joi.string()
        .min(7)
        .max(20),
      faxNumber: Joi.string()
        .min(3)
        .max(20),
      // accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8)
    };
    return Joi.validate(request, LawyerupdateSchema);
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
  },

  updateReviewerValidation: request => {
    const ReviewerupdateSchema = {
      name: Joi.string()
<<<<<<< HEAD
        .alphanum()
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
=======
        .min(2)
        .max(50),
      //enum account type
      // accountType: Joi.string().min(5).max(8),
      //enum gender
      // gender: Joi.string().required(),
      // nationality: Joi.string().min(4).max(20),
      typeID: Joi.string(),
      numberID: Joi.number(),
      // dateOfBirth: Joi.date().required(),
      address: Joi.string()
        .min(10)
        .max(50),
      phoneNumber: Joi.string()
        .min(7)
        .max(20),
      faxNumber: Joi.string()
        .min(3)
        .max(20),
      // accountStatus: Joi.boolean(),
      email: Joi.string().email(),
      password: Joi.string().min(8)
    };
    return Joi.validate(request, ReviewerupdateSchema);
>>>>>>> e5281204770a8f35c0401a5a277d4683c2aad543
  }
};
