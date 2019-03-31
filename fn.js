const axios = require('axios');
const functions = {

    notifyAmountAndDueDate:  async() => {
        const viewin = await axios.get('http://localhost:3000/api/investor/notifyAmountAndDueDate/:id')
        return viewin
},

viewAllInvestors: async () => {
const getInvestor =await axios.get('http://localhost:3000/api/admin/viewinvestor')
return getInvestor
},



viewAllReviewers: async () => {
    const getRev =await axios.get('http://localhost:3000/api/admin/getReviewer')
    return getRev
    },

investortrack: async () => {
    const getInvestor =await axios.get('http://localhost:3000/api/investor/trackRequest/5ca10eadb7701f2158efbad2')
    return getInvestor
    },


    invUpdateForm: async () => {
        const getInvestor =await axios.put('http://localhost:3000/api/investor/updateForm/5ca11184911834593cc03510/5ca10eadb7701f2158efbad2')
        return getInvestor
        },


        notifyAmountAndDueDate: async () => {
            const getInvestor =await axios.get('http://localhost:3000/api/investor/notifyAmountAndDueDate/:id')
            return getInvestor
            },
            

            finializedCases: async () => {
                const getlawyer =await axios.get('http://localhost:3000/api/lawyer/5ca10eadb7701f2158efbad2')
                return getlawyer
            }


};
module.exports = functions;