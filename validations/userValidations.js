const Joi = require('joi')

module.exports = {
    createInvestorValidation: request => {


        const createSchema = {
            name: Joi.string().min(2).max(50).required(),
            //enum account type
            accountType: Joi.string().min(5).max(8).required(),
            //enum gender
            gender: Joi.string().required(),
            nationality: Joi.string().min(4).max(20).required(),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50).required(),
            phoneNumber: Joi.string().min(7).max(20).required(),
            faxNumber: Joi.string().min(3).max(20).required(),
            
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            //enum investor type
            investorType: Joi.string().required(),
            capital: Joi.number().required(),
            capitalCurrency: Joi.string().required()

        }

        return Joi.validate(request, createSchema)
    },

    createLawyerValidation: request => {


        const createSchema = {
            name: Joi.string().min(2).max(50).required(),
            //enum account type
            accountType: Joi.string().min(5).max(8).required(),
            //enum gender
            gender: Joi.string().required(),
            nationality: Joi.string().min(4).max(20).required(),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50).required(),
            phoneNumber: Joi.string().min(7).max(20).required(),
            faxNumber: Joi.string().min(3).max(20).required(),
           
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            //enum investor type
            investorType: Joi.string(),
            capital: Joi.number(),
            capitalCurrency: Joi.string()


        }

        return Joi.validate(request, createSchema)
    },

    createReviewerValidation: request => {


        const createSchema = {
            name: Joi.string().min(2).max(50).required(),
            //enum account type
            accountType: Joi.string().min(5).max(8).required(),
            //enum gender
            gender: Joi.string().required(),
            nationality: Joi.string().min(4).max(20).required(),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50).required(),
            phoneNumber: Joi.string().min(7).max(20).required(),
            faxNumber: Joi.string().min(3).max(20).required(),
          
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            //enum investor type
            investorType: Joi.string(),
            capital: Joi.number(),
            capitalCurrency: Joi.string()


        }

        return Joi.validate(request, createSchema)
    },

    createAdminValidation: request => {


        const createSchema = {
            name: Joi.string().min(2).max(50).required(),
            //enum account type
            accountType: Joi.string().min(5).max(8).required(),
            //enum gender
            gender: Joi.string().required(),
            nationality: Joi.string().min(4).max(20).required(),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50).required(),
            phoneNumber: Joi.string().min(7).max(20).required(),
            faxNumber: Joi.string().min(3).max(20).required(),
            // accountStatus: Joi.boolean().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            //enum investor type
            investorType: Joi.string(),
            capital: Joi.number(),
            capitalCurrency: Joi.string()


        }

        return Joi.validate(request, createSchema)
    },

    updateAdminValidation: request => {
        const AdminupdateSchema = {
            name: Joi.string().min(2).max(50),
            //enum account type
            // accountType: Joi.string().min(5).max(8),
            //enum gender
            // gender: Joi.string().required(),
            // nationality: Joi.string().min(4).max(20),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            // dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50),
            phoneNumber: Joi.string().min(7).max(20),
            faxNumber: Joi.string().min(3).max(20),
            // accountStatus: Joi.boolean(),
            email: Joi.string().email(),
            password: Joi.string().min(8)
        }

        return Joi.validate(request, AdminupdateSchema)
    },
    
    updateInvestorValidation: request => {
        const InvestorupdateSchema = {
            name: Joi.string().min(2).max(50),
            //enum account type
            // accountType: Joi.string().min(5).max(8),
            //enum gender
            // gender: Joi.string(),
            // nationality: Joi.string().min(4).max(20),
            typeID: Joi.string(),
            numberID: Joi.number(),
            // dateOfBirth: Joi.date(),
            address: Joi.string().min(10).max(50),
            phoneNumber: Joi.string().min(7).max(20),
            faxNumber: Joi.string().min(3).max(20),
            // accountStatus: Joi.boolean(),
            email: Joi.string().email(),
            password: Joi.string().min(8),
            //enum investor type
            investorType: Joi.string(),
            capital: Joi.number(),
            capitalCurrency: Joi.string()

        }
        return Joi.validate(request, InvestorupdateSchema)
    },

    updateLawyerValidation: request => {
        const LawyerupdateSchema = {
            name: Joi.string().min(2).max(50),
            //enum account type
            // accountType: Joi.string().min(5).max(8),
            //enum gender
            // gender: Joi.string().required(),
            // nationality: Joi.string().min(4).max(20),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            // dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50),
            phoneNumber: Joi.string().min(7).max(20),
            faxNumber: Joi.string().min(3).max(20),
            // accountStatus: Joi.boolean(),
            email: Joi.string().email(),
            password: Joi.string().min(8)
        }
        return Joi.validate(request, LawyerupdateSchema)
    },

    updateReviewerValidation: request => {
        const ReviewerupdateSchema = {
            name: Joi.string().min(2).max(50),
            //enum account type
            // accountType: Joi.string().min(5).max(8),
            //enum gender
            // gender: Joi.string().required(),
            // nationality: Joi.string().min(4).max(20),
            typeID: Joi.string().required(),
            numberID: Joi.number().required(),
            // dateOfBirth: Joi.date().required(),
            address: Joi.string().min(10).max(50),
            phoneNumber: Joi.string().min(7).max(20),
            faxNumber: Joi.string().min(3).max(20),
            // accountStatus: Joi.boolean(),
            email: Joi.string().email(),
            password: Joi.string().min(8)
        }
        return Joi.validate(request, ReviewerupdateSchema)
    }
}