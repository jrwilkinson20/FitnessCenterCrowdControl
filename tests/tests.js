var assert = require('assert');
var math = require('../routes/multiply.js');
var request = require('supertest');
var app = require('../app.js');

describe('Mulitpy API Tests', function(){

    describe('Multiplying Two Numbers', function(){
         it('ten times ten is one hundred', function(){
             assert.equal(math.add(10,10), 100);
         });
    });

    describe('Multiply Two Numbers through API', function(){
        it('ten times ten is one hundred', function(done){
            request(app)
                .get('/api/multiply?n1=10&n2=10')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(function(res){
                    var answer = res.body;
                    assert.equal(answer, 100);
                })
                .end(function(err, res){
                    if(err)return done(err);
                    done();
                });
        });
   });
});