const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Reviewer_Form = require('../../models/Reviewer_form')
// const validator = require('../../validations/bookValidations')

router.get('/', async (req,res) => {
    const form = await Reviewer_Form.find()
    res.json({data: form})
})

router.post('/', async (req,res) => {
    try {
    //  const isValidated = validator.createValidation(req.body)
    //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newForm = await Reviewer_Form.create(req.body)
     res.json({msg:'Review Form was created Succesfully ', data: newForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const rev = await Reviewer_Form.find({ id })
        if (!rev) return res.status(404).send({ error: 'Reviewer_Form does not exist' })
       // const isValidated = validator.updateValidation(req.body)
        //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedLaw = await Reviewer_Form.findByIdAndUpdate(id,req.body)
        res.json({ msg: 'Reviewer_Form updated successfully' })
    }
    catch (error) {
        // We will be handling the error later
        console.log(error)
    }
 })
 
module.exports = router