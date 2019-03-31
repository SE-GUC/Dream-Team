const funcs = require('./fn.js');
const bodyParser = require('body-parser');
const mongoose= require ('mongoose')
const User = require('./models/User')
// test('adds 1 + 2 to be 3', () => {
//   expect(funcs.add(1, 2)).toBe(3);
// });
// afterEach(() => {
  
// })
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

// let user1 = {
//   accountType: "admin",
//   name: "Schroeder",
//   gender: "female",
//   nationality: "mangenese",
//   typeID: "other id",
//   numberID: 847372204,
//   dateOfBirth: "Tue Jul 10 1979 10:43:17 GMT+0000 (UTC)",
//   address: "115 Varick Street, Talpa, Tennessee, 2087",
//   phoneNumber: "15",
//   faxNumber: "15",
//   email: "schrogggerg@undefined.me",
//   password: "Racdkjbhael",
//   capital: 6369,
//   capitalCurrency: "USD",
//   accountStatus:"true",
//   investorType: "SSC"
// };
//   it(`User's name should be vegerger`,async () => {
//     // // expect.assertions(1)
   
//     const user =  await funcs.insert(user1)
//     // const user1= user.bodyParser;
//     expect(user.data.data.name).toEqual('Schroeder')
//     // expect(user.data.data.length).toBeGreaterThan(0)
//   });
//   // test(`User's name should be vegerger`,async () => {
  //   expect.assertions(2)
  //   const user =  await funcs.getUser()
  //   // const user1= user.bodyParser;
  //   expect(user.data.data[0].name).toEqual('Schroeder')
  //   expect(user.data.data.length).toBeGreaterThan(0)
  // });


   //  tested
   test(`view all investors `,async () => {
    expect.assertions(1)
      const del =  await funcs.viewAllInvestors()
       // const user1= user.bodyParser;
      //  console.log("This is the field "+del)
      // expect().toBeGreaterThanOrEqual(404)
      expect(del.data.data[0].name).toEqual('Schroeder')
      }),
    

         // tested
  test(`view all Reviewers `,async () => {
    expect.assertions(1)
      const del =  await funcs.viewAllReviewers()
       // const user1= user.bodyParser;
      //  console.log("This is the field "+del)
      // expect().toBeGreaterThanOrEqual(404)
      expect(del.data.data[0].name).toEqual('ayaelreviewerkedakeda')
      }),
     
  //  //TESTED
  test(`investor Tracking by _id 5c9fe6036a36eb47ec6db285 `,async () => {
    expect.assertions(1)
      const del =  await funcs.investortrack()
       // const user1= user.bodyParser;
      //  console.log("This is the field "+del)
      // expect().toBeGreaterThanOrEqual(404)
      expect(del.data.data[0].investor).toEqual('5ca10eadb7701f2158efbad2')
      })


      test(`investor Tracking by _id 5c9fe6036a36eb47ec6db285 `,async () => {
        expect.assertions(1)
          const del =  await funcs.investortrack()
           // const user1= user.bodyParser;
          //  console.log("This is the field "+del)
          // expect().toBeGreaterThanOrEqual(404)
          expect(del.data.data[0].investor).toEqual('5ca10eadb7701f2158efbad2')
          })

  
          

          test(`notify Amount And DueDate`  ,async () => {
            expect.assertions(1)
            const fees =  await funcs.notifyAmountAndDueDate()
            expect(fees.data.data[0].dateOfPayment).toBeDefined()
            });

        test(`finalized cases`  ,async () => {
              expect.assertions(1)
              const fees =  await funcs.finializedCases()
              expect(fees.data.data[0].lawyerDecision).toEqual('1')
              });
              
              test(`inv Update Form`  ,async () => {
                expect.assertions(1)
                const x =  await funcs.invUpdateForm()
                expect(x.data.msg).toEqual('Form updated successfully')
              })


              