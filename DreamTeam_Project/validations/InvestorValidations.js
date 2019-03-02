const Joi = require('joi')

module.exports = {
  createValidation: request => {
      const createSchema = {
          name: Joi.string().required(),
          gender: Joi.string().required(),
          Nationality: Joi.string().required(),
          ID_Type:Joi.string().required(),
          ID_number:Joi.number().required(),
          Date_of_Birth:Joi.date().required(),
          Address:Joi.string().required(),
          Phone_number:Joi.number().required(),
          Fax_number:Joi.number().required(),
          Email: Joi.string().required(),
          password:Joi.string().required(),
          Investor_Type:Joi.string().required(),
          Capital:Joi.number().required(),
          Capital_Currency:Joi.string().required()

      }
      return Joi.validate(request, createSchema)
   },

      updateValidation: request => {
       const updateSchema = {
           name: Joi.string().min(3).max(50),
           gender: Joi.string(),
           Nationality: Joi.string().min(4).max(20),
           ID_Type: Joi.string().min(3).max(20) ,
           ID_number: Joi.number() ,
           Date_of_Birth: Joi.date(),
           Address: Joi.string().min(10).max(50),
           Phone_number: Joi.number().min(7).max(20)  ,
           Fax_number: Joi.number().min(3).max(10),
           Email: Joi.string().min(6).max(40),
           password:Joi.string().required(),
           Investor_Type: Joi.string(),
           Capital_Currency: Joi.string(),
           Capital: Joi.number()
       }

       return Joi.validate(request, updateSchema)
   }
//        if(Investor_Type==="SSC"){
//            Capital:Joi.number().min(50000).required()
//        }else{
//            Capital:Joi.number().min(10000).required()
//        }
//        return Joi.validate(request, createSchema)
   }