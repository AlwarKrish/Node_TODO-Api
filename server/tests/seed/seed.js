const {Todo} = require('./../../models/todo');
const {ObjectId} = require('mongodb');
const{User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
  _id: new ObjectId(),
  email: 'alwar@gmail.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId,access:'auth'},process.env.JWT_SECRET).toString()
  }]
},{
  _id: new ObjectId(),
  email: 'alwarg@gmail.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId,access:'auth'},process.env.JWT_SECRET).toString()
  }]
}]

const todos = [{
  _id: new ObjectId(),
  text: 'first of all',
  _creator: userOneId
},{
  _id: new ObjectId,
  text: 'second of all',
  completed : true,
  completedAt: 30112017,
  _creator: userTwoId
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
