const express = require('express')
const router = express.Router()
//const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Lawyer = require('../../models/Lawyer')
//const validator = require('../../validations/LawyerValidations')

router.get('/', async (req,res) => {
    const lawyers = await Lawyer.find()
    res.json({data: lawyers})
})

//edit lawyer's account details
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const law = await Lawyer.find({ id })
        if (!law) return res.status(404).send({ error: 'lawyer does not exist' })
       // const isValidated = validator.updateValidation(req.body)
        //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedLaw = await Lawyer.findByIdAndUpdate(id,req.body)
        res.json({ msg: 'lawyer updated successfully' })
    }
    catch (error) {
        // We will be handling the error later
        console.log(error)
    }
 })


// Create a book
/*router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newLawyer = await Lawyer.create(req.Lawyer)
    res.json({msg:'Lawyer was created successfully', data: newLawyer})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})*/
router.post('/', async (req,res) => {
    const { Email, name, password , gender , Nationality , ID_Type , 
        ID_Number , Date_of_Birth , Address , Phone_number , Fax_number , Account_Status   }  = req.body
    const lawyer = await Lawyer.findOne({Email})
    if(lawyer) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newLawyer = new Lawyer({
            name,
            gender,
            Nationality,
            ID_Type,
            ID_Number,
            Date_of_Birth,
            Address,
            Phone_number,
            Fax_number,
            Account_Status, 
            Email,
            password: hashedPassword 

        })
    newLawyer
    .save()
    .then(lawyer => res.json({data: lawyer}))
    .catch(err => res.json({error: 'Can not create lawyer'}))
})



 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedLawyer = await Lawyer.findByIdAndRemove(id)
     res.json({msg:'Lawyer was deleted successfully', data: deletedLawyer})
     
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router