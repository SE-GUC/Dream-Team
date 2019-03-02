const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Lawyer_form = require('../../models/Lawyer_form')
//const validator = require('../../validations/bookValidations')

//Read Lawyer Form
router.get('/', async (req,res) => {
    const lawyer_form = await Lawyer_form.find()
    res.json({data: lawyer_form})
})

router.get('/:id', async (req,res) => {
   
        const id = req.params.id
        const lawyer_form = await Lawyer_form.find({id})
        res.json({data: lawyer_form})
    
 })
// router.get('/:id', async (req,res) => {
//     try {
//      const id = req.params.id
//      const book = await Book.findOne({id})
//      if(!book) return res.status(404).send({error: 'Book does not exist'})
//      const isValidated = validator.updateValidation(req.body)
//      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//      const updatedBook = await Book.updateOne(req.body)
//      res.json({msg: 'Book updated successfully'})
//     }
//     catch(error) {
//         // We will be handling the error later
//         console.log(error)
//     }  
//  })

//Create lawyer form
router.post('/', async (req,res) => {
   try {
    //const isValidated = validator.createValidation(req.body)
   // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newForm = await Lawyer_form.create(req.body)
    res.json({msg:'Lawyer Form was created successfully', data: newForm})
   }
   catch(error) {
       console.log(error)

   }  
})

//Update Lawyer Form
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const l_form = await Lawyer_form.findById(id)
     if(!l_form) return res.status(404).send({error: 'Form does not exist'})
    // const isValidated = validator.updateValidation(req.body)
    // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedForm = await Lawyer_form.findByIdAndUpdate(id,req.body)
     //const updatedForm = await Lawyer_form.updateOne(req.body)
     res.json({msg:'Lawyer_Form updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  

 })
 //DELETE THE FORM
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedForm = await Lawyer_form.findByIdAndRemove(id)
     res.json({msg:'Form was deleted successfully', data: deletedForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router