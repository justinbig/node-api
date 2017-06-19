const {mongoose} = require('./../server/db/mangoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');


var id = "5946808b4a1d6e17cc3bfe66";
var ide = "5946cae965ec536be50b78ab";

Todo.find({
	_id: id
}).then((todos) => {
	console.log('todos',todos);
}).catch((e) => {console.log(e)});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('todo',todo);
})

Todo.findById(id).then((res) => {
	 if(!res) {
	   return console.log('can\'t find id');
	 }
	 	return console.log('todo by id',res);
}).catch((e) => console.log(e));


Users.find({
	_id: ide
}).then((res) => {
	if(!res) {
	  return console.log('couldn\'t fetch data');	
	 }
	 console.log('this is from users',res);
	
}).catch((e) => {console.log(e)});

Users.findOne({
	_id: ide
}).then((data) => {
	if(!data) {

	 return console.log('no data found');
	}
	console.log('byone',data);
	
}).catch((e) => console.log(e));


Users.findById(ide).then((data) => {
   console.log('data by ide', data);
}).catch((e) => console.log(e));