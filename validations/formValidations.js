const Joi = require("joi");

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
          .min(100)
          .max(500)
          .required(),
        telephone: Joi.string().phoneNumber(),
        fax: Joi.string().phoneNumber()
      },
      financialInfo: {
        currency: Joi.string()
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
      entityType: Joi.string().required(),
      regulatedLaw: Joi.string().required(),
      //  otherwise : Joi.number().min(10000)})},
      lawyerDecision: joi
        .number()
        .valid(0, 1, -1)
        .required(),
      reviewerComment: Joi.string()
        .min(4)
        .max(100),
      reviewerDecision: joi
        .number()
        .valid(0, 1, -1)
        .required(),
      dateOfApproval: Joi.date(),
      amountOfPayment: Joi.number(),
      DateOfPayment: Joi.date(),
      PaymentId: Joi.string()
        .min(1)
        .max(100000)
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
          .min(100)
          .max(500),
        telephone: Joi.string().phoneNumber(),
        fax: Joi.string().phoneNumber()
      },
      financialInfo: {
        currency: Joi.string().currency(),
        capital: Joi.when(request.companyType, {
          is: "SSC",
          then: Joi.number().min(50000),
          otherwise: Joi.number().min(100000)
        })
      },
      entityType: Joi.string(),
      regulatedLaw: Joi.string(),
      //  otherwise : Joi.number().min(10000)})},
      lawyerDecision: joi.number().valid(0, 1, -1),
      reviewerComment: Joi.string()
        .min(4)
        .max(100),
      reviewerDecision: joi.number().valid(0, 1, -1),
      dateOfApproval: Joi.date(),
      amountOfPayment: Joi.number(),
      DateOfPayment: Joi.date(),
      PaymentId: Joi.string()
        .min(1)
        .max(100000)
    };
    return Joi.validate(request, updateSchema);
  }
};
