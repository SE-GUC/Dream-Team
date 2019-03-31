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

//I should be able to read all Forms
router.get('/', async (req,res) => {
    const form = await Form.find()
    res.json({data: form})
})



   // I should be able to Read forms by ID 
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const form = await Form.findById(id);
        if (!form)
            return res.status(404).send({
                error: "This Form does not exist"
            });
        res.json({
            data: form
        });
    } catch (err) {
        res.json({
            msg: err.message
        });
    }
  })
  
  //I should be able to get undecided forms for lawyer or reviwer
router.get('/undecidedForms/:loggedintype', async (req, res) => {
    const loggedintype = req.params.loggedintype
   
    if(loggedintype===typesEnum.accountTypes.LAWYER){
      var forms = await Form.find({"lawyerDecision": 0 })
      res.json({
        data: forms
      })
    }
    else if(loggedintype===typesEnum.accountTypes.REVIEWER){
      var forms = await Form.find({"reviewerDecision": 0 })
      res.json({
        data: forms
      })
    }
   
   
   
   else return res.status(404).send({
    error: "you are not allowed to perform the requested operation"
   })})
   
   //As a lawyer or reviewer or admin I should be able to get form status for any or specific investor to track his forms
router.get('/formStatus/:loggedintype/:id', async (req, res) => {
    const loggedintype = req.params.loggedintype
    const id = req.params.id
   
    if(loggedintype===typesEnum.accountTypes.INVESTOR){
      var forms = await Form.find({"investor": id })
      res.json({
        data: forms
      })
    }
    else if(loggedintype===typesEnum.accountTypes.REVIEWER||loggedintype===typesEnum.accountTypes.LAWYER||loggedintype===typesEnum.accountTypes.ADMIN){
      const forms = await Form.find();
      res.json({
        data: forms
      })
    }
    else return res.status(404).send({
      error: "you are not allowed to perform the requested operation"
    })
   
   });
   

//As an investor i should be able to view my pending companies
 router.get('/pending/:id', async (req, res) => {
    const id = req.params.id
    const forms =await Form.find({investor:id, formStatus: {$ne:formEnum.formStatus.APPROVED}})
       res.json({
   data: forms
})
})

//As an Investor i should be able to view my running companies
router.get('/running/:id', async (req, res) => {

const id = req.params.id
const forms= await Form.find({investor:id, formStatus:formEnum.formStatus.APPROVED })
  res.json({
    data: forms
})


})


module.exports = router