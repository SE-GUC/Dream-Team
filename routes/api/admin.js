var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const userValidator = require('../../validations/userValidations')
const formValidator = require('../../validations/formValidations')
const bcrypt = require('bcryptjs')
const User = require("../../models/User")
const Form = require('../../models/Form')
const typesEnum = require ('../../enums/accountType')
const formEnum=require('../../enums/formStatus')
const entity= require('../../enums/entityType')
const formType=require('../../enums/formType')
const regulatedLaw=require('../../enums/regulatedLaw')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// configuration option that tells the parser to use the classic encoding 
router.use(bodyParser.urlencoded({
    extended: false
}))

//User Story 6.7 sprint 3, Calculating Fees calculation 
router.put('/feesCalculation/:id', async (req,res) => {
    try {
     const id = req.params.id
     const form = await Form.findById(id)
     if(form.reviewerDecision===1 ){
      console.log("aya")
        if((form.entityType=="GAFI") && (form.regulatedLaw=="LAW159") ){
            var fees= form.financialInfo.capital
            var actualFees= (fees/1000)
            if(actualFees>1000)
                actualFees=1000
            if(actualFees<100)
                actualFees=100
            console.log(actualFees)
              }
         if(form.entityType=="NOTARYPUBLIC" && form.regulatedLaw=="LAW159" ){
                var fees= form.financialInfo.capital
                var actualFees= (fees*0.0025)
                console.log(actualFees)
                //var actualFees=Math.floor(fees/1000)
                if(actualFees>1000)
                  actualFees=1000
                if(actualFees<10)
                  actualFees=10
          console.log(actualFees)
      }
      if((form.entityType=="COMMERCIALREGISTER") &&(form.regulatedLaw=="LAW159" )){
        // console.log("ahhahahah")
        var actualFees= 56  
        console.log(actualFees)
      }
      if(form.entityType=="COMMERCIALREGISTER" && form.regulatedLaw=="LAW72" ){
        var actualFees= 610
      }
    }
      else{
        actualFees=0
      }
        // console.log(actualFees)
        if(!form) return res.status(404).send({error: 'Form does not exist'})
     var isValidated = formValidator.updateValidation(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedForm = await Form.findByIdAndUpdate(id,{feesCalculation:actualFees})
     console.log(actualFees)
     res.json({msg: 'Form updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
    
  })
  

// story 4.1 sprint 3 i can view all users that still pending and those who were accepted
router.get('/admin/ViewPendingUsers', async (req, res) => {
    const users= await User.find({"accountStatus":false})
    res.json({ 
        data: users
    })
 })

 router.get('/admin/ViewAcceptedUsers', async (req, res) => {
    const users= await User.find({"accountStatus":true})
    res.json({ 
        data: users
    })
 })


//3.6-Admin view all lawyers  
router.get('/getLawyer', async (req, res) => {
    const users = await User.find({"accountType": "lawyer"})
    res.json({
        data: users
    })
})


//3.4-Admin view all investors
router.get('/viewinvestor', async (req, res) => {
    const users = await User.find({"accountType": "investor"})
    res.json({
        data: users
    })
})

//3.7-As an admin I should be able to view all reviewers
router.get('/getReviewer', async (req, res) => {
    const users = await User.find({"accountType": "reviewer"})
    res.json({
        data: users
    })
})


// admin approving an account
router.put('/approve/:id', async (req, res) => {
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


//admin viewing all entity employees
router.get('/employee', async (req, res) => {
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
router.put('/reject/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).send({
                error: "This User does not exist"
            });
        const approve = {
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
router.delete('/:id', async (req, res) => {
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
router.put('/sendRejectionMsg/:id', async (req,res) => {
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

//view all users
router.get('/getUsers', async (req, res) => {
    const users = await User.find();
    res.json({ data: users });
  });

//get user by user id 
router.get('/getUsers/:id', async (req, res) => {
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

//As a Lawyer I should view all forms that I have approved/rejected
router.get('/lawyer/:id', async (req, res) => 
{
   const id = req.params.id
   const user = await User.findById(id);
       if (!user)
           return res.status(404).send({
               error: "This User does not exist"
           })
    // const lawyerForm1 = await Form.findById(id,{"lawyerDecision": 1}) 
    // const lawyerForm2 = await Form.findById(id, {"lawyerDecision": -1 })
    const lawyers = await Form.find({"lawyer":id})       
  
       res.json({ data: lawyers })
    
});

//As an Admin i can Search a field according to a specific field
router.get('/search',async (req,res) =>{

    const search = await Form.find(req.body)
 
  res.json({
    data: search
  })
 });

module.exports = router