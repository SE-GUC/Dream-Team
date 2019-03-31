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
    




    getForm: async () => {
        const SSC = await axios.get('http://localhost:3000/api/internalPortal/5c93bf2312c22705f4b0aab6')
        console.log(SSC)
        return SSC
    },

    getSSC: async () => {
        const SSC = await axios.get('http://localhost:3000/api/user/information/SSC/')
        console.log(SSC)
        return SSC
    },

    getSPC: async () => {
        const SPC = await axios.get('http://localhost:3000/api/user/information/SPC/')
        console.log(SPC)
        return SPC
    },

    getSSCandSPC: async () => {
        const SSCandSPC = await axios.get('http://localhost:3000/api/user/information/SSCandSPC/')
        console.log(SSCandSPC)
        return SSCandSPC
    },

    getfeesCalculationRules: async () => {
        const feesCalculationRules = await axios.get('http://localhost:3000/api/user/information/feesCalculationRules/')
        console.log(feesCalculationRules)
        return feesCalculationRules
    },

    getpublishedcompanies: async () => {
        const publishedcompanies = await axios.get('http://localhost:3000/api/user/companies/publishedcompanies/')
        console.log(publishedcompanies)
        return publishedcompanies
    },
    

    getrunningcompanies: async () => {
        const runningcompanies = await axios.get('http://localhost:3000/api/form/running/:id/')
        console.log(runningcompanies)
        return runningcompanies
    },
    getpendingcompanies: async () => {
        const pendingcompanies = await axios.get('http://localhost:3000/api/form/pending/:id/')
        console.log(pendingcompanies)
        return pendingcompanies
    },
    getpendingcase: async () => {
        // const form =  await axios.get('http://localhost:3000/api/form/') 
        // const formID = form.data.data[28].lawyer
        // console.log(formID)
        const pendingcase = await axios.get('http://localhost:3000/api/lawyer/pendingCase/5c94f8c7fe24291e38a3ae94')
        //console.log(pendingcase)
        return pendingcase
    },
    getlawyerOfForm: async () => {
        const lawyerOfForm = await axios.get('http://localhost:3000/api/internalPortal/lawyerOfForm/5ca0f56c18d0ec5b90c3d649/')
        console.log(lawyerOfForm)
        return lawyerOfForm 
    },

    assignCaseToLawyer: async () => {
        const assignCaseToLawyer = await axios.put('http://localhost:3000/api/internalPortal/lawyer/assign/5c93bf2312c22705f4b0aab6/5c94f8c7fe24291e38a3ae94/')
        //console.log(assignCaseToLawyer)
        return assignCaseToLawyer
    },
    getFormBySpeceficField: async () => {
        const form = await axios.get('http://localhost:3000/api/admin/search')
        console.log(form)
        return form
    }


};
module.exports = functions;