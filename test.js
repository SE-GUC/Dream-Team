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


    test(`Should assign a form to a lawyer, lawyer shouldnt be null `,async () => {
      // expect.assertions(1)
        const assignCaseToLawyer =  await funcs.assignCaseToLawyer()
        const form = await funcs.getForm()
    
         console.log(form.data.data.lawyer)
       
      expect(form.data.data.lawyer).toEqual( '5c94f8c7fe24291e38a3ae94')
      });


   

   


