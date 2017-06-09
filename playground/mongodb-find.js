// const MongoClient = require("mongodb").MongoClient;

 
const {MongoClient,ObjectID} = require("mongodb");


// object destructing is pull property inside object save it in variable

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
	 if(err) {
	  return console.log("we were unable to connect MONGO server");
	 }
	 console.log("we are connected to MONGO server");

	 db.collection('todos').find({_id: new ObjectID('593850b4dbd9c005c4e50770')}).toArray().then((docs) => {
	 	console.log('todos');
	 	console.log(docs);
	 },(error) => {
	 	console.log('hoooooo', error);
	 })
	 db.close();

	 
});