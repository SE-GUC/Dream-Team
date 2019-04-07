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

//
//UPDATE FORM BY ID, updated by lawyer created it only 
router.put('/lawyer/:id', async (req,res) => {
  try {
   const id = req.params.id
   const form = await Form.findById(id)
   console.log(form)
   if(id==form.lawyer ){
   if(!form) return res.status(404).send({error: 'Form does not exist'})
   var isValidated = Formvalidator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedForm = await Form.findByIdAndUpdate(id,req.body)
   res.json({msg: 'Form updated successfully'})
  }
}
  catch(error) {
      console.log(error)
  }  
  
})

//Get Laws
router.get('/regulatedLaw', async (req,res) => {
  const law =regulatedLaw.regulatedLaw
  res.json({data: law})
})

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
                msg: "This Form does not exist"
            });
        res.json({
            data: form
        });
    } catch (err) {
        res.json({
            msg:"This Form does not exist"
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

//As a lawyer I can view which lawyer is working on a form

router.get("/lawyerOfForm/:id", async (req, res) => 
{
   const id = req.params.id;
   const form = await Form.findById(id);
   const law = form.lawyer
   //res.json({data:form.lawyer})
   if(law) {
   const use = await User.findById(form.lawyer)
   res.json({data:use})
   } else {
     res.json({msg:`No Lawyer found with that ID`})
   }
   
  // //const lawyerID = await form.('lawyer')
  //   if (!form)
  //          return res.status(404).send({
  //              error: "This form does not exist"
  //          })
   // const zet = await Form.find({"_id":id},{"_id":0}&&{"lawyer":1})
    
    //   console.log(form.lawyer)
    //   const lawyerid = form.lawyer

    //   const user = User.findById(Objectid("lawyerid").toString())
    //  res.json({ data: user })
    
});

//As a lawyer i should be assigned to a case

router.put('/lawyer/assign/:formId/:lawyerId',async(req,res)=>{
  const formId = req.params.formId;
  const lawyerId = req.params.lawyerId;
  const form = await Form.findById(formId)
  if (form.hasOwnProperty('lawyer')) {
    return res.status(404).send({error: 'Form already set'})
    // Do something
}else{
  await Form.findOneAndUpdate({_id: formId } ,{"lawyer": lawyerId , "lawyerDecision": 0});
  
  res.json({msg: 'Form status is updated successfully'})
}
      
    
          
 
     
})


 //Search in all published Companies #1.1 sprint 3
 router.get('/search',async (req,res) =>{
  const search = await Form.find(req.body)
res.json({
  data: search
})
});

module.exports = router