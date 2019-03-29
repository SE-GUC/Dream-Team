const axios = require('axios');
const functions = {
    getUser: async () => {
        const books = await axios.get('http://localhost:3000/api/user/getUsers/5c92a483cf0719e94d1907a6')
        console.log(books)
        return books
    },

};
module.exports = functions;