var express = require('express');
var bodyParser = require("body-parser");
var {ObjectID} = require('mongodb');
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

app.get('/todos',(req,res) => {
   Todo.find().then((todos)=> {
      res.send({todos});
   },(e) => {
      res.status(400).send(e);
   })
})

app.get('/todos/:id', (req,res) => {
    var id = req.params.id; // request id
    if(!ObjectID.isValid(id)) { // if id is not valid send back error
      return res.status(404).send();
    }
      Todo.findById(id).then((todos) => {//find data in the database by id
         if(!todos) {//if no data inside data send error 404
            return res.status(404).send();
            
        }
          res.send(todos); //if there is data send it back

      }).catch((e) =>{
         res.status(404).send();

       });
  
})


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

