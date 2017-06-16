const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
	Todo.remove({}).then(() => {
		done();
	}); // this will remove any thing in the data base before our test code run.
})

describe('post todo', () => {
   it('should create a new todo', (done) => {

   	var text = 'test to do texte';
   	   request(app)
   	     .post('/todos')
   	     .send({text}) //in order to send data along with request as body we have to call send() pass in object.
         .expect(200) //expect to be ok
         .expect((res)=> {
         	expect(res.body.text).toBe(text); // here we check if the res body has the text property above.
         })
         .end((er,res) => { //here instead of passing done we pass function 
         	if(er) {
         		return done(er)
         	}

         	Todo.find().then((todos) => {// find all data in todos now we only inserted one
         		expect(todos.length).toBe(1); //check if there is oonly one.
         		expect(todos[0].text).toBe(text); //checking if todos has text propert up above
         		done();
         	}).catch((e) => done(e));

         });
   });

   it('should not create todos', (done) => {
   	   request(app)
   	     .post('/todos')
   	     .send({})
   	     .expect(400)
   	      .expect((res) => {
   	      	 expect(res.body.text).toBe()
   	      })
   	      .end((er,res) => {
   	      	if(er) {
   	      		return done(er)
   	      	}
   	      	Todo.find().then((todos) => {
   	      		 expect(todos.length).toBe(0)
   	      		 expect(todos[0]).toBe();
   	      		 done();
   	      	}).catch((e) => {
   	      		 done(e);
   	      	})
   	      })
   })
});

