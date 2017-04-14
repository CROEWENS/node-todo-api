const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const _ = require("lodash");

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    minLength: 1,
    trim: true,
    unique: true,
    validate: {
      // vaildator: (value) => {
      //   return validator.isEmail(value);
      // },
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email.'
    }  
  },
  password: {
    type: String,
    require: true,
    minLength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

//this gets called whenever a mongoose model is converted to json
UserSchema.methods.toJSON = function() {
  // waar deze functie gecalled word is altijd user.toJson -> vandaar de this
  var user = this;
  // taking mongoose variable (user), converting it to a regular objecjt where only the properties available on the document exist.
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
}

// arrow function does not bind user function
UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  // return is hier heeeel belangerijk!!
  return user.save().then(() => {
    return token;
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};