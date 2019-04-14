var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const User = require("../../models/User");
const userValidator = require("../../validations/userValidations");
const bcrypt = require("bcryptjs");
const Form = require("../../models/Form");
const formEnum = require("../../enums/formStatus");
const passport = require("passport");

const router = express.Router();

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//Configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//View all published companies  - Public
router.get("/companies/publishedcompanies", async (req, res) => {
  const form = await Form.find({ formStatus: formEnum.formStatus.APPROVED });
  res.json({
    data: form
  });
});

//Create user (reviewer/investor/lawyer) - Public
router.post("/createUser", async (req, res) => {
  const user = req.body;
  var isValidated = null;
  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) return res.status(400).json({ error: "Email already exists" });
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  if (req.body.nationality == "egyptian" && req.body.typeID != "national id")
    return res
      .status(400)
      .json({ error: "egyptians must have their national id as type id" });
  if (req.body.accountType == "investor")
    isValidated = userValidator.createInvestorValidation(req.body);
  else if (req.body.accountType == "lawyer")
    isValidated = userValidator.createLawyerValidation(req.body);
  else if (req.body.accountType == "reviewer")
    isValidated = userValidator.createReviewerValidation(req.body);

  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });
  user.password = hashedPassword;
  const newUser = new User(user);
  newUser
    .save()
    .then(user => res.json({ data: user }))
    .catch(err => res.json({ error: "Can not create User" }));
});

//Update user
router.put(
  "/updateUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.payload.id;
      const type = req.payload.type;
      const user = await User.find({ _id: id });
      if (!user)
        return res.status(404).send({
          error: "User does not exist"
        });
      var isValidated = null;
      if (user.nationality == "egyptian" && req.body.typeID != "national id")
        return res
          .status(400)
          .json({ error: "egyptians must have their national id as type id" });
      if (type == "investor")
        isValidated = userValidator.updateInvestorValidation(req.body);
      else if (type == "lawyer")
        isValidated = userValidator.updateLawyerValidation(req.body);
      else if (type == "reviewer")
        isValidated = userValidator.updateReviewerValidation(req.body);
      if (!isValidated) {
        return res
          .status(404)
          .send({ msg: "The data you entered is not correct" });
      }
      const dataBody = req.body;
      if (dataBody.password) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(dataBody.password, salt);
        dataBody.password = hashedPassword;
      }
      if (user.accountStatus == false) dataBody.$unset = { accountStatus: 1 };
      const updatedUser = await User.findByIdAndUpdate(id, dataBody);
      res.json({
        msg: "User updated successfully",
        data: updatedUser
      });
    } catch (error) {
      console.log(error);
    }
  }
);

//View SSC Rules - Public
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
    // @ts-ignore
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
    // @ts-ignore
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
router.get("/information/SSC", (request, response) => {
  response.send(SSC);
});

//View SPC rules - Public
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
    // @ts-ignore
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
    // @ts-ignore
    ("یظهر في حالة أن نوع الشریك: - شخص - یمثل",
    "",
    "لا",
    "نص",
    "البرید الإلكتروني")
  ],
  // @ts-ignore
  [("", "", "نعم", "نص", "عنوان الإقامة")]
];
router.get("/information/SPC", (request, response) => {
  response.send(SPC);
});

//View SSC and SPC rules - Public
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
router.get("/information/SSCandSPC", (request, response) => {
  response.send(SSCandSPC);
});

//View fees Calculation Rules - Public
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
//right//Get my info
router.get("/user", async (req, res) => {
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
module.exports = router;
