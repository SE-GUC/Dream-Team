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


 // we merged 6.2 and 6.3 to be more efficient
 //As a reviewer i should be able to accept applications  and add a comment to be viewed by lawyer when reviewer rejects the form
 router.put('/accept/:idform/:idrev',async(req,res)=>{
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
  
  //As a reviewer i should be able to reject applications  and add a comment to be viewed by lawyer when reviewer rejects the form
  router.put('/reject/:idform/:idrev',async(req,res)=>{
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


 router.put('/reviewer/assign/:id/:rev',async(req,res)=>{
  const id = req.params.id
  const reviewer = req.params.rev
      const form = await Form.findById(id)
      if(!form)
          return res.status(404).send({error: 'Form does not exist'})
          const rev = await User.findById(reviewer)
      if(!rev)
          return res.status(404).send({error: 'Reviewer does not exist'})
      if(form.lawyer){
        res.json({msg: 'Form is already taken'})
      }
      else{
      await Form.findByIdAndUpdate(id,{"reviewer":reviewer})
      await Form.findByIdAndUpdate(id,{"reviewerDecision":0})
      res.json({msg: 'Form status is updated successfully'})
      }
})
//As a reviewer I should view all forms that I have approved/rejected

router.get("/reviewer/:type/AR/:id", async (req, res) => 
{
   const type = req.params.type
   const id = req.params.id
   const user = await User.findById(id);
       if (!user)
           return res.status(404).send({
               error: "This User does not exist"
           });
    const dec = await Form.find(({"reviewerDecision": 1 } || {"reviewerDecision": -1 }));       
   if(type===typesEnum.accountTypes.REVIEWER && dec){
     
   const form1 = await Form.find({"reviewer": id } ,{"reviewerDecision": 1 } );
   const form2 = await Form.find({"reviewer": id } ,{"reviewerDecision": -1 } );
   res.json({ data: form1 ,data2:form2 })}
   else res.json({ msg: "No Forms for this reviewer "});
   
   
 });


module.exports = router