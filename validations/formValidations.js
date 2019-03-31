const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            companyName: Joi.string().min(3).max(500).required(),
            companyNameEnglish: Joi.string().min(3).max(500),
            companyType:Joi.string(),
            headquarters:{
                governorate:Joi.string().min(1).max(6).required(),
                city:Joi.string().min(3).max(500).required(),
                address:Joi.string().min(10).max(500).required(),
                telephone:Joi.string().min(3).max(13),
                fax:Joi.string().min(4).max(20),
            },
            financialInfo:{
              currency:Joi.string().min(3).max(300).required(),
              capital:Joi.when(request.formType,
                {is : 'SSC',
                then: Joi.number().min(50000).required(),
                otherwise :Joi.number().min(100000)
  
                })},
            entityType:Joi.string().required(),
            regulatedLaw:Joi.string().required(),
                //  otherwise : Joi.number().min(10000)})},
            lawyerDecision:Joi.number(),
            reviewerComment:Joi.string().min(4).max(100),
            reviewerDecision:Joi.number(),
            dateOfApproval:Joi.date(),
            amountOfPayment:Joi.number(),
            DateOfPayment:Joi.string().min(3).max(100),
            PaymentId:Joi.number().min(0).max(100000),
            formType:Joi.string().required()
        }
       
        return Joi.validate(request, createSchema)
    },
    updateValidation:request => {
        const updateSchema = {
            companyName: Joi.string().min(3).max(500) ,
            companyNameEnglish: Joi.string().min(3).max(500),
            companyType:Joi.string(),
            headquarters:{
                governorate:Joi.string().min(1).max(6) ,
                city:Joi.string().min(3).max(500) ,
                address:Joi.string().min(10).max(500) ,
                telephone:Joi.string().min(3).max(13),
                fax:Joi.string().min(4).max(20),
            },
            financialInfo:{
              currency:Joi.string().min(3).max(300) ,
              capital:Joi.number().min(10000)},
            lawyerDecision:Joi.number(),
            reviwerComment:Joi.string().min(4).max(100),
            reviwerDecision:Joi.number(),
            dateOfApproval:Joi.date(),
            amountOfPayment:Joi.number() ,
            DateOfPayment:Joi.string().min(3).max(100),
            PaymentId:Joi.number().min(0).max(100000),
            formType:Joi.string() 
              }
        return Joi.validate(request, updateSchema)
    }  
}