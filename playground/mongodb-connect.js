// const MongoClient = require("mongodb").MongoClient;

 
const {MongoClient,ObjectID} = require("mongodb");


// object destructing is pull property inside object save it in variable
var user = {name: "eloge",age: 20,city: "kanycity"}
var {age} = user;
console.log(age);
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
	 if(err) {
	  return console.log("we were unable to connect MONGO server");
	 }
	 console.log("we are connected to MONGO server");
	 // db.collection("todos").insertOne({
	 // 	text: 'something to do',
	 // 	completed: false
	 // }, (err,res) => {
	 // 	if(err) {
	 // 		return console.log('unable to insert to do',err);
	 // 	}

	 // 	console.log(JSON.stringify(res.ops,undefined,2));
	 // })

	 // db.collection('users').insertOne({
	 // 	name: 'eloge',
	 // 	age: 20,
	 // 	location: 'kinanira'
	 // },(err,result) => {
	 // 	if(err) {
	 // 		return console('unable to insert', err);
	 // 	}
	 // 	console.log(result.ops[0]._id.getTimestamp());
	 // })
	 db.close();
});