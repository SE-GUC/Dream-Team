const axios = require('axios');
const functions = {
    getUser: async () => {
        const books = await axios.get('http://localhost:3000/api/user/getUsers/')
        console.log(books)
        return books
    },

    getSSC: async () => {
        const SSC = await axios.get('http://localhost:3000/api/form/information/SSC/')
       // console.log(SSC)
        return SSC
    },

    getSPC: async () => {
        const SPC = await axios.get('http://localhost:3000/api/form/information/SPC/')
        console.log(SPC)
        return SPC
    },

    getSSCandSPC: async () => {
        const SSCandSPC = await axios.get('http://localhost:3000/api/form/information/SSCandSPC/')
        console.log(SSCandSPC)
        return SSCandSPC
    },

    getfeesCalculationRules: async () => {
        const feesCalculationRules = await axios.get('http://localhost:3000/api/form/information/feesCalculationRules/')
        console.log(feesCalculationRules)
        return feesCalculationRules
    },

    getpublishedcompanies: async () => {
        const publishedcompanies = await axios.get('http://localhost:3000/api/form/companies/publishedcompanies/')
        console.log(publishedcompanies)
        return publishedcompanies
    },
    

    getrunningcompanies: async () => {
        const runningcompanies = await axios.get('http://localhost:3000/api/form/running/:id/')
        console.log(runningcompanies)
        return runningcompanies
    },
    getpendingcompanies: async () => {
        const pendingcompanies = await axios.get('http://localhost:3000/api/form/pending/:id/')
        console.log(pendingcompanies)
        return pendingcompanies
    },
    getpendingcase: async () => {
        // const form =  await axios.get('http://localhost:3000/api/form/') 
        // const formID = form.data.data[28].lawyer
        // console.log(formID)
        const pendingcase = await axios.get('http://localhost:3000/api/form/lawyer/pendingCase/5c94f8c7fe24291e38a3ae94')
        //console.log(pendingcase)
        return pendingcase
    },
    getlawyerOfForm: async () => {
        const lawyerOfForm = await axios.get('http://localhost:3000/api/form/lawyerOfForm/5c969a230db5b65ab05b2637/')
        console.log(lawyerOfForm)
        return lawyerOfForm 
    },

    assignCaseToLawyer: async () => {
        const assignCaseToLawyer = await axios.get('http://localhost:3000/api/form/lawyer/assign/:formId/:lawyerId/')
        console.log(assignCaseToLawyer)
        return assignCaseToLawyer
    }









};
module.exports = functions;