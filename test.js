const funcs = require('./fn.js');
const bodyParser = require('body-parser');
const mongoose= require ('mongoose')
const User = require('./models/User')
// test('adds 1 + 2 to be 3', () => {
//   expect(funcs.add(1, 2)).toBe(3);
// });
afterEach(() => {
  
})
// aftereach(()=>{

// })

// //To be exact comparison, with objects use toEqual
// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   });

//   test('adding positive numbers is not zero', () => {
//         const a = 1
//         const b = 2
//         expect(a + b).not.toBe(0);
//   });

//   test('adding floating point numbers', () => {
//     const value = 0.1 + 0.2;
//     //expect(value).toBe(0.3);           This won't work because of rounding error
//     expect(value).toBeCloseTo(0.3); // This works.
//   });

//   test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
//   });
  
//   test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
//   });

//   const people = [
//     'Ammar',
//     'Leo',
//     'Barney',
//     'Jaime',
//     'Tywin',
//   ];
  
//   test('The list of people has Ammar on it', () => {
//     expect(people).toContain('Ammar');
//   });


// //Working with async
//   test('First book should be Crime and Punishment', async () => {
//     expect.assertions(1)
//     const response =  await funcs.getBooks()
//     expect(response.data.data[0].title).toEqual('Crime and Puishment')
//   });

//   test('Number of books should be 11', async () => {
//     expect.assertions(1)
//     const response =  await funcs.getBooks()
//     expect(response.data.data.length).toBe(11)
//   });


  test('view all employess',async() => {

    expect.assertions(1)
    const employees = await funcs.getAllEmployess()
    //console.log(employees.data.data[0].email)
   expect(employees.data.data[0].email).toEqual('schroeder@undefined.me')
   });

   test('user should be accepted ',async() => {

   // expect.assertions(1)
    const accept = await funcs.acceptAccount()
    expect(accept.data.msg).toEqual('account have been approved')
  
   //expect(employees.data.data[0].email).toEqual('schroeder@undefined.me')
   });

   test('user should be rejected ',async() => {

    // expect.assertions(1)
     const reject = await funcs.rejectAccount()
     expect(reject.data.msg).toEqual('account have been disapproved')
   
    //expect(employees.data.data[0].email).toEqual('schroeder@undefined.me')
    });
 

  //  test('user should be accepted ',async() => {

  //   expect.assertions(1)
  //   const employees = await funcs.getAllEmployess()
  //   console.log(employees.data.data[0].email)
  //  expect(employees.data.data[0].email).toEqual('schroeder@undefined.me')
  //  })




  // test(`User's name should be vegerger`,async () => {
  //   expect.assertions(2)
  //   const user =  await funcs.getUser()
  //   // const user1= user.bodyParser;
  //   expect(user.data.data[0].name).toEqual('Schroeder')
  //   expect(user.data.data.length).toBeGreaterThan(0)
  // });