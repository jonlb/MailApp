/**
* User.js
*
* @description :: This model will be used to manage users for the applications (not those signing up for the email list).
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    members: {
      collection: 'member',
      via: 'owner'
    }
  }
};

