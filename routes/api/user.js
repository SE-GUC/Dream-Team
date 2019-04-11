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
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/key").secretOrKey;

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

//As a User I should be able to view published company details
var SSC = [
  ["قواعد التحقق", "اختیارات القائمة", "اجباري", "نوع الحقل", "اسم الحقل"],
  ["", "سیتم عرضهم من قاعدة البیانات", "نعم", "قائمة", "القانون المنظم"],
  ["", "سیتم عرضهم من قاعدة البیانات", "نعم", "قائمة", "شكل الشركة القانوني"],
  ["قواعد التحقق", "اختیارات القائمة", "جباري", "نوع الحقل", "اسم الحقل"],
  ["", "", "", "", "اسم الشركة"],
  ["-", "", "نعم", "نص", "اسم الشركة"],
  ["", "", "لا", "نص", "سم الشركة بالإنجلیزیة في حالة وجوده"],
  ["", "", "", "", "بیانات المركز الرئیسي وموقع ممارسة النشاط"],
  [
    "",
    "سیتم عرضهم من قاعدة البیانات",
    "نعم",
    "قائمة",
    "(المركز الرئیسي (المحافظة"
  ],
  [
    "",
    "سیتم عرضهم من قاعدة البیانات",
    "نعم",
    "قائمة",
    "(لمركز الرئیسي(المدینة"
  ],
  ["", "", "نعم", "نص", "(المركز الرئیسي(العنوان"],
  ["", "", "لا", "نص", "التلیفون"],
  ["", "", "لا", "الفاكس"],
  ["", "", "", "", "البیانات المستثمر"],
  ["", "", "", "", "البیانات المالیة"],
  ["", "سیتم عرضهم من قاعدة البیانات", "نعم", "قائمة", "عملة رأس المال"],
  [
    "لا یقل مبلغ رأس المال عن 50,000 جنیه هذه القاعدة قابلة للتغیر یسمح الحقل بـ12 رقم كحد اقصى",
    "",
    "نعم",
    "رقم",
    "رأس المال"
  ],
  ["", "", "", "", "المستثمر"],
  ["", "", "نعم", "نص", "الاسم"],
  ["", "شخص", "", "قائمة", "نوع المستثمر"][
    ("یظهر في حالة أن نوع المستثمر:- شخص",
    "یتم عرضها من قاعدة البیانات",
    "یتم عرضها من قاعدة البیانات",
    "",
    "قائمة",
    "الجنس")
  ],
  [
    "یظهر في كل الحالات",
    "یتم عرضها من قاعدة البیانات",
    "نعم",
    "قائمة",
    "الجنسیة"
  ],
  [
    "في حالة ان المستثمر مصري یجب أن یكون نوع اثبات الشخصیة: رقم قومي یظهر في حالة أن نوع المستثمر:- شخص",
    "یتم عرضها من قاعدة البیانات",
    "نعم",
    "قائمة",
    "نوع اثبات الشخصیة"
  ],
  [
    "في حالة أن نوع اثبات الشخصیة رقم قومي، یجب التأكد من صحة الرقم 14 رقم یظهر في حالة أن نوع المستثمر: - شخص",
    "",
    "نعم",
    "نص",
    "رقم اثبات الشخصیة"
  ],
  [
    "یتم ادخاله تلقائیا في حالة أن نوع اثبات الشخصیة رقم قومي. یجب ألا یقل السن عن21 سنة یظهر في حالة أن نوع المستثمر:- شخص",
    "",
    "نعم",
    "تاریخ",
    "تاریخ المیلاد"
  ],
  ["یظهر في كل الحالات", "", "نعم", "نص", "عنوان الإقامة"],
  ["یظهر في كل الحالات", "-", "لا", "نص", "التلیفون"],
  ["یظهر في كل الحالات", "", "لا", "نص", "الفاكس"][
    ("یظهر في حالة أن نوع الشریك: - شخص - یمثل",
    "",
    "لا",
    "نص",
    "البرید الإلكتروني")
  ],
  ["", "", "", "", "(مجلس المدیرین (جدول"],
  ["", "", "نعم", "نص", "الاسم"],
  ["", "شخص", "نعم", "قائمة", "نوع المستثمر"],
  ["", "یتم عرضها من قاعدة البیانات", "نعم", "قائمة", "الجنس"],
  ["", "یتم عرضها من قاعدة البیانات", "نعم", "قائمة", "الجنسیة"],
  [
    " في حالة ان المستثمر مصري یجب أن یكون نوع اثبات الشخصیة: رقم قومي",
    "یتم عرضها من قاعدة البیانات",
    "نعم",
    "قائمة",
    "نوع اثبات الشخصیة"
  ],
  [
    "في حالة أن نوع اثبات الشخصیة رقم قومي، رقم اثبات الشخصیة نص نعم یجب التأكد من صحة الرقم 14 رقم",
    "",
    "نعم",
    "نص",
    "رقم اثبات الشخصیة"
  ],
  [
    "یتم ادخاله تلقائیا في حالة أن نوع اثبات لشخصیة رقم قومي. یجب ألا یقل السن عن21 سنة",
    "",
    "نعم",
    "تاریخ",
    "تاریخ المیلاد"
  ],
  ["", "", "نعم", "نص", "عنوان الإقامة"],
  [
    "",
    "یتم عرضها من قاعدة البیانات ",
    "نعم",
    "قائمة",
    "صفة الشخص في مجلس المدیرین"
  ]
];
//$("#DealerDiv").html("<h1>"+ SSC + "</h1>");
var SPC = [
  ["قواعد التحقق", "اختیارات القائمة", "اجباري", "نوع الحقل", "اسم الحقل"],
  ["", "سیتم عرضهم من قاعدة البیانات", "نعم", "قائمة", "القانون المنظم"],
  ["", "سیتم عرضهم من قاعدة البیانات", "نعم", "قائمة", "شكل الشركة القانوني"],
  ["قواعد التحقق", "اختیارات القائمة", "جباري", "نوع الحقل", "اسم الحقل"],
  ["", "", "", "", "اسم المنشأة"],
  ["-", "", "نعم", "نص", "اسم المنشأة"],
  ["", "", "لا", "نص", "سم الشركة بالإنجلیزیة في حالة وجوده"],
  ["", "", "", "", "بیانات المركز الرئیسي وموقع ممارسة النشاط"],
  [
    "",
    "سیتم عرضهم من قاعدة البیانات",
    "نعم",
    "قائمة",
    "(المركز الرئیسي (المحافظة"
  ],
  [
    "",
    "سیتم عرضهم من قاعدة البیانات",
    "نعم",
    "قائمة",
    "(لمركز الرئیسي(المدینة"
  ],
  ["", "", "نعم", "نص", "(المركز الرئیسي(العنوان"],
  ["", "", "لا", "نص", "التلیفون"],
  ["", "", "لا", "الفاكس"],
  ["", "", "", "", "البیانات المستثمر"],
  ["", "", "", "", "البیانات المالیة"],
  ["", "سیتم عرضهم من قاعدة البیانات", "نعم", "قائمة", "عملة رأس المال"],
  [
    "لا یقل مبلغ رأس المال عن 50,000 جنیه هذه القاعدة قابلة للتغیر یسمح الحقل بـ12 رقم كحد اقصى",
    "",
    "نعم",
    "رقم",
    "رأس المال"
  ],
  ["", "", "", "", "المستثمر"],
  ["", "", "نعم", "نص", "الاسم"],
  ["", "شخص", "", "قائمة", "نوع المستثمر"][
    ("یظهر في حالة أن نوع المستثمر:- شخص",
    "یتم عرضها من قاعدة البیانات",
    "یتم عرضها من قاعدة البیانات",
    "",
    "قائمة",
    "الجنس")
  ],
  [
    "یظهر في كل الحالات",
    "یتم عرضها من قاعدة البیانات",
    "نعم",
    "قائمة",
    "الجنسیة"
  ],
  [
    "في حالة ان المستثمر مصري یجب أن یكون نوع اثبات الشخصیة: رقم قومي یظهر في حالة أن نوع المستثمر:- شخص",
    "یتم عرضها من قاعدة البیانات",
    "نعم",
    "قائمة",
    "نوع اثبات الشخصیة"
  ],
  [
    "في حالة أن نوع اثبات الشخصیة رقم قومي، یجب التأكد من صحة الرقم 14 رقم یظهر في حالة أن نوع المستثمر: - شخص",
    "",
    "نعم",
    "نص",
    "رقم اثبات الشخصیة"
  ],
  [
    "یتم ادخاله تلقائیا في حالة أن نوع اثبات الشخصیة رقم قومي. یجب ألا یقل السن عن21 سنة یظهر في حالة أن نوع المستثمر:- شخص",
    "",
    "نعم",
    "تاریخ",
    "تاریخ المیلاد"
  ],
  ["یظهر في كل الحالات", "", "نعم", "نص", "عنوان الإقامة"],
  ["یظهر في كل الحالات", "-", "لا", "نص", "التلیفون"],
  ["یظهر في كل الحالات", "", "لا", "نص", "الفاكس"][
    ("یظهر في حالة أن نوع الشریك: - شخص - یمثل",
    "",
    "لا",
    "نص",
    "البرید الإلكتروني")
  ],
  [("", "", "نعم", "نص", "عنوان الإقامة")]
];
//$("#DealerDiv").html("<h2>"+ SPC + "</h2>");

