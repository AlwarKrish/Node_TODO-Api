//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //No need to create a database before start using just start using it
    if(err){
      return console.log('Unable to connect to the database');
    }
    console.log('connected to mongo db server');

// db.collection('Todos').find({
//   _id : new ObjectID('5a1d06cc605b771cd6ce34c8')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch the todos',err);
// });
//

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count : ${count}`);
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch the todos',err);
// });
db.collection('Users').find({
  name : "Alwar"
}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
  console.log('Unable to fetch the todos',err);
});

//db.close();
});
