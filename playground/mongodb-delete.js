// const MongoClient = require("mongodb").MongoClient;

 
const {MongoClient,ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
	 if(err) {
	  return console.log("we were unable to connect MONGO server");
	 }
	 console.log("we are connected to MONGO server");
    // deleteMany
	     db.collection('todos').deleteMany({text:'morning lunch'}).then((result) => {
	     	console.log(result);
	     })
    // deleteOne
	     db.collection('todos').deleteOne({text:'hungry'}).then((res) => {
	     	console.log(res);
	     })
    // findOneAndDelete
    db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
    	console.log(result);
    })

    db.collection('users').deleteMany({location:'kinanira'}).then((res)=> {console.log(res)});
    db.collection('users').deleteOne({text: 'morning lunch'}).then((res) => {console.log(res);})
    db.collection('users').findOneAndDelete({_id: new ObjectID("593a487856b942fb0d0145b0")}).then((res)=> {console.log(res);})

	 
});