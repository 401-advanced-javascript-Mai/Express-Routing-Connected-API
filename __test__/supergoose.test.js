'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('category API', () => {
  it(' the api route works and send status 200', ()=>{
    return mockRequest.get('/api/v1/categories')
      .then(data =>{
        expect(data.status).toBe(200);
      });
  });

  it('post a new category item', () => {
    let testObj = { categoryType : 'shoes' };
    return mockRequest.post('/api/v1/categories')
      .send(testObj)
      .then(data => {
        // console.log ('data', data)
        console.log('***********', data.body._id);
        // let record = data.body;
        Object.keys(testObj).forEach(element => {
          // console.log('object.keys', Object.keys(testObj))
          expect(data.body[element]).toEqual(testObj[element]);
        });
      });
  });
});

describe('product API', () => {
  it(' the api route works and send status 200', ()=>{
    return mockRequest.get('/api/v1/products')
      .then(data =>{
        expect(data.status).toBe(200);
      });
  });
  //   it('post a new product item', () => {
  //     let testObj = { categoryType : 'shoes', thePrice : 100 };
  //     return mockRequest.post('/api/v1/products')
  //       .send(testObj)
  //       .then(data => {
  //         console.log('***********', data.body);

  //         // let toAdd = data.body ;
  //         Object.keys(testObj).forEach(element => {
  //           expect(data.body[element]).toEqual(testObj[element]);
  //         });
  //       });
  //   });

    

});