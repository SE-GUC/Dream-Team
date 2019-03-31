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


    getAllEmployess: async()=>{
        const employees =await axios.get('http://localhost:3000/api/admin/employee')
        console.log(employees)
        return employees
    },

    acceptAccount: async()=>{
        const employees =await axios.put('http://localhost:3000/api/admin/approve/5ca0d6ae98b7982e943a3eea/')
        console.log(employees)
        return employees
    },

    rejectAccount: async()=>{
        const employees =await axios.put('http://localhost:3000/api/admin/reject/5ca0d87a98b7982e943a3eeb/')
        console.log(employees)
        return employees
    },
    lawyerViewForm :async()=>{
        const form = await axios.get('http://localhost:3000/api/lawyer/showForm/5ca11184911834593cc03510')
        return form
    },

    lawyerAcceptForm: async (message)=>{
        const response = await axios.put('http://localhost:3000/api/lawyer/5ca10ccab7701f2158efbad1/accept/5ca11184911834593cc03510',message)
        console.log(response)
        return response;
    },
    lawyerRejectForm: async (message)=>{
        const response = await axios.put('http://localhost:3000/api/lawyer/5ca10ccab7701f2158efbad1/reject/5ca11184911834593cc03510',message)
        console.log(response)
        return response;
    },

    getLawyerForm: async ()=>{
        const lawyer=await axios.get('http://localhost:3000/api/lawyer/5ca10ccab7701f2158efbad1')
        console.log(lawyer)
        return lawyer
    },


    getLawyer: async ()=>{
        const response = await axios.get('http://localhost:3000/api/admin/getLawyer',message)
        console.log(response)
        return response;

    
    getLawyers: async () => {
        const getLawyers = await axios.get('http://localhost:3000/api/admin/getLawyer')
        console.log(getLawyers)
        return getLawyers
    },
    getPendingUsers: async () => {
        const getPendingUsers = await axios.get('http://localhost:3000/api/admin/admin/ViewPendingUsers')
        console.log(getPendingUsers)
        return getPendingUsers
    },getAcceptedUsers: async () => {
        const getAcceptedUsers = await axios.get('http://localhost:3000/api/admin/admin/ViewAcceptedUsers')
        console.log(getAcceptedUsers)
        return getAcceptedUsers
    },
    ReviewerAcceptForm: async () => {
        const getAcceptedUsers = await axios.put('http://localhost:3000/api/reviewer/accept/5c9682f97908e018bc49734e/5c94f90a3ffb4b14d40bc87f')
        console.log(getAcceptedUsers)
        return getAcceptedUsers
    },ReviewerRejectForm: async () => {
        const getAcceptedUsers = await axios.put('http://localhost:3000/api/reviewer/reject/5ca09099f29bac0a8ca6467a/5c92a43acf0719e94d1907a5')
        console.log(getAcceptedUsers)
        return getAcceptedUsers
    },
    



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