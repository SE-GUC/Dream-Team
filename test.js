const funcs = require('./fn.js');
const bodyParser = require('body-parser');
// test('adds 1 + 2 to be 3', () => {
//   expect(funcs.add(1, 2)).toBe(3);
// });


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

  // test(`User's name should be YOMNA`,async () => {
  //   expect.assertions(1)
  //   const user =  await funcs.getUser()
  //   // const user1= user.bodyParser;
  //   console.log(user.data.name)
  //   expect(user.data.data[0].name).toEqual('yomna')
  // });

  test(`First column should be ["قواعد التحقق", "اختیارات القائمة", "اجباري", "نوع الحقل", "اسم الحقل"]`,async () => {
    expect.assertions(1)
    const SSC1 =  await funcs.getSSC()
   
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
 
      //console.log(pendingcase.data.data.lawyer)
    
     expect(pendingcase.data.data.lawyer).toEqual("5c94f8c7fe24291e38a3ae94")
   });
 
   test(`Should test if the form's lawyer equals lawyer entered  `,async () => {
    // expect.assertions(1)
      const lawyerOfForm =  await funcs.getlawyerOfForm()
  
       console.log(lawyerOfForm.data.data.lawyer)
     
      expect(lawyerOfForm.data.data.lawyer).toEqual("5c94f8c7fe24291e38a3ae94")
    });

   


