import React, { Component } from 'react';
import { Table } from 'reactstrap';
import AuthHelperMethods from  '../AuthHelperMethods';
import withAuth from '../withAuth';
class formTable extends Component {
  Auth = new AuthHelperMethods();
 constructor(props){
   super(props)
   this.state = {
     response: [],
     isLoaded:false,
   };
   }

 componentDidMount() {

   fetch('api/form/search')
   .then(res=>res.json())
   .then(json=>{
     this.setState({
   isLoaded:true,
   response:json,
     })
   })
 }

 
 
 render() {
   
   var { response,isLoaded } = this.state;
   if(!isLoaded){
   
     return <div>Loading...</div>

   }
   else{
     return(
      <div className="formTable">
      <Table dark hover bordered >
        <thead>
          <tr>
          <th> ID</th>
            <th> companyName </th>
            <th> companyNameEng  </th>
            <th> companyType </th>
            {/* <th> governorate  </th> */}
            {/* <th> city </th>
            <th> address </th>
            <th> telephone </th>
            <th> fax </th>
            <th> currency </th>
            <th> capital </th> */}
            <th> entityType </th>
            <th> regulatedLaw </th>
            <th> investor </th>
            <th> lawyer </th>
            <th> lawyerComment </th>
            <th> lawyerDecision </th>
            <th> reviewer </th>
            <th> feesCalculation </th>
            <th> reviwerComment </th>
            <th> reviewerDecision </th>
            <th> dateOfApproval </th>
            <th> amountOfPayment </th>
            <th> dateOfPayment </th>
            <th> paymentId </th>
            <th> formStatus </th>
            {/* <th> board </th> */}
           
            
          </tr>
        </thead>
        <tbody>
          {response.data.map(
            (x,key)=> <tr>
             <td> {key=x._id}</td>
              <td>{x.companyName}</td>
              <td>{x.companyNameEng}</td>
              <td>{x.companyType}</td>         
              {/* <td>{x.headquarters}</td> */}
              {/* <td>{x.city}</td>
              <td>{x.address}</td>
              <td>{x.telephone}</td>
              <td>{x.fax}</td>
              <td>{x.currency}</td>
              <td>{x.capital}</td> */}
              <td>{x.entityType}</td>
              <td>{x.regulatedLaw}</td>
              <td>{x.investor}</td>
              <td>{x.lawyer}</td>
              <td>{x.lawyerComment}</td>
              <td>{x.lawyerDecision}</td>
              <td>{x.reviewer}</td>
              <td>{x.feesCalculation}</td>
              <td>{x.reviwerComment}</td>
              <td>{x.reviewerDecision}</td>
              <td>{x.dateOfApproval}</td>
              <td>{x.amountOfPayment}</td>
              <td>{x.dateOfPayment}</td>
              <td>{x.paymentId}</td>
              <td>{x.formStatus}</td>
              {/* <td>{x.board}</td> */}
              </tr>
              
          )}
        
        </tbody>
      </Table>
    </div>
     
     )
   }

}}

export default withAuth(formTable);
