
// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb'); // <- object destructering
const {MongoClient, ObjectID} = require('mongodb'); // <- kunnen er meerdere maken nu

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // return console.log works fine and just stops.. js... hehe
  if (err) return console.log('Woops, something went wrong connecting to the database server!');

  console.log('major tom to ground mongodb');

  // deleteMany <- multiple
  // deleteOne <- 1
  // findOneAndDelete <- returns value & deletes it.

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  //   //  result: { n: 3, ok: 1 }, <- ok: 1 means went as expectred, n: 3 <- 3 todo's that matched the criteria.
  // });

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  //   //  result: { n: 1, ok: 1 }, <- n aantal, ok:1 -> is gelukt
  // });

  // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  //   // { lastErrorObject: { n: 1 }, value: { _id: 58a7136c67e2b6c5a691ffe0, text: 'eat lunch',  completed: false }, ok: 1 }
  // });

  // challenge
  // db.collection('Users').deleteMany({name: 'Dries'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("58a6f85b9075b5b37919f553")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
    // {
    //   "lastErrorObject": {
    //     "n": 1
    //   },
    //   "value": {
    //     "_id": "58a6f85b9075b5b37919f553",
    //     "name": "Sofie",
    //     "age": 22,
    //     "location": "Belgium"
    //   },
    //   "ok": 1
    // }
  })

  // db.close();
});
