//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //No need to create a database before start using just start using it
    if(err){
      return console.log('Unable to connect to the database');
    }
    console.log('connected to mongo db server');

    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Alwar'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteOne({_id : ObjectID('5a1c00e5ef919321d097ff7e')}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: ObjectID('5a1bfef4a3d01135ecf762b3')}).then((result) => {
      console.log(result);
    });

//db.close();
});
