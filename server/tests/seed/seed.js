const {Todo} = require('./../../models/todo');
const {ObjectId} = require('mongodb');
const{User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
  _id: new ObjectId(),
  email: 'alwar@gmail.com',
  password: 'userOnepass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId,access:'auth'},'abc123').toString()
  }]
},{
  _id: new ObjectId(),
  email: 'alwarg@gmail.com',
  password: 'userTwopass'
}]

const todos = [{
  _id: new ObjectId(),
  text: 'first of all'
},{
  _id: new ObjectId,
  text: 'second of all',
  completed : true,
  completedAt: 30112017
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne,userTwo])
  }).then(() => done());
};

module.exports = {todos,populateTodos,users,populateUsers};
