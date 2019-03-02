const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// deleteInvestor
const investor = require('../../models/Investor');
const validator = require('../../validations/InvestorValidations')

router.get('/', async (req,res) => {
   const Investor = await investor.find()
   res.json({data: Investor})
})

router.delete('/:id', async (req,res) => {
   try {
    const id = req.params.id
    const deletedInvestor = await investor.findByIdAndRemove(id)
    res.json({msg:'Investor was deleted successfully', data: deletedInvestor})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }
})

router.post('/', async (req, res) => {
   try {
       const isValidated = validator.createValidation(req.body)
       /*const salt = bcrypt.genSaltSync(10)
       const hashedPassword = bcrypt.hashSync(password,salt)
       if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })*/
       const newInv = await investor.create(req.body)
       res.json({ msg: 'Investor is created successfully', data: newInv })
   }
   catch (error) {
       // We will be handling the error later
       console.log(error)
   }
})

router.put('/:id', async (req,res) => {
   try {
    const id = req.params.id
    const inv = await Investor.find({id})
    if(!inv) return res.status(404).send({error: 'Investor does not exist'})
    //const isValidated = validator.updateValidation(req.body)
    //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedInvestor = await Investor.findByIdAndUpdate(id,req.body)
    res.json({msg: 'Investor updated successfully'})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }
})
module.exports =router