const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require("../../models/User")
const Form = require('../../models/Form')
const formEnum=require('../../enums/formStatus')
const validator = require('../../validations/formValidations')
const typesEnum=require('../../enums/accountType')

//READ ALL FORMS
router.get('/', async (req,res) => {
    const form = await Form.find()
    res.json({data: form})
})
//As a reviewer i should be able to accept or reject applications  and add a comment to be viewed by lawyer when reviewer rejects the form
 // we merged 6.2 and 6.3 to be more efficient
 router.put('/reviewer/accept/:idform/:idrev',async(req,res)=>{
    const idform = req.params.idform
    const idrev = req.params.idrev
        const form = await Form.findById(idform)
        if(!form) 
            return res.status(404).send({error: 'Form does not exist'})
        if(idrev==form.reviewer) {  
        await Form.findByIdAndUpdate(idform,{formStatus:formEnum.formStatus.PAYMENT})
        await Form.findByIdAndUpdate(idform,{reviewerDecision:1})}
        else{
          res.json({msg: 'not the same reviewer'})
        }
         
        res.json({msg: 'Form status is updated successfully'})
  
  })
  router.put('/reviewer/reject/:idform/:idrev',async(req,res)=>{
        const idform = req.params.idform
        const idrev = req.params.idrev
        const form = await Form.findById(idform)
        if(!form) 
            return res.status(404).send({error: 'Form does not exist'})
            if(form.reviewer==idrev){
        await Form.findByIdAndUpdate(idform,{formStatus:formEnum.formStatus.LAWYER})
        await Form.findByIdAndUpdate(idform,{reviewerDecision:-1,reviwerComment:req.body.reviwerComment})}
        else{
          res.json({msg: 'not the same reviewer'})
        }
        res.json({msg: 'Form status is updated successfully'})
  
  })  
 //CREATE FORM BY LAWYER
// router.post('/lawyer/:id', async (req,res) => {
   
router.get("/:id", async (req, res) => {
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
//CREATE 
router.post('/lawyer/:id', async (req,res) => {
   
    try {
        const lawyerId = req.params.id
        var isValidated = validator.createValidation(req.body)
          if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
          const reqBody=req.body
          body: Object.assign(reqBody, {
            lawyer:lawyerId,
            lawyerDecision:1,
            formStatus:formEnum.formStatus.REVIEWER
          })
        const newForm = await Form.create(req.body)
        res.json({msg:'Form was created successfully ', data: newForm})}
        catch(error){
            console.log(error)
        }
        
 })
 router.post('/investor/:id', async (req,res) => {
   
    try {
      const investorId = req.params.id
        var isValidated = validator.createValidation(req.body)
          if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
          const reqBody=req.body
          body: Object.assign(reqBody, {
            investor:investorId,
            formStatus:formEnum.formStatus.LAWYER
          })
        const newForm = await Form.create(req.body)
        res.json({msg:'Form was created successfully ', data: newForm})}
        catch(error){
            console.log(error)
        }
        
 })

//GET BY Form ID
router.get("/:id", async (req, res) => {
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

//UPDATE FORM BY ID
router.put('/:id', async (req,res) => {
        try {
         const id = req.params.id
         const form = await Form.findById(id)
         if(!form) return res.status(404).send({error: 'Form does not exist'})
         var isValidated = validator.updateValidation(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
         const updatedForm = await Form.findByIdAndUpdate(id,req.body)
         res.json({msg: 'Form updated successfully'})
        }
        catch(error) {
            // We will be handling the error later
            console.log(error)
        }  
        
    })

//DELETE FORM BY ID        
router.delete('/:id', async (req,res) => {
    try {
    const id = req.params.id
    const deletedForm = await Form.findByIdAndRemove(id)
    res.json({msg:'Form was deleted successfully', data: deletedForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})
//Investor(Investor created form), lawyer(Investors' form forwarded to lawyer), Reviewer , Payment , Approved ENUM (FORM STATUS ENUM)
        //User Story 4.2 , investor vieweing pending companies
        router.get('/pending/:id', async (req, res) => {
            const id = req.params.id
            const forms =await Form.find({investor:id, formStatus: {$ne:formEnum.formStatus.APPROVED}})
               res.json({
           data: forms
       })
      })
       //User Story 4.3, investor vieweing running companies
       router.get('/running/:id', async (req, res) => {
        
        const id = req.params.id
        const forms= await Form.find({investor:id, formStatus:formEnum.formStatus.APPROVED })
          res.json({
            data: forms
        })
       

})
     

module.exports = router