const fn = {
  formValidate: async req => {
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
  }
};

module.exports = fn;
