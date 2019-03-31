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

// configuration option that tells the parser to use the classic encoding 
router.use(bodyParser.urlencoded({
    extended: false
}))

//
//UPDATE FORM BY ID, updated by lawyer created it only 
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const form = await Form.findById(id)
     if(id==form.lawyer ){
     if(!form) return res.status(404).send({error: 'Form does not exist'})
     var isValidated = formValidator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedForm = await Form.findByIdAndUpdate(id,req.body)
     res.json({msg: 'Form updated successfully'})
    }
  }
    catch(error) {
        console.log(error)
    }  
    
  })
  
  //Get Laws
  router.get('/regulatedLaw', async (req,res) => {
    const law =regulatedLaw.regulatedLaw
    res.json({data: law})
  })
  router.post('/', async (req,res) => {
    const user =req.body
    res.json({data: user})
  })

//As A Lawyer I should be able to fill in a Form

router.post('/:id/:INV', async (req,res) => {
   
    try {
        const lawyerId = req.params.id
        const INV = req.params.INV
        var isValidated = formValidator.createValidation(req.body)
          if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
          const reqBody=req.body
          body: Object.assign(reqBody, {
            investor: INV,
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

 
 //As a Lawyer , I Can view all my Finalized cases . (after lawyer accepted) --tested
router.get("/:id", async (req, res) => 
{
  const type = req.params.type
   const id = req.params.id
   const user = await User.findById(id);
       if (!user)
           return res.status(404).send({
               error: "This User does not exist"
           })

   const lawyers = await Form.find({"lawyerDecision": 1 ,"lawyer": id})      
    //if(type===typesEnum.accountTypes.LAWYER){
       res.json({ data: lawyers })
      
      // else res.json({ msg: "No Forms for this lawyer "});
    
})

// As a lawyer I should be able to add comment to Form after rejection
router.put('/:idform/:idlawyer', async (req, res) => {
 
  const id = req.params.idform;
  const idlaw = req.params.idlawyer;
  const form = await Form.findById(id);
  if (!form) return res.status(404).send({ error: "Form does not exist" });
  // const isValidated = formValidator.updateValidation(req.body)
  // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  //const lawform = await Form.find({"lawyer": idlaw ,"lawyerDecision": -1  })
 //const dec = await Form.find(( {"lawyerDecision": -1 }));
 var forms = await Form.findOne({"lawyerDecision": -1 ,"lawyer": idlaw ,"_id":id}) 
 // if((form.lawyerDecision==-1)&&(form.lawyer==idlaw)){
  if(forms){
  //const updatedForm = await Form.findByIdAndUpdate(id, req.body)
  const updatedForm = await Form.findOneAndUpdate({"lawyerDecision": -1,"lawyer": idlaw ,"_id":id } ,req.body)
  res.json({ msg: "Form updated successfully" })}
  else res.json({ msg: "No Forms for this lawyer "});

});

//As a Lawyer I should view all forms that I have approved/rejected 
//has to be my id
router.get('/:id', async (req, res) => 
{
   const id = req.params.id
   const user = await User.findById(id);
       if (!user)
           return res.status(404).send({
               error: "This User does not exist"
           })
    // const lawyerForm1 = await Form.findById(id,{"lawyerDecision": 1}) 
    // const lawyerForm2 = await Form.findById(id, {"lawyerDecision": -1 })
    const lawyers = await Form.find({"lawyer":id})       
  
       res.json({ data: lawyers })
    
})

//As a Lawyer i should be able to accept applications
router.put('/:lawyerId/accept/:id',async(req,res)=>{
  const id = req.params.id
  const lawyerId = req.params.id
  const lawyer = await Form.findById(lawyerId)
      if(!lawyer) 
          return res.status(404).send({error: 'lawyer does not exist'})
      const form = await Form.findById(id)
      if(!form) 
          return res.status(404).send({error: 'Form does not exist'})
      await Form.findByIdAndUpdate(id,{formStatus:formEnum.formStatus.REVIEWER})
      await Form.findByIdAndUpdate(id,{lawyerDecision:1})
      res.json({msg: 'Form status is updated successfully'})

})

//As a Lawyer i should be able to reject applications
router.put('/reject/:id',async(req,res)=>{
  const id = req.params.id
      const form = await Form.findById(id)
      if(!form) 
          return res.status(404).send({error: 'Form does not exist'})
      await Form.findByIdAndUpdate(id,{formStatus:formEnum.formStatus.INVESTOR})
      await Form.findByIdAndUpdate(id,{lawyerDecision:-1})
      res.json({msg: 'Form status is updated successfully'})
})

module.exports = router