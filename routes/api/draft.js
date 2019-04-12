const formEnum = require('../../enums/formStatus');
const typesEnum = require('../../enums/accountType');

//Update Form - Investor, Lawyer
router.put('/updateForm/:formid', async (req, res) => {
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

//Create Form - Investor, Lawyer
router.post('/', async (req, res) => {
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

//As A Lawyer I should be able to fill in a Form
router.post('/:id/:INV', async (req, res) => {
  try {
    const lawyerId = req.params.id;
    const INV = req.params.INV;
    const company = await Form.findOne({ companyName: req.body.companyName });
    if (company)
      return res.status(400).json({ error: 'Company Name already exists' });
    const invssc = await Form.findOne({
      investor: req.body.investor,
      companyType: 'SSC'
    });
    if (invssc)
      return res.status(400).json({
        error: 'This investor cannot Establish multiple SSC Companies'
      });
    if (
      req.body.board == undefined &&
      req.body.board == null &&
      req.body.companyType === 'SSC' &&
      !req.body.board.findOne(nationality == 'egyptian')
    )
      return res.status(400).json({
        error:
          'investors establishing SSC must have at least one egyptian manager'
      });
    if (
      (req.body.board !== undefined || req.body.board !== null) &&
      req.companyType === 'SPC'
    )
      return res
        .status(400)
        .json({ error: 'investors establishing SPC cannot have board' });
    if (
      req.body.nationality === 'egyptian' &&
      req.body.typeId !== 'national id'
    )
      return res
        .status(400)
        .json({ error: 'egyptians must have their national id as type id' });
    var isValidated = formValidator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const reqBody = req.body;
    body: Object.assign(reqBody, {
      investor: INV,
      lawyer: lawyerId,
      lawyerDecision: 1,
      formStatus: formEnum.formStatus.REVIEWER
    });
    const newForm = await Form.create(req.body);
    res.json({ msg: 'Form was created successfully ', data: newForm });
  } catch (error) {
    console.log(error);
  }
});

//[OLD]UPDATE FORM BY ID- probably useless
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    const company = await Form.findOne({ companyName: req.body.companyName });
    if (company)
      return res.status(400).json({ error: 'Company Name already exists' });
    if (
      req.body.board !== undefined &&
      req.body.board !== null &&
      req.body.companyType !== undefined &&
      req.body.companyType === 'SPC'
    )
      return res
        .status(400)
        .json({ error: 'investors establishing SPC cannot have board' });
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    var isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedForm = await Form.findByIdAndUpdate(id, req.body);
    res.json({ msg: 'Form updated successfully' });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//Track forms of specific investor - Lawyer, Reviewer
router.get('/formStatus/:loggedintype/:id', async (req, res) => {
  const loggedintype = req.params.loggedintype;
  const id = req.params.id;

  if (loggedintype === typesEnum.accountTypes.INVESTOR) {
    var forms = await Form.find({ investor: id });
    res.json({
      data: forms
    });
  } else if (
    loggedintype === typesEnum.accountTypes.REVIEWER ||
    loggedintype === typesEnum.accountTypes.LAWYER ||
    loggedintype === typesEnum.accountTypes.ADMIN
  ) {
    const forms = await Form.find();
    res.json({
      data: forms
    });
  } else
    return res.status(404).send({
      error: 'you are not allowed to perform the requested operation'
    });
});

//User Story 6.7 sprint 3, Calculating Fees calculation
TODO: router.put('/feesCalculation/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (form.reviewerDecision === 1) {
      if (form.entityType == 'GAFI' && form.regulatedLaw == 'LAW159') {
        var fees = form.financialInfo.capital;
        var actualFees = fees / 1000;
        if (actualFees > 1000) actualFees = 1000;
        if (actualFees < 100) actualFees = 100;
        console.log(actualFees);
      }
      if (form.entityType == 'NOTARYPUBLIC' && form.regulatedLaw == 'LAW159') {
        var fees = form.financialInfo.capital;
        var actualFees = fees * 0.0025;
        console.log(actualFees);
        //var actualFees=Math.floor(fees/1000)
        if (actualFees > 1000) actualFees = 1000;
        if (actualFees < 10) actualFees = 10;
        console.log(actualFees);
      }
      if (
        form.entityType == 'COMMERCIALREGISTER' &&
        form.regulatedLaw == 'LAW159'
      ) {
        // console.log("ahhahahah")
        var actualFees = 56;
        console.log(actualFees);
      }
      if (
        form.entityType == 'COMMERCIALREGISTER' &&
        form.regulatedLaw == 'LAW72'
      ) {
        var actualFees = 610;
      }
    } else {
      actualFees = 0;
    }
    // console.log(actualFees)
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    var isValidated = formValidator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedForm = await Form.findByIdAndUpdate(id, {
      feesCalculation: actualFees
    });
    console.log(actualFees);
    res.json({ msg: 'Form updated successfully' });
  } catch (error) {
    console.log(error);
  }
});

//Calculating Fees calculation
TODO: router.put('/feesCalculation/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (form.reviewerDecision === 1) {
      console.log('aya');
      if (form.entityType == 'GAFI' && form.regulatedLaw == 'LAW159') {
        var fees = form.financialInfo.capital;
        var actualFees = fees / 1000;
        if (actualFees > 1000) actualFees = 1000;
        if (actualFees < 100) actualFees = 100;
        console.log(actualFees);
      }
      if (form.entityType == 'NOTARYPUBLIC' && form.regulatedLaw == 'LAW159') {
        var fees = form.financialInfo.capital;
        var actualFees = fees * 0.0025;
        console.log(actualFees);
        //var actualFees=Math.floor(fees/1000)
        if (actualFees > 1000) actualFees = 1000;
        if (actualFees < 10) actualFees = 10;
        console.log(actualFees);
      }
      if (
        form.entityType == 'COMMERCIALREGISTER' &&
        form.regulatedLaw == 'LAW159'
      ) {
        // console.log("ahhahahah")
        var actualFees = 56;
        console.log(actualFees);
      }
      if (
        form.entityType == 'COMMERCIALREGISTER' &&
        form.regulatedLaw == 'LAW72'
      ) {
        var actualFees = 610;
      }
    } else {
      actualFees = 0;
    }
    // console.log(actualFees)
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    var isValidated = formValidator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedForm = await Form.findByIdAndUpdate(id, {
      feesCalculation: actualFees
    });
    console.log(actualFees);
    res.json({ msg: 'Form updated successfully' });
  } catch (error) {
    console.log(error);
  }
});

