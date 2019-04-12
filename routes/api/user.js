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
  const users = await user.find();
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
  if (req.body.nationality == "egyptian" && req.body.typeID != "national id")
    return res
      .status(400)
      .json({ error: "egyptians must have their national id as type id" });
  if (req.body.accountType === "investor")
    var isValidated = userValidator.createInvestorValidation(req.body);
  else if (req.body.accountType === "lawyer")
    var isValidated = userValidator.createLawyerValidation(req.body);
  else if (req.body.accountType === "reviewer")
    var isValidated = userValidator.createReviewerValidation(req.body);
  else if (req.body.accountType === "admin")
    var isValidated = userValidator.createAdminValidation(req.body);
  isValidated = true;

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
    if (law.nationality == "egyptian" && req.body.typeID != "national id")
      return res
        .status(400)
        .json({ error: "egyptians must have their national id as type id" });
    if (req.body.accountType === "investor")
      var isValidated = userValidator.updateInvestorValidation(req.body);
    else if (req.body.accountType === "lawyer")
      var isValidated = userValidator.updateLawyerValidation(req.body);
    else if (req.body.accountType === "reviewer")
      var isValidated = userValidator.updateReviewerValidation(req.body);
    else if (req.body.accountType === "admin")
      var isValidated = userValidator.updateAdminValidation(req.body);
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
  var fs = require("fs");
  fs.readFile("rules/companyRule.txt", "utf8", function(err, data) {
    if (err) console.log(err);
    response.json({ data });
  });
});

//As a User I should be able to view fees Calculation Rules
var feesCalculationRules = [
  ["Entity", "Law 159", "Law 72"],
  [
    "GAFI",
    " واحد في الألف من رأس المال الحد الأدنى: 100 الحد الأقصى: 1000",
    "لا یوجد"
  ],
  [
    "الهیئة العامة للاستثمار والمناطق الحرة إیداعات واردة من جهات تتعامل مع البنك المركزي",
    "",
    ""
  ],
  [
    "Notary Public مصلحة الشهر العقاري والتوثیق إیداعات واردة من جهات تتعامل مع البنك المركزي",
    "ربع في المائة من رأس المال الحد الأدنى: 10 الحد الأقصى: 1000",
    "لا یوجد"
  ],
  [
    "Commercial جهاز تنمیة التجارة الداخلیة إیداعات واردة من جهات تتعامل مع البنك المركزي",
    "56 جم مقسم إلى (51 إیرادات + 5 دائنون)",
    "610 جم مقسم إلى (100 إیرادات + 6دائنون)"
  ]
];
router.get("/information/feesCalculationRules", (request, response) => {
  response.send(feesCalculationRules);
});

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
