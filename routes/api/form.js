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
   var isValidated = validator.updateValidation(req.body)
       if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedForm = await Form.findByIdAndUpdate(id,{feesCalculation:actualFees})
   console.log(actualFees)
   res.json({msg: 'Form updated successfully'})
  }
  catch(error) {
      console.log(error)
  }  
  
})
module.exports = router
