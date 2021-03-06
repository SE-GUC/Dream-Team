var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const User = require("../../models/User");
const Form = require("../../models/Form");
const typesEnum = require("../../enums/accountType");
const regulatedLaw = require("../../enums/regulatedLaw");
const passport = require("passport");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//Configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//View all Forms - Internal Portal
router.get("/", async (req, res) => {
  const form = await Form.find();
  res.json({ data: form });
});

router.get("/search", async (req, res) => {
  const search = await Form.find(req.body);

  res.json({
    data: search
  });
});

//Get Laws
router.get("/regulatedLaw", async (req, res) => {
  const law = regulatedLaw.regulatedLaw;
  res.json({ data: law });
});

//View forms by ID - Internal Portal
router.get("/form/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form)
      return res.status(404).send({
        msg: "This Form does not exist"
      });
    res.json({
      data: form
    });
  } catch (err) {
    res.json({
      msg: "This Form does not exist"
    });
  }
});

//View Forms of specific investor -  Internal Portal
router.get("/formStatus/:id", async (req, res) => {
  const investorID = req.params.id;
  var forms = await Form.find({ investor: investorID });
  res.json({
    data: forms
  });
});

//right//Get user by id - Admin
router.get("/user/:id", async (req, res) => {
  try {
    const id = req.payload.id;
    const user = await User.findById(id);
    if (!user)
      return res.status(404).send({
        error: "This User does not exist"
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

//View which lawyer is working on a form
router.get("/lawyerOfForm/:id", async (req, res) => {
  const formID = req.params.id;
  const form = await Form.findById(formID);
  const lawyerID = form.lawyer;
  if (lawyerID) {
    const lawyer = await User.findById(form.lawyer);
    res.json({ data: lawyer });
  } else {
    res.json({ msg: `There is no lawyer assigned to this form` });
  }
});

module.exports = router;
