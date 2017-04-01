
// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb'); // <- object destructering
const {MongoClient, ObjectID} = require('mongodb'); // <- kunnen er meerdere maken nu
// krijgden de specifieke packages met de naam mongoclient & objectID ZIE HIERONDER OBJECT DESTRUCTERING

// // object destructering
// // let's u pull out properties from an object, creating variables
// var user = {name: 'Dries', age: 22}
// // we can pull these out and put these in a variables
// var {name} = user;
// console.log(name); // -> Dries

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // return console.log works fine and just stops.. js... hehe
  if (err) return console.log('Woops, something went wrong connecting to the database server!');

  console.log('major tom to ground mongodb');

  // insert new doc into Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Dries',
  //   age: 22,
  //   location: 'Belgium'
  // }, (err, result) => {
  //   if (err) return console.log("woops-daisy, something went wrong inserting that shit");
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   // passing err aswell to display object
  //   if (err) return console.log('Wooooops, unable to insert todo', err);
  
  //   // result contains document that was inserted.
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
  // });

  db.close();
});
