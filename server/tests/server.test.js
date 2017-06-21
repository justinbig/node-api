const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');
var {ObjectID} = require('mongodb');

const todos = [{
	_id : new ObjectID(),
	text : "first test todo"
},{
	_id : new ObjectID(),
	text: "second text to do"
}];

beforeEach((done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done()); // this will remove any thing in the data base before our test code run.
});

describe('post todo', () => {
   it('should create a new todo', (done) => {

   	var text = 'test to do texte';
   	   request(app)
   	     .post('/todos')
   	     .send({text}) //in order to send data along with request as body we have to call send() pass in object.
         .expect(200) //expect to be ok
         .expect((res) => {
         	expect(res.body.text).toBe(text); // here we check if the res body has the text property above.
         })
         .end((er,res) => { //here instead of passing done we pass function 
         	if(er) {
         		return done(er)
         	}

         	Todo.find({text}).then((todos) => {// find all data in todos now we only inserted one
         		expect(todos.length).toBe(1); //check if there is oonly one.
         		expect(todos[0].text).toBe(text); //checking if todos has text propert up above
         		done();
         	}).catch((e) => done(e));
         })

         });
   });

   it('should not create todos', (done) => {
   	   request(app)
   	     .post('/todos')
   	     .send({})
   	     .expect(400)
   	      
   	      .end((er,res) => {
   	      	if(er) {
   	      		return done(er)
   	      	}
   	      	
   	      	Todo.find().then((todos) => {
   	      		 expect(todos.length).toBe(2)
   	      		
   	      		 done();
   	      	}).catch((e) => {
   	      		 done(e);
   	      	})
   	      });

})


it("sholud create to do", (done) => {
	var text = 'hello justin';
	request(app)
	 .post('/todos')
	 .send({text})
	 .expect(200)
	 .expect((res) => {
	 	 expect(res.body.text).toBe(text)
	 })

	 .end((er,res) => {
	 	if(er) {
	 		return done(er)
	 	}

	 	Todo.find({text}).then((todos) => {
	 		expect(todos.length).toBe(1);
	 		expect(todos[0].text).toBe(text);
	 		done();
	 	}).catch((e) => done(e))
	 })
});

describe('/get todos', () => {
	it('shoul return all todos', (done) => {
		request(app)
		 .get('/todos')
		 .expect(200)
		 .expect((res) => {
		 	expect(res.body.todos.length).toBe(2);
		 })
		 .end(done)
	})
})

describe("/todos/:id", () => {
	it('should return todo doc' ,(done) => {
		request(app)
		  .get(`/todos/${todos[0]._id.toHexString()}`)
		  .expect(200)
		  .expect((res) => {
		  	 expect(res.body.todo.text).toBe(todos[0].text);
		  })
		  .end(done);
	});

	it("should return 404 if todo not found" ,(done) => {
		var _ide = new ObjectID().toHexString();
		request(app)
		 .get(`/todos/${_ide}`)
		 .expect(404)
		 
		 .end(done);
	});

	it('should return 404 if id is invalid', (done) => {
		var ide = 123;//nvalid id
		request(app)
		  .get(`/todos/${ide}`)//tamplate string
		  .expect(404)
		  .end(done);
	})
});