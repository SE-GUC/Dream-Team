var board = require("../../models/Boardofdirectors");

var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const userValidator = require("../../validations/userValidations");
const formValidator = require("../../validations/formValidations");
const bcrypt = require("bcryptjs");
const Form = require("../../models/Form");
const typesEnum = require("../../enums/accountType");
const formEnum = require("../../enums/formStatus");
const entity = require("../../enums/entityType");
const formType = require("../../enums/formType");
const regulatedLaw = require("../../enums/regulatedLaw");
var path = require("path");
var fs = require("fs");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//view all users

router.get("/getUsers", async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
});

// get user by id
router.get("/user/getUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
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

// create user (reviewer/investor/admin/lawyer)
router.post("/createUser", async (req, res) => {
  const {
    name,
    accountType,
    gender,
    nationality,
    typeID,
    numberID,
    dateOfBirth,
    address,
    phoneNumber,
    faxNumber,
    accountStatus,
    email,
    password,
    investorType,
    capital,
    capitalCurrency
  } = req.body;
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ error: "Email already exists" });

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  var isValidated = null;
  if (req.body.nationality == "egyptian" && req.body.typeID != "national id")
    return res
      .status(400)
      .json({ error: "egyptians must have their national id as type id" });
  if (req.body.accountType === "investor")
    isValidated = userValidator.createInvestorValidation(req.body);
  else if (req.body.accountType === "lawyer")
    isValidated = userValidator.createLawyerValidation(req.body);
  else if (req.body.accountType === "reviewer")
    isValidated = userValidator.createReviewerValidation(req.body);
  else if (req.body.accountType === "admin")
    isValidated = userValidator.createAdminValidation(req.body);
  // isValidated = true;

  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });
  const newUser = new User({
    name,
    accountType,
    gender,
    nationality,
    typeID,
    numberID,
    dateOfBirth,
    address,
    phoneNumber,
    faxNumber,
    accountStatus,
    email,
    password: hashedPassword,
    investorType,
    capital,
    capitalCurrency
  });
  newUser
    .save()
    .then(user => res.json({ data: user }))
    .catch(err => res.json({ error: "Can not create User" }));
});

// UPDATE USER INFO by id
//has to check the id is current user id
router.put("/updateUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const law = await User.find({
      id
    });
    if (!law)
      return res.status(404).send({
        error: "Admin does not exist"
      });
    var isValidated = null;
    if (law.nationality == "egyptian" && req.body.typeID != "national id")
      return res
        .status(400)
        .json({ error: "egyptians must have their national id as type id" });
    if (req.body.accountType === "investor")
      isValidated = userValidator.updateInvestorValidation(req.body);
    else if (req.body.accountType === "lawyer")
      isValidated = userValidator.updateLawyerValidation(req.body);
    else if (req.body.accountType === "reviewer")
      isValidated = userValidator.updateReviewerValidation(req.body);
    else if (req.body.accountType === "admin")
      isValidated = userValidator.updateAdminValidation(req.body);
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    res.json({
      msg: "User updated successfully"
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
//get companies rules
router.get("/companyRules", (request, response) => {
  const a = fs.readFile("rules/companyRule.txt", "utf8", function(err, data) {
    response.json({ data: JSON.parse(data) });
  });
});

//As a User I should be able to view fees Calculation Rules
router.get("/CalculationRules", function(request, response) {
  const a = fs.readFile("rules/calculationRule.txt", "utf8", function(
    err,
    data
  ) {
    response.json({ data: JSON.parse(data) });
  });
});
// var html = fs.readFileSync("rules/calculationRule.html", "utf8");
//   response.sendfile(path.join(__dirname + "calculationRule.html"));
//   fs.readFile("rules/calculationRule.html", function(req, html) {
//     if (err) console.log(err);
//     response.json({ html });
//   });

//As a User I should be able to view all published companies
router.get("/companies/publishedcompanies", async (req, res) => {
  const form = await Form.find({ formStatus: { $nin: [false] } });
  res.json({
    data: form
  });
});

//Search in all published Companies #1.1 sprint 3
router.get("/search", async (req, res) => {
  const search = await Form.find(req.body);
  res.json({
    data: search
  });
});

module.exports = router;
