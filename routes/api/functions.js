const Enjoi = require('enjoi');
var Joi = require('joi');

const fn = {
  validateForm: (data, formType, res) => {
    const test = JSON.stringify(formType);
    formType = JSON.parse(test);
    const validations = Enjoi.schema({
      type: 'object',
      properties: formType[0].formSchema,
      required: formType.required
    });
    Joi.validate(data, validations, (error, value) => {
      if (error) res.status(404).send({ err: error });
    });
  }
};
module.exports = fn;
