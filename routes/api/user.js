const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const User = require('../../models/User')
const validator = require('../../validations/userValidations')
const bcrypt = require('bcryptjs')

const typesEnum = require ('../../enums/accountType')


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//3.6-Admin view all lawyers  
router.get('/admin/getLawyer', async (req, res) => {
    const users = await User.find({"accountType": "lawyer"})
    res.json({
        data: users
    })
})

// configuration option that tells the parser to use the classic encoding 
router.use(bodyParser.urlencoded({
    extended: false
}))

//view all users
router.get("/getUsers", async (req, res) => {
    const users = await User.find();
    res.json({ data: users });
  });

//3.4-Admin view all investors
  router.get('/admin/viewinvestor', async (req, res) => {
    const users = await User.find({"accountType": "investor"})
    res.json({
        data: users
    })
})

//3.7-As an admin I should be able to view all reviewers
router.get('/admin/getReviewer', async (req, res) => {
    const users = await User.find({"accountType": "reviewer"})
    res.json({
        data: users
    })
})


//4.1-As an Investor I should be able to track request/case status
router.get('/investor/trackRequest/:id', async (req, res) => {
    try{ const id = req.params.id
     const form = await Form.find({"investor": id})

      if (!form)
             return res.status(404).send({
                 error: "This form does not exist"
             });
         res.json({
             data: form
         });
     } catch (err) {
         res.json({
             msg: err.message
         });
     }
 });

//get user by user id 
router.get("/getUsers/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).send({
                error: "This User does not exist"
            });
        res.json({
            data: user
        });
    } catch (err) {
        res.json({
            msg: err.message
        }   );
    }
});

// create user (reviewer/investor/admin/lawyer)
router.post('/createUser', async (req,res) => {
    const {name, accountType , gender, nationality, typeID, numberID, dateOfBirth, address, phoneNumber,
    faxNumber, accountStatus, email, password, investorType,capital, capitalCurrency   }  = req.body
    const user = await User.findOne({email})
    if(user) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    if(req.body.accountType==='investor')
    var isValidated = validator.createInvestorValidation(req.body)
    else if(req.body.accountType==='lawyer')
    var isValidated = validator.createLawyerValidation(req.body)
    else if(req.body.accountType==='reviewer')
    var isValidated = validator.createReviewerValidation(req.body)
    else if(req.body.accountType==='admin')
    var isValidated = validator.createAdminValidation(req.body)
      

    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newUser = new User({
        name,
        accountType ,
        gender,
        nationality,
        typeID,
        numberID,
        dateOfBirth,
        address,
        phoneNumber,
        faxNumber,
        accountStatus,
        email,
        password : hashedPassword,
        investorType,
        capital,
        capitalCurrency

        })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: 'Can not create User'}))
})

// UPDATE USER INFO by id
router.put('/updateUser/:id', async (req, res) => {
    try {
        const id = req.params.id
        const law = await User.find({
            id
        })
        if (!law) return res.status(404).send({
            error: 'Admin does not exist'
        })
        if(req.body.accountType==='investor')
        var isValidated = validator.updateInvestorValidation(req.body)
        else if(req.body.accountType==='lawyer')
        var isValidated = validator.updateLawyerValidation(req.body)
        else if(req.body.accountType==='reviewer')
        var isValidated = validator.updateReviewerValidation(req.body)
        else if(req.body.accountType==='admin')
        var isValidated = validator.updateAdminValidation(req.body)
        const updatedUser = await User.findByIdAndUpdate(id, req.body)
        res.json({
            msg: 'User updated successfully'
        })
    } catch (error) {
        // We will be handling the error later
        console.log(error)
    }
})

//Admin approving an account
router.put("/admin/approve/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).send({
                error: "This User does not exist"
            });
        const approve={
            accountStatus: true
        }
        const approvedacc = await User.findByIdAndUpdate(id,approve)
        const acc= await User.findById(id);

        res.json({
            msg: "account have been approved",
            data: acc
    })
    } catch (err) {
        res.json({
            msg: err.message
        });
    }
});


//admin viewing all entity employess
    router.get("/admin/employee", async (req, res) => {
    try{
 //   const admin = await User.find({"accountType": "admin"})
   const users= await User.find({accountType: {$ne: typesEnum.accountTypes.INVESTOR}})
 
    res.json({
 
       data: users
 
    })
}
catch(err){
    res.json({
        msg: err.message
    })
}
 
 })

//As an Admin I should be able to Reject account
router.put("/admin/reject/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).send({
                error: "This User does not exist"
            });
        const approve={
            accountStatus: false
        }
        const approvedacc = await User.findByIdAndUpdate(id,approve);
        const acc= await User.findById(id);
        res.json({
                msg: "account have been disapproved",
                data: acc
        })
    } catch (err) {
        res.json({
            msg: err.message
        });
    }
});

//DELETE USER BY ID
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({
            msg: "The User has been deleted successfully",
            data: deletedUser
        })
    } catch (error) {
        res.json({
            msg: error.message
        });
    }
})

//As an Admin I should be able to send message to rejected accounts
router.put('/admin/sendRejectionMsg/:id', async (req,res) => {
    try {
     const id = req.params.id
     const user = await User.find({accountStatus:false},{_id:id} );
     if(!user) return res.status(404).send({error: 'user does not exist'})
     const updateduser = await User.findByIdAndUpdate(id,req.body)
     res.json({msg: 'user updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 
  })

module.exports = router
