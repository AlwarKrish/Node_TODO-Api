var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //st up to use promises
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose: mongoose
};
