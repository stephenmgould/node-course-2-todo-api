const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDb');

  // db.collection('Users').deleteMany({name: 'Piper'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('58d6c4e6f988431e68d81fd5')}).then((result)=>{
    console.log(result);
  });

  //db.close();
});
