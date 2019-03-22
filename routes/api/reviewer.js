const express = require('express')

const router = express.Router()
const Reviewer = require('../../models/Reviewer');

router.get('/', async(req, res) => {
  const rev = await Reviewer.find()
  res.json({data: rev})
} )

/*router.get('/:id', async(req, res) => {
   try {

       const id = req.params.id

       const rev = await Reviewer.findById( id )

       if (rev) return     res.json({ data: rev  })
       else
       res.status(404).send({ error: 'Reviewer does not exist' })


   }


   catch (error) {

       // We will be handling the error later

       res.json("error gdn")

   }

} )*/



router.post('/', async (req,res) => {
try {
 const newBook = await Reviewer.create(req.body)
 res.json({msg:'Reviewer was created successfully', data: newBook})
}
catch(error) {
    // We will be handling the error later
    console.log(error)
}
})

//update
router.put('/:id', async (req, res) => {

try {

    const id = req.params.id

    const rev = await Reviewer.find({ id })

    if (!rev) return res.status(404).send({ error: 'Reviewer does not exist' })


    const updatedRev = await Reviewer.findByIdAndUpdate(id,req.body)

    res.json({ msg: 'Reviewer updated successfully' })

}

catch (error) {

    // We will be handling the error later

    console.log(error)

}

});


// router.put('/:id', async (req,res) => {
//   try {
//    const id = req.params.id
//   const reviewer = await reviewer.findOne({id})
//    if(!reviewer) return res.status(404).send({error: 'reviewer does not exist'})
//   //  const isValidated = validator.updateValidation(req.body)
//   //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//    const updatedID_Number= await reviewer.updateOne(req.body)
//    res.json({msg: 'reviewer updated successfully'})
//   }
//   catch(error) {
//       // We will be handling the error later
//       console.log(error)
//   }
// });
//post


router.delete('/:id', async (req,res) => {
   try {
    const id = req.params.id
    const deletedreviewer= await Reviewer.findByIdAndRemove(id)
    res.json({msg:'reviewer was deleted successfully', data: deletedreviewer})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }
})



module.exports = router