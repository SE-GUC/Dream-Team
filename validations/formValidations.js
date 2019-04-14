const Joi = require("joi");
const joiPhone = Joi.extend(require("joi-phone-number"));
const joiCurr = require("joi-currency");

module.exports = {
  createValidation: request => {
    const createSchema = {
      companyName: Joi.string()
        .min(3)
        .max(500)
        .required(),
      companyNameEnglish: Joi.string()
        .min(3)
        .max(500),
      companyType: Joi.string().required(),
      headquarters: {
        governorate: Joi.string()
          .min(1)
          .max(50)
          .required(),
        city: Joi.string()
          .min(3)
          .max(500)
          .required(),
        address: Joi.string()
          .min(10)
          .max(500)
          .required(),
        telephone: joiPhone.string().phoneNumber(),
        fax: joiPhone.string().phoneNumber()
      },
      financialInfo: {
        currency: joiCurr
          .string()
          .currency()
          .required(),
        capital: Joi.when(request.companyType, {
          is: "SSC",
          then: Joi.number()
            .min(50000)
            .required(),
          otherwise: Joi.number().min(100000)
        })
      },
      regulatedLaw: Joi.string()
    };

    return Joi.validate(request, createSchema);
  },
  createValidationLawyer: request => {
    const createSchema = {
      companyName: Joi.string()
        .min(3)
        .max(500)
        .required(),
      companyNameEnglish: Joi.string()
        .min(3)
        .max(500),
      companyType: Joi.string().required(),
      headquarters: {
        governorate: Joi.string()
          .min(1)
          .max(50)
          .required(),
        city: Joi.string()
          .min(3)
          .max(500)
          .required(),
        address: Joi.string()
          .min(10)
          .max(500)
          .required(),
        telephone: joiPhone.string().phoneNumber(),
        fax: joiPhone.string().phoneNumber()
      },
      financialInfo: {
        currency: joiCurr
          .string()
          .currency()
          .required(),
        capital: Joi.when(request.companyType, {
          is: "SSC",
          then: Joi.number()
            .min(50000)
            .required(),
          otherwise: Joi.number().min(100000)
        })
      },
      regulatedLaw: Joi.string(),
      investor: Joi.string()
    };

    return Joi.validate(request, createSchema);
  },
  updateValidation: request => {
    const updateSchema = {
      companyName: Joi.string()
        .min(3)
        .max(500),
      companyNameEnglish: Joi.string()
        .min(3)
        .max(500),
      companyType: Joi.string(),
      headquarters: {
        governorate: Joi.string()
          .min(1)
          .max(50),
        city: Joi.string()
          .min(3)
          .max(500),
        address: Joi.string()
          .min(10)
          .max(100),
        telephone: joiPhone.string().phoneNumber(),
        fax: joiPhone.string().phoneNumber()
      },
      financialInfo: {
        currency: joiCurr.string().currency()
        // capital: Joi.when(request.companyType, {
        //   is: "SSC",
        //   then: Joi.number().min(50000),
        //   otherwise: Joi.number().min(100000)
        // })
      },
      // entityType: Joi.string(),
      regulatedLaw: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
