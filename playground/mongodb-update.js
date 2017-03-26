const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDb');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58d7c1525ff053631674406d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d6aaf2cdf4161700dec928')
  }, {
    $set: {
      name: 'Stephen'
    },
    $inc: {
        age: 1
      }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  //db.close();
});
