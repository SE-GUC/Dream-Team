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


 
  // test(`User's name should be vegerger`,async () => {
  //   expect.assertions(2)
  //   const user =  await funcs.getUser()
  //   // const user1= user.bodyParser;
  //   expect(user.data.data[0].name).toEqual('Schroeder')
  //   expect(user.data.data.length).toBeGreaterThan(0)
  // });
  test(`get accepted users`,async () => {
    expect.assertions(1)
      const getAcceptedUsers =  await funcs.getAcceptedUsers()
      
      expect(getAcceptedUsers.data.data[0].accountStatus).toEqual(true)
  
    });
    test(`get pending users`,async () => {
      expect.assertions(1)
     //  expect.hasAssertions()
        const getPendingUsers =  await funcs.getPendingUsers()
    
       //  console.log(reviewedForms.data.data[0].reviewerDecision)
    
        expect(getPendingUsers.data.data[0].accountStatus).toEqual(false)
    
      });
      test(`Should get all lawyers`,async () => {
        expect.assertions(1)
      
       const getLawyers =  await funcs.getLawyers()
      expect(getLawyers.data.data[0].accountType).toEqual("lawyer")
      
        });
        test(`Reviewer accept form`,async () => {
          expect.assertions(1)
        
         const revAccepts =  await funcs.ReviewerAcceptForm()
         expect(revAccepts.data.msg).toEqual('Form status is updated successfully')
        
          });
          test(`Reviewer reject form`,async () => {
            expect.assertions(1)
          
           const revAccepts =  await funcs.ReviewerAcceptForm()
           expect(revAccepts.data.msg).toEqual('Form status is updated successfully')
          
            });
