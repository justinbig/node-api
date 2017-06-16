var express = require('express');
var bodyParser = require("body-parser");

var {mongoose} = require('./db/mangoose')
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req,res) => {
   var todo = new Todo({
   	text: req.body.text
   });

   todo.save().then((doc) => {
      res.send(doc);
   },(e) => {
      res.status(400).send(e);
   });
});





app.listen(3000,() => {
   console.log('we are ONPORT 3000');
});

module.exports = {app};























































































































// var newtext = new Todo({
// 	text: 'cook diner'
// });

// // newtext.save().then((res) => {
// //   console.log('data', res);
// // },(e)=> {
// // 	console.log('we could not save' ,e);
// // });

// // var Ecoute = mongoose.model('Ecoute', {
// // 	text : {
// // 		type: String
// // 	},
// // 	completed: {
// // 		type: Boolean
// // 	},
// // 	completedAt: {
// // 		type: Number
// // 	}
// // });

// // var anotherNew = new Ecoute({
// // 	text : 'hello justin',
// // 	completed: true,
// // 	completedAt : 2017
// // }).save().then((e) => {
// //    console.log('we could add', e);
// // },(res) => {
// // 	console.log('my list', res);
// // })

// // var anothertwo = new Ecoute({
// // 	text: 'hello ND',
// // 	completed: false,
// // 	completedAt: 123
// // }).save().then((res) => {
// // 	console.log('yeah',res);
// // },(e)=> {
// // 	console.log('can\'t connect');
// // })


// var user = new Users({
// 	email: 'justinbig@yahoo.com'
	

// });

// user.save().then((res) => {
// 	console.log(res);
// },(e) => {
// 	console.log( 'we cant insert');
// });

