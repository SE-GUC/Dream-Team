var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

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

//Create Form - Investor, Lawyer
router.post('/form', async (req, res) => {
  try {
    const investorID = 0;
    const lawyerID = 0;
    if (req.get('type') == typesEnum.accountTypes.lawyer) {
      lawyerID = req.get('_id');
      investorID = req.body.investor;
    } else investorID = req.get('_id');

    if (req.body.companyName) {
      const company = await Form.findOne({
        companyName: req.body.companyName
      });
      if (company)
        return res.status(400).json({ error: 'Company Name already exists' });
    }
    //SSC Conditions
    if (req.body.companyName == 'SSC') {
      const invssc = await Form.findOne({
        investor: investorID,
        companyType: 'SSC'
      });

      if (invssc)
        return res.status(400).json({
          error: 'The investor cannot Establish multiple SSC Companies'
        });
      const inv = await User.findById(form.investor);
      const flag = 0;
      if (inv.nationality != 'Egyptian') {
        const b = req.body.board;
        for (i = 0; i < b.length; i++) {
          if (!(b[i].nationality == 'egyptian')) {
            flag = 1;
          }
        }
      }
      if (flag == 0)
        return res.status(400).json({
          error:
            'investors establishing SSC must have at least one egyptian manager'
        });
    }

    //SPC Conditions
    if (req.body.board && req.body.companyType == 'SPC') {
      console.log(req.body.board);
      return res
        .status(400)
        .json({ error: 'investors establishing SPC cannot have board' });
    }

    var isValidated = formValidator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    var formBody = req.body;
    if (req.get('type') == 'lawyer') {
      (formBody.createdByLawyer = true),
        (formBody.lawyer = lawyerID),
        (formBody.lawyerDecision = true),
        (formBody.formStatus = formEnum.formStatus.REVIEWER);
    } else {
      formBody.formStatus = formEnum.formStatus.LAWYER;
      formBody.investor = investorId;
    }
    const newForm = await Form.create(formBody);
    res.json({ msg: 'Form was created successfully ', data: newForm });
  } catch (error) {
    console.log(error);
  }
});

//Update Form - Investor, Lawyer
router.put('/form/:formid', async (req, res) => {
  try {
    const userID = req.get(_id);
    const formid = req.params.formid;
    const form = await Form.findById(formid);
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    //AUTHORIZATION
    if (
      (req.get('type') == 'lawyer' &&
        (form.createdByLawyer == false || form.lawyer != userID)) ||
      req.get('type') == 'reviewer' ||
      form.investor != userID
    ) {
      return res.status(404).send({ error: 'You have no authorization' });
    }
    if (req.body.companyName) {
      const company = await Form.findOne({
        companyName: req.body.companyName
      });
      if (company)
        return res.status(400).json({ error: 'Company Name already exists' });
    }
    //SSC Conditions
    if (req.body.companyName == 'SSC' || form.companyType == 'SSC') {
      const invssc = await Form.findOne({
        investor: form.investor,
        companyType: 'SSC'
      });

      if (invssc)
        return res.status(400).json({
          error: 'The investor cannot Establish multiple SSC Companies'
        });
      const inv = await User.findById(form.investor);
      const flag = 0;
      if (inv.nationality != 'Egyptian') {
        const b = req.body.board;
        for (i = 0; i < b.length; i++) {
          if (!(b[i].nationality == 'egyptian')) {
            flag = 1;
          }
        }
      }
      if (flag == 0)
        return res.status(400).json({
          error:
            'investors establishing SSC must have at least one egyptian manager'
        });
    }

    //SPC Conditions
    if (req.body.board && req.body.companyType == 'SPC') {
      console.log(req.body.board);
      return res
        .status(400)
        .json({ error: 'investors establishing SPC cannot have board' });
    }

    //Validations and Insertion
    var isValidated = Formvalidator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    var formBody = req.body;
    if (
      (form.formStatus =
        formEnum.formStatus.INVESTOR && form.lawyerDecision == -1)
    ) {
      formBody.formStatus = formEnum.formStatus.LAWYER;
      formBody.$unset = { lawyerDecision: 1, lawyer: 1 };
    } else if (
      (form.formStatus =
        formEnum.formStatus.LAWYER && form.reviewerDecision == -1)
    ) {
      formBody.formStatus = formEnum.formStatus.REVIEWER;
      formBody.$unset = { reviewerDecision: 1, reviewer: 1 };
    }
    await Form.findByIdAndUpdate(id, formBody);
    res.json({ msg: 'Form updated successfully' });
  } catch (e) {
    console.log(e);
  }
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
