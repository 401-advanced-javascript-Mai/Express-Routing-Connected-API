'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);



///// categories type 
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
      // console.log('***********', data.body._id);
      // let record = data.body;
        Object.keys(testObj).forEach(element => {
        // console.log('object.keys', Object.keys(testObj))
          expect(data.body[element]).toEqual(testObj[element]);
        });
      });
  });
  
  it('get  special item by id works and return a value ' , ()=> {
    let info = { categoryType: 'shoes' } ;
    return mockRequest.post('/api/v1/categories')
      .send(info)
      .then(data => {
        // console.log('id ', data.body._id);
        return mockRequest.get(`/api/v1/categories/${data.body._id}`)
          .then(data => {
            // console.log('data', data);
            // console.log('data.body',data.body )
            expect(data.status).toBe(200);
            expect(data.body[0].categoryType).toEqual('shoes');
          });
      });
  });
  // it('delete special item by id works  ' , ()=> {
  //   let info = { categoryType: 'shoes' } ;
  //   return mockRequest.post('/api/v1/categories')
  //     .send(info)
  //     .then(data => {
  //       console.log('data.body111111111',data.body )

  //       // console.log('id ', data.body._id);
  //       return mockRequest.delete(`/api/v1/categories/${data.body._id}`)
  //         .then(data => {
  //           // console.log('data', data);
  //           console.log('data.body2222222222',data.body )
  //           expect(data.status).toBe(200);
  //           expect(data.body[0]).toBeNull();
  //         });
  //     });
  // });
});








//////product tese 

describe('product API', () => {
  it(' the api route works and send status 200', ()=>{
    return mockRequest.get('/api/v1/products')
      .then(data =>{
        expect(data.status).toBe(200);
      });
  });
  it('post a new product item', () => {
    let testObj = { categoryType : 'shoes' };
    return mockRequest.post('/api/v1/products')
      .send(testObj)
      .then(data => {
        // console.log('data.body', data.body);

        // let toAdd = data.body ;
        Object.keys(testObj).forEach(element => {
          // console.log('element', element)
          expect(data.body[element]).toEqual(testObj[element]);
        });
      });
  });

  it('get  special item by id works and return a value ' , ()=> {

    // let info = { categoryType: "shoes" , thePrice :100 ,type: "niki"  } ;
    let info = { categoryType: 'shoes'   } ;

    return mockRequest.post('/api/v1/products')
      .send(info)
      .then(data => {
        // console.log('id ', data.body._id);
        return mockRequest.get(`/api/v1/products/${data.body._id}`)
          .then(data => {
            // console.log('data', data);
            console.log('data.body',data.body );
            expect(data.status).toBe(200);
            expect(data.body.categoryType).toEqual('shoes');
          });
      });
  });

  
});