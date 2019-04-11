var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const userValidator = require('../../validations/userValidations');
const formValidator = require('../../validations/formValidations');
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

// configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//View my rejected forms -Investor
router.get('/viewRejectedForms', async (req, res) => {
  try {
    const id = req.get('_id');
    const form = await Form.find({
      formStatus: formEnum.formStatus.investor,
      investor: id
    });
    if (!form)
      return res.status(404).send({
        error: 'This form does not exist'
      });
    res.json({
      data: form
    });
  } catch (err) {
    res.json({
      msg: err.message
    });
  }
});

//Update Rejected forms
FIXME: router.put('/updateForm/:idform', async (req, res) => {
  const formID = req.params.idform;
  const investorID = req.get('_id');
  var forms = await Form.findOne({
    formStatus: formEnum.formStatus.investor,
    investor: investorID,
    _id: formID
  });
  if (forms) {
    const updatedForm = await Form.findOneAndUpdate(
      { lawyerDecision: 0, investor: idinv, _id: id },
      req.body
    );
    res.json({ msg: 'Form updated successfully', data: updatedForm });
  } else res.json({ msg: 'form not rejected ' });
});

//As an investor , I should be notified with the amount and the due date (fees calculation)
FIXME: router.get('/notifyAmountAndDueDate/:id', async (req, res) => {
  const type = req.params.type;
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user)
    return res.status(404).send({
      error: 'This User does not exist'
    });

  const form = await Form.findOne(
    { investor: id },
    { dateOfPayment: 1, amountOfPayment: 1, _id: 0 }
  );

  res.json({ data: form });
});

//Create From
FIXME: router.post('/:id', async (req, res) => {
  try {
    const investorId = req.params.id;
    var nation = await User.findById(investorId);

    const company = await Form.findOne({ companyName: req.body.companyName });
    if (company)
      return res.status(400).json({ error: 'Company Name already exists' });
    const invssc = await Form.findOne({
      investor: investorId,
      companyType: 'SSC'
    });

    if (invssc && req.body.companyType == 'SSC')
      return res
        .status(400)
        .json({ error: 'you cannot Establish multiple SSC Companies' });
    if (req.body.board !== undefined && req.body.companyType == 'SPC') {
      console.log(req.body.board);
      return res
        .status(400)
        .json({ error: 'investors establishing SPC cannot have board' });
    }

    const flag = 0;
    if (req.body.board !== undefined) {
      const b = req.body.board;

      for (i = 0; i < b.length; i++) {
        if (!(b[i].nationality == 'egyptian')) {
          flag = 1;
        }
      }
    }
    // const egy = await req.body.board.findOne({"nationality":"egyptian"})
    if (
      (req.body.board == undefined || req.body.board == null) &&
      req.body.companyType === 'SSC' &&
      flag == 0
    )
      return res.status(400).json({
        error:
          'investors establishing SSC must have at least one egyptian manager'
      });
    var isValidated = formValidator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const reqBody = req.body;
    body: Object.assign(reqBody, {
      investor: investorId,
      formStatus: formEnum.formStatus.LAWYER
    });
    const newForm = await Form.create(req.body);
    res.json({ msg: 'Form was created successfully ', data: newForm });
  } catch (error) {
    console.log(error);
  }
});

//I should be able to update a Form has to be my form to update the form and not update all fields
FIXME: router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    var isValidated = formValidator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedForm = await Form.findByIdAndUpdate(id, req.body);
    res.json({ msg: 'Form updated successfully' });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//Delete a form -Investor
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    const investorID = req.get('_id');
    if (investorID != form.investor)
      return res
        .status(400)
        .json({ error: 'You are not authorized to deal with this form' });
    if (form.formStatus != formEnum.formStatus.INVESTOR)
      return res
        .status(400)
        .json({ error: 'This form is already in progress' });
    const deletedForm = await Form.findByIdAndRemove(id);
    res.json({ msg: 'Form was deleted successfully', data: deletedForm });
  } catch (error) {
    console.log(error);
  }
});

//Track all my request/case status-Investor
router.get('/trackRequest', async (req, res) => {
  try {
    const id = req.get('_id');
    const form = await Form.find({ investor: id });

    if (!form)
      return res.status(404).send({
        error: 'This form does not exist'
      });
    res.json({
      data: form
    });
  } catch (err) {
    res.json({
      msg: err.message
    });
  }
});

//View my pending companies-Investor
router.get('/pending', async (req, res) => {
  const id = req.get('_id');
  const forms = await Form.find({
    investor: id,
    formStatus: { $ne: formEnum.formStatus.APPROVED }
  });
  res.json({
    data: forms
  });
});

//View my running companies-Investor
router.get('/running', async (req, res) => {
  const id = req.get('_id');
  const forms = await Form.find({
    investor: id,
    formStatus: formEnum.formStatus.APPROVED
  });
  res.json({
    data: forms
  });
});

module.exports = router;
