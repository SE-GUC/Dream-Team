var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const userValidator = require("../../validations/userValidations");
const formValidator = require("../../validations/formValidations");
const User = require("../../models/User");
const Form = require("../../models/Form");
const typesEnum = require("../../enums/accountType");
const formEnum = require("../../enums/formStatus");
const entity = require("../../enums/entityType");
const formType = require("../../enums/formType");
const regulatedLaw = require("../../enums/regulatedLaw");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//Configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//Reject and send a comment - Reviewer
router.put("/sendRejectionMsg/:id", async (req, res) => {
  try {
    const formID = req.params.id;
    const reviewerID = req.payload.id;
    const form = await Form.findById(formID);
    if (!form) return res.status(404).send({ error: "form does not exist" });
    if (form.reviewer != reviewerID)
      return res
        .status(404)
        .send({ error: "This form does not belong to you" });
    const reject = {
      reviewerDecision: -1,
      $push: { lawyerComment: formID },
      formStatus: formEnum.formStatus.LAWYER,
      $unset: { lawyer: 1, lawyerDecision: 1, lawyerComment: 1 }
    };
    await Form.findByIdAndUpdate(formID, reject);
    res.json({ msg: "form updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

//Accept Form - Reviewer
router.put("/accept/:id", async (req, res) => {
  try {
    const formID = req.params.id;
    const reviewerID = req.payload.id;
    const form = await Form.findById(formID);
    if (!form)
      return res.status(404).send({ error: "This form does not exist" });
    if (form.reviewer != reviewerID)
      return res
        .status(404)
        .send({ error: "This form does not belong to you" });
    var approved = {
      reviewerDecision: 1,
      formStatus: formEnum.formStatus.PAYMENT,
      dateOfApproval: new Date()
    };
    await Form.findByIdAndUpdate(formID, approved);
    res.json({ msg: "Form accepted succesfully" });
  } catch (e) {
    console.log(e);
  }
});

//Assign me to review this form - Reviewer
router.put("/assign/:id", async (req, res) => {
  const formID = req.params.id;
  const reviewerID = req.payload.id;
  const form = await Form.findById(formID);
  if (!form) return res.status(404).send({ error: "Form does not exist" });
  if (form.formStatus == formEnum.formStatus.REVIEWER) {
    await Form.findByIdAndUpdate(formID, { reviewer: reviewerID });
    res.json({ msg: "Form status is updated successfully" });
  } else {
    res.status(400).send({ msg: "this form is not avalaible at the moment" });
  }
});

//View all forms that I have approved/rejected
TODO: router.get("/AR", async (req, res) => {
  const type = req.payload.type;
  const reviewerID = req.payload.id;
  console.log(reviewerID);
  const user = await User.findById(reviewerID);
  if (!user)
    return res.status(404).send({
      error: "This User does not exist"
    });
  const dec = await Form.find(
    { reviewerDecision: 1 } || { reviewerDecision: -1 }
  );
  console.log(dec);
  if (type === typesEnum.accountTypes.REVIEWER && dec) {
    const forms = await Form.find({
      reviewer: reviewerID,
      $or: [{ reviewerDecision: -1 }, { reviewerDecision: 1 }]
    });
    //Check condition
    res.json({ data: dec });
  } else res.json({ msg: "No Forms for this reviewer " });
});

//Show pending cases(workpage) - Reviewer
router.get("/pendingCase", async (req, res) => {
  const id = req.payload.id;
  const form = await Form.find({
    reviewer: id,
    reviewerDecision: { $exists: false }
  });
  if (!form)
    return res.status(404).send({
      error: "This form does not exist"
    });
  res.json({ data: form });
});

module.exports = router;
