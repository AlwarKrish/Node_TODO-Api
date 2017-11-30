const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findByIdAndRemove('5a1f944bbdbe37a6ab6c017c').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({_id : '5a1f957dbdbe37a6ab6c01e70'}).then((todo) => {
    console.log(todo);
});
