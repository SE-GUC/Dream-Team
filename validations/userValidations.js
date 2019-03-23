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
            phoneNumber: Joi.number().min(7).max(20).required(),
            faxNumber: Joi.number().min(3).max(20).required(),
            accountStatus: Joi.boolean().required(),
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
            phoneNumber: Joi.number().min(7).max(20).required(),
            faxNumber: Joi.number().min(3).max(20).required(),
            accountStatus: Joi.boolean().required(),
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
            phoneNumber: Joi.number().min(7).max(20).required(),
            faxNumber: Joi.number().min(3).max(20).required(),
            accountStatus: Joi.boolean().required(),
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
            phoneNumber: Joi.number().min(7).max(20).required(),
            faxNumber: Joi.number().min(3).max(20).required(),
            accountStatus: Joi.boolean().required(),
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
            name: Joi.string().min(3).max(50),
            gender: Joi.string(),
            Nationality: Joi.string().min(4).max(20),
            ID_Type: Joi.string().min(3).max(20),
            ID_number: Joi.number(),
            Date_of_Birth: Joi.date(),
            Address: Joi.string().min(10).max(50),
            Phone_number: Joi.number().min(7).max(20),
            Fax_number: Joi.number().min(3).max(10),
            Email: Joi.string().min(6).max(40),
            password: Joi.string().min(6).max(15).required()
        }

        return Joi.validate(request, updateSchema)
    },
    
    updateInvestorValidation: request => {
        const InvestorupdateSchema = {
            name: Joi.string().min(3).max(50),
            gender: Joi.string(),
            Nationality: Joi.string().min(4).max(20),
            ID_Type: Joi.string().min(3).max(20),
            ID_number: Joi.number(),
            Date_of_Birth: Joi.date(),
            Address: Joi.string().min(10).max(50),
            Phone_number: Joi.number().min(7).max(20),
            Fax_number: Joi.number().min(3).max(10),
            Email: Joi.string().min(6).max(40),
            password: Joi.string(),
            Investor_Type: Joi.string(),
            Capital_Currency: Joi.string(),
            Capital: Joi.number(),
            account_status: Joi.boolean(),
            accountType: Joi.string(),
            rejectionComment:Joi.string()
        }
        return Joi.validate(request, updateSchema)
    },

    updateLawyerValidation: request => {
        const LawyerupdateSchema = {
            name: Joi.string(),
            gender: Joi.string(),
            Nationality: Joi.string(),
            ID_Type: Joi.string(),
            ID_number: Joi.number(),
            Date_of_Birth: Joi.date(),
            Address: Joi.string(),
            Phone_number: Joi.number(),
            Fax_number: Joi.number(),
            account_status: Joi.boolean(),
            Email: Joi.string(),
            password: Joi.string(),
            accountType: Joi.string(),
            rejectionComment:Joi.string()
            // , Investor_Type  :Joi.string() ,
            //     Capital:Joi.number() ,
            //     Capital_Currency:Joi.string()
        }
        return Joi.validate(request, updateSchema)
    },

    updateReviewerValidation: request => {
        const ReviewerupdateSchema = {
            name: Joi.string(),
            gender: Joi.string(),
            Nationality: Joi.string(),
            ID_Type: Joi.string(),
            ID_number: Joi.number(),
            Date_of_Birth: Joi.date(),
            Address: Joi.string(),
            Phone_number: Joi.number(),
            Fax_number: Joi.number(),
            account_status: Joi.boolean(),
            Email: Joi.string(),
            password: Joi.string(),
            accountType: Joi.string(),
            rejectionComment:Joi.string()
        }
        return Joi.validate(request, updateSchema)
    }
}