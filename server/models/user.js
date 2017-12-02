const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
      unique: true , //makes sure this document is not duplicate of another
      validate: {
        validator: validator.isEmail,
        message: '${VALUE} is not a valid email'
        }
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
      tokens : [{
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

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id','email']);
};

UserSchema.methods.genateAuthToken = function() {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(),access},'abc123').toString;

  user.tokens.push({access,token});

  user.save().then(() => {
    return token;
  }).then((token) => {
    return token;
  });
};

var User = mongoose.model('User',UserSchema);


//
// var newUsers = new Users({
//   email:'   alwarg1998@gmail.com  '
// });
// newUsers.save().then((doc) => {
//   console.log('saved users',doc);
// },(e) => {
//   console.log('Unable to save users');
// })

module.exports = {User};
