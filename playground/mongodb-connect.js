//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //No need to create a database before start using just start using it
    if(err){
      return console.log('Unable to connect to the database');
    }
    console.log('connected to mongo db server');

    // db.collection('Todos').insertOne({
    //
    // },(err, result) => {
    //   if(err) {
    //     return console.log('unable to connect to insert trodo',err);
    //   }
    //   console.log(JSON.stringify(result.ops , undefined , 2));
    //
    // });


    // db.collection('Users').insertOne({
    //    name: 'Alwar',
    //    age : 19,
    //    location: 'Madurai'
    //  },(err,result) => {
    //    if(err) {
    //      return console.log('Unable to connect to the database');
    //      }
    //      console.log(result.ops[0]._id.getTimestamp());
    //
    //  });
db.close();
});
