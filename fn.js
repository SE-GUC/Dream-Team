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
    

};
module.exports = functions;