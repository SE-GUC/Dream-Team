const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            gender: Joi.string().min(4).max(6).required(),
            Nationality: Joi.string().min(50).max(3000).required(),
            ID_Type: Joi.string().min(50).max(3000).required(),
            ID_Number: Joi.number().required(),
            Date_of_Birth: Joi.string().min(8).max(20).required(),
            Address:Joi.string().min(50).max(3000).required() ,
             Phone_number:Joi.number().required() ,
            Fax_number: Joi.number().required(),
            Email:Joi.string().min(10).max(3000).required() ,
            Account_Status  :Joi.boolean().required(),
            password : Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    }

   
}