var SSCandSPC = [
  ["1", "SSC Minimum Capital Limit is 50,000 EGP"],
  [
    "2",
    "SSC Must have at least One Egyptian Manager, In case Founder/Investor is from Foreign Country"
  ],
  [
    "3",
    "SPC Minimum Capital Limit will be 100,000 EGP in case of Foreign Investor Only,Otherwise there is No Capital Limit"
  ],
  ["4", "SSC and SPC can Only have One Investor as their Founder"],
  ["5", "SPC doesn't have any Managers"],
  [
    "6",
    "Both SPC and SSC must have Unique Company Name (Company Names can't be Repeated)"
  ],
  ["7", "SSC can't have the same investor founder to Multiple SSC Companies"],
  ["8", "Each Request must have a Unique auto generated Case ID"],
  [
    "9",
    "A Contract will be Generated for SSC Companies after Lawyer Fills Form. The generated form is in pdf format and this Is the file to be sent to external entities"
  ],
  [
    "10",
    "A Decision will be Generated for SPC Companies after Lawyer Fills Form.The generated form is in pdf format and this Is the file to be sent to external entities"
  ],
  [
    "11",
    "The Lawyer has the option to Regenerate Documents after editing anything in the Form"
  ],
  [
    "12",
    "Fees will be calculated at the Lawyer's Step and Lawyer can Recalculate Fees afterediting the Form"
  ],
  [
    "13",
    "Each Company after the Approval of the Reviewer will have an Electronic Journal(Same as Contract/Decision) and will be displayed in a Separate View at the Portal"
  ],
  [
    "14",
    "The UI of the application forms has to be rendered by a given JSON Object that shows the required fields and their types"
  ],
  ["15", "The System should be available in Arabic and English"]
];
//$("#DealerDiv").html("<h4>"+ SSCandSPC + "</h4>");

router.get("/information/SSC", (request, response) => {
  response.send(SSC);
});

router.get("/information/SPC", (request, response) => {
  response.send(SPC);
});

router.get("/information/SSCandSPC", (request, response) => {
  response.send(SSCandSPC);
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
