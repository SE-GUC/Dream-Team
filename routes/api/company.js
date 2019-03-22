const express = require('express');
const router = express.Router();
const Company = require('../../models/Company');
//const validator = require('../../validations/CompanyValidation');
var bodyParser=require('body-parser');
const mongoose= require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
router.use(bodyParser.urlencoded({ extended: false }));
// Create a company
router.post('/', async (req,res) => {
    try {
    // const isValidated = validator.createValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newCompany = await Company.create(req.body)
     res.json({msg:'company was created successfully', data: newCompany})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 });

// read all 
router.get('/', async (req,res) => {
    const Companys = await Company.find()
    res.json({data: Companys})
})
//delete
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedCompany = await Company.findByIdAndRemove(id)
   res.json({msg:'Company was deleted successfully', data: deletedCompany})

  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }
})


 

module.exports = router