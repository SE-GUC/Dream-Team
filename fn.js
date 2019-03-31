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
    getLawyer: async ()=>{
        const response = await axios.get('http://localhost:3000/api/admin/getLawyer',message)
        console.log(response)
        return response;
    }
    


};
module.exports = functions;