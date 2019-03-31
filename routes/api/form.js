const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require("../../models/User")
const Form = require('../../models/Form')
const formEnum=require('../../enums/formStatus')
const validator = require('../../validations/formValidations')
const typesEnum=require('../../enums/accountType')



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

//UPDATE FORM BY ID
router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const form = await Form.findById(id);
      const company = await Form.findOne({ companyName: req.body.companyName });
      if (company)
        return res.status(400).json({ error: "Company Name already exists" });
      if (
        req.body.board !== undefined &&
        req.body.board !== null &&
        req.body.companyType !== undefined &&
        req.body.companyType === "SPC"
      )
   
        return res
          .status(400)
          .json({ error: "investors establishing SPC cannot have board" });
      if (!form) return res.status(404).send({ error: "Form does not exist" });
      var isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const updatedForm = await Form.findByIdAndUpdate(id, req.body);
      res.json({ msg: "Form updated successfully" });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  }
);

router.get('/search',async (req,res) =>{
 
    const search = await Form.find(req.body)

  res.json({
    data: search
  })
})

//As a lawyer or reviewer or admin I should be able to get form status for any or specific investor to track his forms
router.get("/formStatus/:loggedintype/:id", async (req, res) => {
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


module.exports = router
