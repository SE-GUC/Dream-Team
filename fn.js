const axios = require('axios');
const functions = {
    getUser: async () => {
        const books = await axios.get('http://localhost:3000/api/user/getUsers/')
        return books
    },
    insert: async (user) => {
        const books = await axios.post('http://localhost:3000/api/user/createUser', user);
        return books;
    }

    


};
module.exports = functions;