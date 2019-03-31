const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require("../../models/User")
const Form = require('../../models/Form')
const formEnum=require('../../enums/formStatus')
const validator = require('../../validations/formValidations')
const typesEnum=require('../../enums/accountType')

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
