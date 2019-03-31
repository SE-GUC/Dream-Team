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
     //User story 4.2 sprint 2
     getrunningcompanies: async () => {
        const runningcompanies = await axios.get('http://localhost:3000/api/internalPortal/running/5c92a43acf0719e94d1907a5/')
        // console.log(runningcompanies)
        return runningcompanies
    },
    //User story 4.3 Sprint 2
    getpendingcompanies: async () => {
        const pendingcompanies = await axios.get('http://localhost:3000/api/internalPortal/pending/5c92a43acf0719e94d1907a5/')
        // console.log(pendingcompanies)
        return pendingcompanies
    },
    //User Story 5.4 sprint 1
    getmyform: async () => {
        const getform = await axios.get('http://localhost:3000/api/form/5c93bf2312c22705f4b0aab6')
        console.log(getform)
        return getform
    },
	


};
module.exports = functions;