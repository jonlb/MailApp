/**
* Member.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'string',
      email: true,
      required: true
    },
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      enum: ['pending','validated'],
      required: true
    },
    clicked: 'boolean',
    opened: 'boolean',
    validationCode: 'string',
    owner: {
      model: 'user',
      required: true
    }
  }
};

