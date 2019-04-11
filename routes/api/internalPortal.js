var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const userValidator = require('../../validations/userValidations');
const formValidator = require('../../validations/formValidations');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const Form = require('../../models/Form');
const typesEnum = require('../../enums/accountType');
const formEnum = require('../../enums/formStatus');
const entity = require('../../enums/entityType');
const formType = require('../../enums/formType');
const regulatedLaw = require('../../enums/regulatedLaw');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//Get Laws
router.get('/regulatedLaw', async (req, res) => {
  const law = regulatedLaw.regulatedLaw;
  res.json({ data: law });
});

//Read all Forms - Internal Portal
router.get('/', async (req, res) => {
  const form = await Form.find();
  res.json({ data: form });
});

//Read forms by ID - Internal Portal
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form)
      return res.status(404).send({
        msg: 'This Form does not exist'
      });
    res.json({
      data: form
    });
  } catch (err) {
    res.json({
      msg: 'This Form does not exist'
    });
  }
});

//Undecided forms - Internal Portal (Except Admin)
router.get('/undecidedForms', async (req, res) => {
  const userType = req.get('type');
  const userID = req.get('_id');
  if (userType === typesEnum.accountTypes.LAWYER) {
    var forms = await Form.find({
      lawyerDecision: { $exists: false },
      lawyer: userID
    });
    res.json({
      data: forms
    });
  } else if (loggedintype === typesEnum.accountTypes.REVIEWER) {
    var forms = await Form.find({
      reviewerDecision: { $exists: false },
      reviewer: userID
    });
    res.json({
      data: forms
    });
  } else
    return res.status(404).send({
      error: 'you are not allowed to perform the requested operation'
    });
});

//Track Forms of specific investor -  Internal Portal
TODO: router.get('/formStatus/:id', async (req, res) => {
  const investorID = req.params.id;
  var forms = await Form.find({ investor: investorID });
  res.json({
    data: forms
  });
});

module.exports = router;
