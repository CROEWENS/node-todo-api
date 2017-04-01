
// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb'); // <- object destructering
const {MongoClient, ObjectID} = require('mongodb'); // <- kunnen er meerdere maken nu

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

  // find is slechts een pointer en toArray gebriken we om data eruit te halen.

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todo's", err);
  // });

  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todo's", err);
  // });

  // db.collection('Todos').find({_id: new ObjectID("58a705db67e2b6c5a691fd39")}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todo's", err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todo's", err);
  // });

  // db.collection('Users').find({name: 'Dries'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("dayum dawg", err);
  // });

  db.collection('Users').find({name: 'Drie2s'}).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log("eeej");
  });

  db.close();
});
