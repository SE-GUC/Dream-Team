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
    assignReviewer: async () => {
        const form = await axios.put('http://localhost:3000/api/reviewer/reviewer/assign//5ca111505f1a5e6ea047740f/5ca11edf911834593cc03514')
        console.log(form)
        return form
    },
    sendMsg: async () => {
        const form = await axios.put('http://localhost:3000/api/lawyer/:idform/:idlawyer')
        console.log(form)
        return form
    },
    reviewerDecidedForms: async () => {
        const reviewerDecidedForms = await axios.get('http://localhost:3000/api/reviewer/reviewer/reviewer/AR/5ca0cdc9740ffeb81ac22875')
        console.log(reviewerDecidedForms)
        return reviewerDecidedForms
    }
 
   

};
module.exports = functions;