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
};
module.exports = functions;