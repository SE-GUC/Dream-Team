const Enjoi = require('enjoi');
var Joi = require('joi');

const fn = {
  validateForm: (data, formType, res) => {
    console.log(formType[0]);
    const validations = Enjoi.schema({
      type: 'object',
      properties: formType[0].formSchema,
      required: formType[0].require
    });
    console.log(formType[0].require);
    Joi.validate(data, validations, (error, value) => {
      if (error) res.status(404).send({ err: error });
    });
  }
};
module.exports = fn;
