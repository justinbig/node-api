// const MongoClient = require("mongodb").MongoClient;

 
const {MongoClient,ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
	 if(err) {
	  return console.log("we were unable to connect MONGO server");
	 }
	 console.log("we are connected to MONGO server");
	 db.collection('users').insertOne({
	 	name: 'eloge',
	 	age: 25,
	 	city: 'kany'
	 }, (err,res) => {
	 	if(err) {
	 	    return console.log('error', err);
	 	}
	 	console.log(res);
	 })
	 

	 db.collection('users').findOneAndDelete({
	 	completed: false
	 }).then((res) => {
	 	console.log(res);
	 })


	 db.collection('users').findOneAndUpdate({
	 	age: 26 // filter by name meaning in order to udate data we need to select something in the database
	 },
	 {
      $set: {// update name in the data base and city 
      	name: 'justine',
      	city: 'musaga'
      },
       $inc: {
	  	 age: 1 // incrementing by one 
	   }
	 },
	

	 {
	  returnOrginal: false // return updated version by default is true.
	 }).then((res) => {
	 	 console.log(res);
	 })
	 db.close();
});