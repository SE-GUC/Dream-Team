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
    }


};
module.exports = functions;