var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
  email: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
  }
});
//
// var newUsers = new Users({
//   email:'   alwarg1998@gmail.com  '
// });
// newUsers.save().then((doc) => {
//   console.log('saved users',doc);
// },(e) => {
//   console.log('Unable to save users');
// })

module.exports = {Users};
