var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const typesEnum = require('../../enums/accountType');
const FormTypes = require('../../models/FormTypes');
const Enjoi = require('enjoi');
var Joi = require('joi');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//Create form type
router.post('/formType', async (req, res) => {
  await FormTypes.create(req.body);
  console.log('Form Type created succesfully');
});

//Delete form type
router.delete('/formType:id', async (req, res) => {
  const formTypeId = req.params.id;
  await FormTypes.deleteOne({ _id: formTypeId });
  console.log('Form type deleted succesfully');
});

//View form types
router.get('/formType', async (req, res) => {
  const formType = await FormTypes.find();
  if (!formType) res.status(400).send({ error: 'There is no form types' });
  else res.json({ data: formType });
});

//Update form type

TODO: //View pending users waiting for approval - Admin
router.get('/admin/ViewPendingUsers', async (req, res) => {
  const users = await User.find({ accountStatus: { $exists: false } });
  res.json({
    data: users
  });
});

//View Accepted (Active) Users - Admin
router.get('/admin/ViewAcceptedUsers', async (req, res) => {
  const users = await User.find({ accountStatus: true });
  res.json({
    data: users
  });
});

//View Rejected Users (who needs to be updated) - Admin
router.get('/admin/viewRejectedUsers', async (req, res) => {
  const users = await User.find({ accountStatus: false });
  res.json({
    data: users
  });
});

//View all lawyers - Admin
router.get('/getLawyer', async (req, res) => {
  const users = await User.find({ accountType: typesEnum.accountTypes.LAWYER });
  res.json({
    data: users
  });
});

//View all investors - Admin
router.get('/viewinvestor', async (req, res) => {
  const users = await User.find({
    accountType: typesEnum.accountTypes.INVESTOR
  });
  res.json({
    data: users
  });
});

//View all reviewers - Admin
router.get('/getReviewer', async (req, res) => {
  const users = await User.find({
    accountType: typesEnum.accountTypes.REVIEWER
  });
  res.json({
    data: users
  });
});

//Viewing all entity employees - Admin
router.get('/employee', async (req, res) => {
  try {
    const users = await User.find({
      accountType: { $ne: typesEnum.accountTypes.INVESTOR }
    });
    res.json({
      data: users
    });
  } catch (err) {
    res.json({
      msg: err.message
    });
  }
});

//Approving a user account - Admin
router.put('/approve/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user)
      return res.status(404).send({
        error: 'This User does not exist'
      });
    const approve = {
      accountStatus: true
    };
    const updated = await User.findByIdAndUpdate(id, approve);
    res.json({
      msg: 'account have been approved',
      data: updated
    });
  } catch (err) {
    res.json({
      msg: err.message
    });
  }
});

//Reject and send a comment - Admin
router.put('/sendRejectionMsg/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).send({ error: 'user does not exist' });
    const reject = req.body;
    reject.approveStatus = false;
    await User.findByIdAndUpdate(id, reject);
    res.json({ msg: 'user updated successfully' });
  } catch (error) {
    console.log(error);
  }
});

//Delete Users - Admin
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user.accountStatus == true)
      return res.status(404).send({
        error: 'This User cannot be deleted'
      });
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({
      msg: 'The User has been deleted successfully',
      data: deletedUser
    });
  } catch (error) {
    res.json({
      msg: error.message
    });
  }
});

//View all users - Admin
router.get('/getUsers', async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
});

//right//Get user by id - Admin
router.get('/getUsers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user)
      return res.status(404).send({
        error: 'This User does not exist'
      });
    res.json({
      data: user
    });
  } catch (err) {
    res.json({
      msg: err.message
    });
  }
});

module.exports = router;
