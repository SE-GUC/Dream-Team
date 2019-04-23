const Joi = require('joi');
const Enjoi = require('enjoi');

const schema = Enjoi.schema({
  type: 'object',
  properties: {
    firstName: {
      description: 'Firsts name.',
      type: 'string'
    },

    lastName: {
      description: 'Last name.',
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 1
    },
    email: {
      description: 'email',
      type: 'string',
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ///@/[a-z]+/.com/i,
    }
  }
});

Joi.validate(
  { firstName: 'John', lastName: 'Doe', age: 45, email: 'yomna@gmail.com' },
  schema,
  function(error, value) {
    error && console.log(error);
  }
);
