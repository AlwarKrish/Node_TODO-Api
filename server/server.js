var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};










// var express = require('express');
// var bodyParser = require('body-parser');
//
//
// var {mongoose} = require('./db/mongoose');
// var {Todo} = require('./models/todo');
// var {user} = require('./models/users');
//
// var app = express();
//
// app.use(bodyParser.json());
//
// app.post('/todos',(req,res) => {
//   var todo = new Todo ({
//     text: req.body.text
//   });
//   //console.log(req.body);
//   todo.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//       res.status(400).send(e);
//   });
// });
//
// app.get('/todos' ,(req,res) => {
//   Todo.find().then(() => {
//       res.send({todos});
//   }, (e) => {
//         res.status(400).send(e);
//   });
// });
//
// app.listen(3000, () => {
//   console.log('Started on port 3000');
// });
//
// module.exports = {app};
