const funcs = require('./fn.js');
const bodyParser = require('body-parser');
const mongoose= require ('mongoose')
const User = require('./models/User')
// test('adds 1 + 2 to be 3', () => {
//   expect(funcs.add(1, 2)).toBe(3);
// });

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
 

  

  test('Lawyer can show a from if the form has no lawyer assigned to it',async () => {
       expect.assertions(1)
       const lawyerOfForm =  await funcs.lawyerViewForm();


        // console.log(lawyerOfForm.data.data._id)

       expect(lawyerOfForm.data.data._id).toEqual("5ca11184911834593cc03510")
     });

     test('lawyer accepting form',async ()=>{
      expect.assertions(1)
      const response =await funcs.lawyerAcceptForm();
      console.log(response);
      expect(response.data.msg).toEqual( 'form updated successfully')
  
    });
  
  
    test('lawyer rejecting form',async ()=>{
      expect.assertions(1)
      const response =await funcs.lawyerRejectForm();
      console.log(response);
      expect(response.data.msg).toEqual( 'form updated successfully')
  
    });
  
  
    test(`Should test if the lawyer's forms equals lawyer entered `,async () => {
     // expect.assertions(1)
        const lawyer =  await funcs.getLawyer()
    
         console.log(lawyer.data.data.lawyer)
       
        expect(lawyer.data.data.lawyer).toEqual("5ca10ccab7701f2158efbad1")
    });
  