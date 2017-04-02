const expect = require('expect');
const request = require('supertest');

// ./ relative path
// ../ go back 1
// go in to server
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
    //wiping all todos
    Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test to do text';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, result) => {
                if (err) {
                    //wrap it up
                    return done(err);
                }

                // <3 mongoose
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e)); // catching error       
            })
    });
    
    it('should not create a new todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e));
            })
    });
});
