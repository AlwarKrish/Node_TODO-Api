const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

//jwt.sign  runs the hash and returns the token value
//jwt.verify takes the token and makes sure that data was not manipulated

var data = {
  id: 10
};

var token = jwt.sign(data,'123abc');  //value going to be stored in the tokens array
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log('the decode data is', decoded);


// var message = "I am user number 3";
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);
// var data = {
//   id: 4
// };
//
// var token = {   // this is done to make sure that the hash was generated not manipulated
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// //we are testing the hashing feature by trying to change the value
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash){
//   console.log('data is safe since not changed');
// }else {
//   console.log('data is not safe as it is changed');
// }
