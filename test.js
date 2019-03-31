const funcs = require('./fn.js');
const bodyParser = require('body-parser');

  test(`First column should be ["قواعد التحقق", "اختیارات القائمة", "اجباري", "نوع الحقل", "اسم الحقل"]`,async () => {
    //expect.assertions(1)
    const SSC1 =  await funcs.getSSC()

    console.log(SSC1)
   
    expect(SSC1.data[0]).toEqual(  [ 'قواعد التحقق',
    'اختیارات القائمة',
    'اجباري',
    'نوع الحقل',
    'اسم الحقل' ])

  });

  test(`First column should be ["قواعد التحقق", "اختیارات القائمة", "اجباري", "نوع الحقل", "اسم الحقل"]`,async () => {
    expect.assertions(1)
    const SPC =  await funcs.getSPC()
   
    expect(SPC.data[0]).toEqual(  ["قواعد التحقق", "اختیارات القائمة", "اجباري", "نوع الحقل", "اسم الحقل"])

  });

  test(`First column should be ["1", "SSC Minimum Capital Limit is 50,000 EGP"]`,async () => {
    expect.assertions(1)
    const SSCandSPC =  await funcs.getSSCandSPC()
   
    expect(SSCandSPC.data[0]).toEqual(  ["1", "SSC Minimum Capital Limit is 50,000 EGP"])

  });

  test(`First column should be ["Entity", "Law 159", "Law 72"]`,async () => {
    expect.assertions(1)
    const feesCalculationRules =  await funcs.getfeesCalculationRules()
   
    expect(feesCalculationRules.data[0]).toEqual(  ["Entity", "Law 159", "Law 72"])

  });

  test(`Should test if the first published company's name equals My company `,async () => {
  expect.assertions(1)
    const publishedcompanies =  await funcs.getpublishedcompanies()

    console.log(publishedcompanies.data.data[0].companyName)
   
    expect(publishedcompanies.data.data[0].companyName).toEqual('My company')
  });

  test(`Should test if the pending form's lawyer equals lawyer entered `,async () => {

   // expect.assertions(1)
     const pendingcase =  await funcs.getpendingcase()
 
      console.log(pendingcase.data.data.lawyer)
    
     expect(pendingcase.data.data.lawyer).toEqual("5c94f8c7fe24291e38a3ae94")
   });
 
   test(`Should test if the form's lawyer equals lawyer entered  `,async () => {
    // expect.assertions(1)
      const lawyerOfForm =  await funcs.getlawyerOfForm()
  
       console.log(lawyerOfForm.data.data._id)
     
      expect(lawyerOfForm.data.data._id).toEqual("5ca0c1466a36eb47ec6db2a1")
    });
    //Sprint 2 user story 4.2
    test(`Should test if running company of current investor is his running company `,async () => {
      expect.assertions(1)
       const runningcompanies =  await funcs.getrunningcompanies()
       console.log(runningcompanies.data.data[0].investor)
       expect(runningcompanies.data.data[0].investor).toEqual('5c92a43acf0719e94d1907a5')
     });
   //Sprint 2 user story 4.3
     test(`Should test if pending company of current investor is his pending company `,async () => {
      expect.assertions(1)
       const pendingcompanies =  await funcs.getpendingcompanies()
       console.log(pendingcompanies.data.data[0].investor)
       expect(pendingcompanies.data.data[0].investor).toEqual('5c92a43acf0719e94d1907a5')
     });
  //Sprint 1 user story 5.4 
     test(`Should view my forms and checking if by id it gets right one  `,async () => {
     expect.assertions(1)
       const forms =  await funcs.getmyform()
       console.log(forms.data.data.investor)
      expect(forms.data.data.investor).toEqual('5c92a43acf0719e94d1907a5')
     });
    
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

let user1 = {
  accountType: "admin",
  name: "Schroeder",
  gender: "female",
  nationality: "mangenese",
  typeID: "other id",
  numberID: 847372204,
  dateOfBirth: "Tue Jul 10 1979 10:43:17 GMT+0000 (UTC)",
  address: "115 Varick Street, Talpa, Tennessee, 2087",
  phoneNumber: "15",
  faxNumber: "15",
  email: "schrogggerg@undefined.me",
  password: "Racdkjbhael",
  capital: 6369,
  capitalCurrency: "USD",
  accountStatus:"true",
  investorType: "SSC"
};
  it(`User's name should be vegerger`,async () => {
    // // expect.assertions(1)
   
    const user =  await funcs.insert(user1)
    // const user1= user.bodyParser;
    expect(user.data.data.name).toEqual('Schroeder')
    // expect(user.data.data.length).toBeGreaterThan(0)
  });
  // test(`User's name should be vegerger`,async () => {
  //   expect.assertions(2)
  //   const user =  await funcs.getUser()
  //   // const user1= user.bodyParser;
  //   expect(user.data.data[0].name).toEqual('Schroeder')
  //   expect(user.data.data.length).toBeGreaterThan(0)
  // });
