const axios = require('axios');
const functions = {
    getUser: async () => {
        const books = await axios.get('http://localhost:3000/api/user/getUsers/')
        console.log(books)
        return books
    },

};
module.exports = functions;