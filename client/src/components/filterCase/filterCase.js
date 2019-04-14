import React, { Component } from "react";
import { Table } from "reactstrap";
import withAuth from '../withAuth';

  
class filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      filtered:[],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("api/form/search")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json,
          filtered:json
        });
      });
  }
filterCompany=(e)=>{
 let currentList = [];
let newList = [];
if (e.target.value !== ""&&e.target.value!= null) {
  currentList = this.state.response;
  console.log(currentList);
  newList = currentList.data.filter((item) => {
    var lc;
    if(item.companyName){
      lc = item.companyName.toLowerCase();}
      
      const filter = e.target.value.toLowerCase();
      if(lc){ 
        return lc.includes(filter);}
        return false;
      });
    } else {
      newList = this.state.response;
    }
    if(e.target.value===undefined){
      newList = this.state.response;
     }
    if(e.target.value==null){
      newList = this.state.response;
     }
    console.log(newList);
this.setState({
filtered: {
  data:newList
}
});



}
filterCompanyEng=(e)=>{
  let currentList = [];
 let newList = [];
 if(e.target.value==null){
  newList = this.state.response;
 }
 if (e.target.value !== ""&&e.target.value!= null) {
 currentList = this.state.response;
 newList = currentList.data.filter((item) => {
          var lc;
          if(item.companyNameEng){
       lc = item.companyNameEng.toLowerCase();}
  const filter = e.target.value.toLowerCase();
         if(lc){ 
  return lc.includes(filter);}
  return false;
 });
 } else {
 newList = this.state.response;
 }
 this.setState({
 filtered: {
   data:newList
 }
 });
 
 
 
 }
  

  render() {
    var { response, isLoaded ,filtered} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Table">
        companyName:
        <input type="text" className="input" onChange={this.filterCompany} placeholder="Search CompanyName..." name="target" />
        <input type="text" className="input" onChange={this.filterCompanyEng} placeholder="Search companyNameEng..." name="target" />
          <Table dark hover bordered>
            <thead>
              <tr>
                <th> ID</th>
                <th> companyName </th>
                <th> companyNameEng </th>
                <th> companyType </th>
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
              </tr>
            </thead>

            <tbody>
              {filtered.data.map((x) => (
                <tr>
                <td>{x.id}</td>
                  <td>{x.companyName}</td>
                  <td>{x.companyNameEng}</td>
                  <td>{x.companyType}</td>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }

}


export default filter;
