var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_Wt39GzrMj3UYvfLVB4Supgbn00FRuxflb1");

router.use(require("body-parser").text());

const formValidator = require("../../validations/formValidations");
const User = require("../../models/User");
const Form = require("../../models/Form");
const typesEnum = require("../../enums/accountType");
const formEnum = require("../../enums/formStatus");
const userEnum = require("../../enums/accountType");
const validations = require("./functions");
const FormTypes = require("../../models/FormTypes");
// const stripe = require("stripe");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Configuration option that tells the parser to use the classic encoding
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: req.body.amount,
      currency: req.body.currency,
      description: req.body.description,
      source: req.body.source
    });

    res.json({ status });
  } catch (err) {
    res.json({
      msg: err.message
    });

    res.status(500).end();
  }
});

//As an investor i can pay online
router.put("/payment", async (req, res) => {
  var stripe = new (require("stripe"))(
    "sk_test_Wt39GzrMj3UYvfLVB4Supgbn00FRuxflb1"
  );

  stripe.customers
    .create({
      email: req.body.email,
      source: req.body.source
    })
    .then(customer => {
      return stripe.customers.createSource(customer.id, {
        source: req.body.source
      });
    })
    .then(source => {
      return stripe.charges.create({
        amount: req.body.amount,
        currency: req.body.currency,
        description: req.body.description,
        source: req.body
        // customer: source.customer
      });
    })
    .then(charge => {
      // New charge created on a new customer
    })
    .catch(err => {
      res.json({
        msg: err.message
      });
    });

  // stripe.customers
  //   .create(
  //     {
  //       description: "Customer for jenny.rosen@example.com",
  //       source: "tok_mastercard" // obtained with Stripe.js
  //     },
  //     function(err, customer) {
  //       // asynchronously called
  //     }
  //   )
  //   .then(() => {
  //     return stripe.charges.create({
  //       amount: req.body,
  //       currency: req.body
  //       customer: req.body
  //     });
  //   });

  // Create a payment from a test card token.
  // stripe.customers.create({
  //     email: "foo-customer@example.com"
  //   })
  //   .then(customer => {
  //     return stripe.customers.createSource(customer.id, {
  //       source: "tok_visa"
  //     });
  //   })
  //   .then(source => {
  //     return stripe.charge.create({
  //       amount: req.body,
  //       currency: req.body,
  //       customer: req.body
  //     });
  //   })
  //   .then(charge => {
  //     console.log(charge);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});

//View my rejected forms -Investor
router.get("/rejectedForms", async (req, res) => {
  try {
    const id = req.payload.id;
    const form = await Form.find({
      formStatus: formEnum.formStatus.investor,
      investor: id
    });
    if (!form)
      return res.status(404).send({
        error: "This form does not exist"
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
router.post("/createForm", async (req, res) => {
  try {
    var investorID = "";
    var lawyerID = "";
    if (req.payload.type == typesEnum.accountTypes.LAWYER) {
      lawyerID = req.payload.id;
      investorID = req.body.investor;
    } else investorID = req.payload.id;
    if (req.body.companyType == "SPC" || req.body.companyType == "SSC") {
      if (req.body.companyName) {
        const company = await Form.findOne({
          companyName: req.body.companyName
        });
        if (company)
          return res.status(400).json({ error: "Company Name already exists" });
      }
    }
    //SSC Conditions
    if (req.body.companyName == "SSC") {
      const invssc = await Form.findOne({
        investor: investorID,
        companyType: "SSC"
      });
      if (invssc)
        return res.status(400).json({
          error: "The investor cannot Establish multiple SSC Companies"
        });
      const inv = await User.findById(investorID);
      var flag = false;
      if (inv.nationality != "Egyptian") {
        const b = req.body.board;
        for (var i = 0; i < b.length; i++) {
          if (!(b[i].nationality == "egyptian")) {
            flag = true;
          }
        }
      }
      if (flag)
        return res.status(400).json({
          error:
            "investors establishing SSC must have at least one egyptian manager"
        });
    }
    //SPC Conditions
    if (req.body.board && req.body.companyType == "SPC") {
      console.log(req.body.board);
      return res
        .status(400)
        .json({ error: "investors establishing SPC cannot have board" });
    }
    if (req.body.companyType == "SPC" || req.body.companyType == "SSC") {
      var isValidated = formValidator.createValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
    }
    if (req.body.companyType != "SPC" && req.body.companyType != "SSC") {
      console.log(req.body.companyType);
      const formtype = await FormTypes.find({ formType: req.body.companyType });
      const updated = req.body;
      delete updated.companyType;
      validations.validateForm(updated, formtype, res);
    }
    var formBody = req.body;
    if (req.payload.type == "lawyer") {
      (formBody.createdByLawyer = true),
        (formBody.lawyer = lawyerID),
        (formBody.lawyerDecision = true),
        (formBody.formStatus = formEnum.formStatus.REVIEWER);
    } else {
      formBody.formStatus = formEnum.formStatus.LAWYER;
      formBody.investor = investorID;
    }
    const newForm = await Form.create(formBody);
    res.json({ msg: "Form was created successfully ", data: newForm });
  } catch (error) {
    console.log(error);
  }
});

//Update Form - Investor, Lawyer
router.put("/form/:formId", async (req, res) => {
  try {
    const userID = req.payload.id;
    const formId = req.params.formId;
    const form = await Form.findById(formId);
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    //AUTHORIZATION
    if (
      req.payload.type == userEnum.accountTypes.LAWYER &&
      (form.createdByLawyer == false ||
        form.lawyer != userID ||
        form.formStatus != formEnum.formStatus.LAWYER) &&
      (req.payload.type == userEnum.accountTypes.INVESTOR &&
        (form.investor != userID ||
          form.formStatus != formEnum.formStatus.INVESTOR))
    ) {
      return res.status(404).send({ error: "You have no authorization" });
    }
    if (req.body.companyName) {
      const company = await Form.findOne({
        companyName: req.body.companyName
      });
      if (company)
        return res.status(400).json({ error: "Company Name already exists" });
    }
    const inv = await User.findById(form.investor);
    var flag = true;
    if (inv.nationality != "Egyptian") {
      const b = req.body.board;
      flag = false;
      for (var i = 0; i < b.length; i++) {
        if (b[i].nationality == "Egyptian") {
          flag = true;
        }
      }
    }
    if (!flag)
      return res.status(400).json({
        error:
          "investors establishing SSC must have at least one egyptian manager"
      });
    // }

    //SPC Conditions
    if (req.body.board && req.body.companyType == "SPC") {
      return res
        .status(400)
        .json({ error: "investors establishing SPC cannot have board" });
    }

    //Validations and Insertion
    var isValidated = formValidator.updateValidation(req.body);
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
    await Form.findByIdAndUpdate(formId, formBody);
    res.json({ msg: "Form updated successfully" });
  } catch (e) {
    console.log(e);
  }
});

//As an investor , I should be notified with the amount and the due date (fees calculation)
router.get("/notifyAmountAndDueDate", async (req, res) => {
  const type = req.params.type;

  const id = req.payload.id;
  const user = await User.findById(id);
  if (!user)
    return res.status(404).send({
      error: "This User does not exist"
    });

  const form = await Form.findOne(
    { investor: id },
    { dateOfPayment: 1, amountOfPayment: 1, _id: 0 }
  );
  res.json({ data: form });
});

//Delete a form -Investor
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    const investorID = req.payload.id;
    if (investorID != form.investor)
      return res
        .status(400)
        .json({ error: "You are not authorized to deal with this form" });
    if (form.formStatus != formEnum.formStatus.INVESTOR)
      return res
        .status(400)
        .json({ error: "This form is already in progress" });
    const deletedForm = await Form.findByIdAndRemove(id);
    res.json({ msg: "Form was deleted successfully", data: deletedForm });
  } catch (error) {
    console.log(error);
  }
});

//right//Track all my request/case status-Investor
router.get("/trackRequest", async (req, res) => {
  try {
    const id = req.payload.id;
    const form = await Form.find({ investor: id });
    if (!form)
      return res.status(404).send({
        error: "This form does not exist"
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
router.get("/pending", async (req, res) => {
  const id = req.payload.id;
  const forms = await Form.find({
    investor: id,
    formStatus: { $ne: formEnum.formStatus.APPROVED }
  });
  res.json({
    data: forms
  });
});

//View my running companies-Investor
router.get("/running", async (req, res) => {
  const id = req.payload.id;
  const forms = await Form.find({
    investor: id,
    formStatus: formEnum.formStatus.APPROVED
  });
  res.json({
    data: forms
  });
});

module.exports = router;
