const axios = require('axios');
const functions = {

    getUser: async () => {
        const books = await axios.get('http://localhost:3000/api/user/getUsers/')
        return books
    },
    insert: async (user) => {
        const books = await axios.post('http://localhost:3000/api/user/createUser', user);
        return books;
    },

    userStatus: async () => {
        const userStatus = await axios.get('http://localhost:3000/api/internalPortal/formStatus/investor/5c9d8481cf00d53f74c3737c')
        console.log(userStatus)
        return userStatus
    },
    LRundecidedForms: async () => {
        const LRundecidedForms = await axios.get('http://localhost:3000/api/internalPortal/undecidedForms/lawyer')
        console.log(LRundecidedForms)
        return LRundecidedForms
    }

    getForm: async () => {
        const SSC = await axios.get('http://localhost:3000/api/internalPortal/5c93bf2312c22705f4b0aab6')
        console.log(SSC)
        return SSC
    },

    getSSC: async () => {
        const SSC = await axios.get('http://localhost:3000/api/user/information/SSC/')
        console.log(SSC)
        return SSC
    },

    getSPC: async () => {
        const SPC = await axios.get('http://localhost:3000/api/user/information/SPC/')
        console.log(SPC)
        return SPC
    },

    getSSCandSPC: async () => {
        const SSCandSPC = await axios.get('http://localhost:3000/api/user/information/SSCandSPC/')
        console.log(SSCandSPC)
        return SSCandSPC
    },

    getfeesCalculationRules: async () => {
        const feesCalculationRules = await axios.get('http://localhost:3000/api/user/information/feesCalculationRules/')
        console.log(feesCalculationRules)
        return feesCalculationRules
    },

    getpublishedcompanies: async () => {
        const publishedcompanies = await axios.get('http://localhost:3000/api/user/companies/publishedcompanies/')
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
        const pendingcase = await axios.get('http://localhost:3000/api/lawyer/pendingCase/5c94f8c7fe24291e38a3ae94')
        //console.log(pendingcase)
        return pendingcase
    },
    getlawyerOfForm: async () => {
        const lawyerOfForm = await axios.get('http://localhost:3000/api/internalPortal/lawyerOfForm/5ca0f56c18d0ec5b90c3d649/')
        console.log(lawyerOfForm)
        return lawyerOfForm 
    },

    assignCaseToLawyer: async () => {
        const assignCaseToLawyer = await axios.put('http://localhost:3000/api/internalPortal/lawyer/assign/5c93bf2312c22705f4b0aab6/5c94f8c7fe24291e38a3ae94/')
        //console.log(assignCaseToLawyer)
        return assignCaseToLawyer
    },
    getFormBySpeceficField: async () => {
        const form = await axios.get('http://localhost:3000/api/admin/search')
        console.log(form)
        return form
    }


};
module.exports = functions;