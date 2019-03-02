const mongoose= require('mongoose');
const express=require('express');
const router=express.Router();
var bodyParser=require('body-parser');
const Admin = require('../../models/Admin')
//const validator = require('../../validations/adminValidation')

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req,res) => {
   const admin = await Admin.find()
   res.json({data: admin})
})

// sign up admin
router.post('/', async (req,res) => {
  try {
   //const isValidated = validator.createValidation(req.body)
  // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newAdmin = await Admin.create(req.body)
   res.json({msg:'Admin was created successfully', data: newAdmin})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }
});

// Update an admin's info
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const law = await Admin.find({ id })
        if (!law) return res.status(404).send({ error: 'Admin does not exist' })
       // const isValidated = validator.updateValidation(req.body)
        //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedAdm = await Admin.findByIdAndUpdate(id,req.body)
        res.json({ msg: 'Admin updated successfully' })
    }
    catch (error) {
        // We will be handling the error later
        console.log(error)
    }
 })
 // delete
router.delete("/:id", async (req, res) => {
   try {
    const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndDelete(id);
     res.json({
       msg: "Your Admin has been deleted successfully",
       data: deletedAdmin
     })
   } catch (error) {
     res.json({ msg: error.message });
   }
 })// read all


 router.get("/:id", async (req, res) => {
 try {
   const id = req.params.id
   const admin = await Admin.findById(id);
   if (!admin)
     return res.status(404).send({ error: "This admin does not exist" });
   res.json({ data: admin });
 } catch (err) {
   res.json({ msg: err.message });
 }
});
module.exports=router