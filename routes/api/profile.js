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


// UPDATE USER INFO by id
//has to check the id is current user id
router.put('/updateUser/:id', async (req, res) => {
    try {
        const id = req.params.id
        const law = await User.find({
            id
        })
        if (!law) return res.status(404).send({
            error: 'Admin does not exist'
        })
        if(req.body.accountType==='investor')
        var isValidated = userValidator.updateInvestorValidation(req.body)
        else if(req.body.accountType==='lawyer')
        var isValidated = userValidator.updateLawyerValidation(req.body)
        else if(req.body.accountType==='reviewer')
        var isValidated = userValidator.updateReviewerValidation(req.body)
        else if(req.body.accountType==='admin')
        var isValidated = userValidator.updateAdminValidation(req.body)
        const updatedUser = await User.findByIdAndUpdate(id, req.body)
        res.json({
            msg: 'User updated successfully'
        })
    } catch (error) {
        // We will be handling the error later
        console.log(error)
    }
})

//get user by user id 
//has to check the id is current user id
router.get('/getUsers/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).send({
                error: "This User does not exist"
            });
        res.json({
            data: user
        });
    } catch (err) {
        res.json({
            msg: err.message
        }   );
    }
});

module.exports = router