//FEES CALCULATION
TODO: router.put('/feesCalculation/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (form.reviewerDecision === 1) {
      if (form.entityType == 'GAFI' && form.regulatedLaw == 'LAW159') {
        var fees = form.financialInfo.capital;
        var actualFees = fees / 1000;
        if (actualFees > 1000) actualFees = 1000;
        if (actualFees < 100) actualFees = 100;
        console.log(actualFees);
      }
      if (form.entityType == 'NOTARYPUBLIC' && form.regulatedLaw == 'LAW159') {
        var fees = form.financialInfo.capital;
        var actualFees = fees * 0.0025;
        console.log(actualFees);
        //var actualFees=Math.floor(fees/1000)
        if (actualFees > 1000) actualFees = 1000;
        if (actualFees < 10) actualFees = 10;
        console.log(actualFees);
      }
      if (
        form.entityType == 'COMMERCIALREGISTER' &&
        form.regulatedLaw == 'LAW159'
      ) {
        // console.log("ahhahahah")
        var actualFees = 56;
        console.log(actualFees);
      }
      if (
        form.entityType == 'COMMERCIALREGISTER' &&
        form.regulatedLaw == 'LAW72'
      ) {
        var actualFees = 610;
      }
    } else {
      actualFees = 0;
    }
    // console.log(actualFees)
    if (!form) return res.status(404).send({ error: 'Form does not exist' });
    var isValidated = formValidator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedForm = await Form.findByIdAndUpdate(id, {
      feesCalculation: actualFees
    });
    console.log(actualFees);
    res.json({ msg: 'Form updated successfully' });
  } catch (error) {
    console.log(error);
  }
});

//Get Laws
router.get('/regulatedLaw', async (req, res) => {
  const law = regulatedLaw.regulatedLaw;
  res.json({ data: law });
});
