var  mongoose = require('mongoose');

var Todo = mongoose.model('todos', {
  text: {
      type: String,
      required: true,
      minlength: 1,  //minimumlength of the string
      trim: true
  },
  completed: {
      type: Boolean,
      default: true
  },
  completedAt: {
      type: Number,
      default: null
  }
});
//
// var newTodo = new Todo({
//   text: '      dinner at bay  ',
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo',doc);
// },(e) => {
//   console.log('Saved Todo',doc);
// });

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo',doc);
//
// },(e) => {
//   console.console.log('Unable to save the todo');
// })

module.exports = {Todo};
