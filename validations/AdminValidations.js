const Joi = require('joi')

module.exports = {
  createValidation: request => {


      const createSchema = {
          name: Joi.string().min(3).max(50).required(),
          gender: Joi.string().required(),
          Nationality: Joi.string().min(4).max(20).required(),
          ID_Type: Joi.string().min(3).max(20).required() ,
          ID_number: Joi.number().required() ,
          Date_of_Birth: Joi.date().required(),
          Address: Joi.string().min(10).max(50).required(),
          Phone_number: Joi.number().min(7).max(20).required()  ,
          Fax_number: Joi.number().min(3).max(10).required() ,
          Email: Joi.string().min(6).max(40).required(),
          password: Joi.string().min(6).max(15).required()


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
          password: Joi.string().min(6).max(15).required()
      }

      return Joi.validate(request, updateSchema)
  },
}