// @ts-check
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const User = require('../../models/User');
const Form = require('../../models/Form');
const formEnum = require('../../enums/formStatus');
const userEnum = require('../../enums/accountType');
const typesEnum = require('../../enums/accountType');
const formValidator = require('../../validations/formValidations');

const router = express.Router();
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//NEEDS MINIMIZATION-Create Form - Investor, Lawyer
router.post('/form', async (req, res) => {
  try {
    var investorID = '';
    var lawyerID = '';
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
      const inv = await User.findById(lawyerID);
      var flag = true;
      if (inv.nationality != 'Egyptian') {
        const b = req.body.board;
        flag = false;
        for (var i = 0; i < b.length; i++) {
          if (b[i].nationality == 'Egyptian') {
            flag = true;
          }
        }
      }
      if (!flag)
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
      formBody.investor = investorID;
    }
    const newForm = await Form.create(formBody);
    res.json({ msg: 'Form was created successfully ', data: newForm });
  } catch (error) {
    console.log(error);
  }
});

//NEEDS MINIMIZATION-Update Form - Investor, Lawyer
router.put('/form/:formid', async (req, res) => {
  try {
    const userID = req.get('_id');
    const formid = req.params.formid;
    const form = await Form.findById(formid);
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    //AUTHORIZATION
    if (
      (req.get('type') == userEnum.accountTypes.LAWYER &&
        (form.createdByLawyer == false ||
          form.lawyer != userID ||
          form.formStatus != formEnum.formStatus.LAWYER)) ||
      (req.get('type') == userEnum.accountTypes.INVESTOR &&
        (form.investor != userID ||
          form.formStatus != formEnum.formStatus.INVESTOR))
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
      var flag = true;
      if (inv.nationality != 'Egyptian') {
        const b = req.body.board;
        flag = false;
        for (var i = 0; i < b.length; i++) {
          if (b[i].nationality == 'Egyptian') {
            flag = true;
          }
        }
      }
      if (!flag)
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
    var isValidated = formValidator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    var formBody = req.body;
    if (
      form.formStatus == formEnum.formStatus.INVESTOR &&
      form.lawyerDecision == -1
    ) {
      formBody.formStatus = formEnum.formStatus.LAWYER;
      formBody.$unset = { lawyerDecision: 1, lawyer: 1 };
    } else if (
      form.formStatus == formEnum.formStatus.LAWYER &&
      form.reviewerDecision == -1
    ) {
      formBody.formStatus = formEnum.formStatus.REVIEWER;
      formBody.$unset = { reviewerDecision: 1, reviewer: 1 };
    }
    await Form.findByIdAndUpdate(formid, formBody);
    res.json({ msg: 'Form updated successfully' });
  } catch (e) {
    console.log(e);
  }
});

//Delete a form - Lawyer
router.delete('/:id', async (req, res) => {
  try {
    const formId = req.params.id;
    const form = await Form.findById(formId);
    const investorID = req.get('_id');
    if (investorID != form.investor)
      return res
        .status(400)
        .json({ error: 'You are not authorized to deal with this form' });
    if (form.formStatus != formEnum.formStatus.INVESTOR)
      return res
        .status(400)
        .json({ error: 'This form is already in progress' });
    const deletedForm = await Form.findByIdAndRemove(formId);
    res.json({ msg: 'Form was deleted successfully', data: deletedForm });
  } catch (error) {
    console.log(error);
  }
});

//View all my Finalized cases - Lawyer
router.get('/:id', async (req, res) => {
  const type = req.params.type;
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user)
    return res.status(404).send({
      error: 'This User does not exist'
    });
  const lawyers = await Form.find({ lawyerDecision: 1, lawyer: id });
  res.json({ data: lawyers });
});

//Reject and send a comment - Lawyer
router.put('/sendRejectionMsg/:id', async (req, res) => {
  try {
    const formID = req.params.id;
    const lawyerID = req.get('_id');
    const form = await Form.findById(formID);
    if (!form) return res.status(404).send({ error: 'form does not exist' });
    if (form.lawyer != lawyerID)
      return res
        .status(404)
        .send({ error: 'This form does not belong to you' });
    const reject = {
      lawyerComment: req.body.lawyerComment,
      lawyerDecision: -1,
      formStatus: formEnum.formStatus.INVESTOR
    };
    await Form.findByIdAndUpdate(formID, reject);
    res.json({ msg: 'form updated successfully' });
  } catch (error) {
    console.log(error);
  }
});

//Accept Form - Lawyer
router.put('/accept/:id', async (req, res) => {
  try {
    const formID = req.params.id;
    const lawyerID = req.get('_id');
    const form = await Form.findById(formID);
    if (!form)
      return res.status(404).send({ error: 'This form does not exist' });
    if (form.lawyer != lawyerID)
      return res
        .status(404)
        .send({ error: 'This form does not belong to you' });
    var approved = {
      lawyerDecision: 1,
      formStatus: formEnum.formStatus.REVIEWER
    };
    await Form.findByIdAndUpdate(formID, approved);
    res.json({ msg: 'Form accepted succesfully' });
  } catch (e) {
    console.log(e);
  }
});

//Show my pending cases - Lawyer
router.get('/pendingCase/:id', async (req, res) => {
  const id = req.params.id;
  const form = await Form.find({
    lawyer: id,
    lawyerDecision: { $exists: false }
  });
  if (!form)
    return res.status(404).send({
      error: 'There are no pending forms'
    });
  res.json({ data: form });
});

//Assign me to review this form - Lawyer
router.put('/reviewer/assign/:id', async (req, res) => {
  const formID = req.params.id;
  const lawyerID = req.get('_id');
  const form = await Form.findById(formID);
  if (!form) return res.status(404).send({ error: 'Form does not exist' });
  if (form.formStatus == formEnum.formStatus.LAWYER) {
    await Form.findByIdAndUpdate(formID, { lawyer: lawyerID });
    res.json({ msg: 'Form status is updated successfully' });
  } else {
    res.status(400).send({ msg: 'this form is not avalaible at the moment' });
  }
});

//Mark payment as done (Cash)
router.put('/payment/:id', async (req, res) => {
  const formId = req.params.id;
  const lawyerId = req.get('_id');
  var form = await Form.findById(formId);
  if (!form) res.status(404).send({ error: 'This form is not found' });
  if (form.lawyer != lawyerId)
    res
      .status(404)
      .send({ error: 'You are not authorized to update this form' });
  if (form.status != formEnum.formStatus.PAYMENT)
    res.status(404).send({ error: 'This is not eglibible for payment yet' });
  const paid = {
    payment: {
      paymentId: req.body.paymentID,
      dateOfPayment: new Date(),
      method: 'CASH',
      lawyer: lawyerId
    }
  };
  form = await Form.findByIdAndUpdate(formId, paid);
});

module.exports = router;
