const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Form = require('../../models/Form')

//Read my form
router.get('/', async (req, res) => {
    const form = await Form.find()
    res.json({
        data: form
    })
})

//CREATE (waiting for Validation)
router.post('/', async (req, res) => {
    try {
        //  const isValidated = validator.createValidation(req.body)
        //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newForm = await Form.create(req.body)
        res.json({
            msg: 'Form was created successfully ',
            data: newForm
        })
    } catch (error) {
        console.log(error)
    }

})

//UPDATE FORM BY ID  (waiting for Validation)
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const form = await Form.findById(id)
        if (!form) return res.status(404).send({
            error: 'Form does not exist'
        })
        // const isValidated = validator.updateValidation(req.body)
        // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedForm = await Form.findByIdAndUpdate(id, req.body)
        res.json({
            msg: 'Form updated successfully'
        })
    } catch (error) {
        // We will be handling the error later
        console.log(error)
    }

})

//DELETE FORM BY ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedForm = await Form.findByIdAndRemove(id)
        res.json({
            msg: 'Form was deleted successfully',
            data: deletedForm
        })
    } catch (error) {
        // We will be handling the error later
        console.log(error)
    }
})
module.exports = router