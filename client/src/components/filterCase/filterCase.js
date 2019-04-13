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
 // Variable to hold the original version of the list
 let currentList = [];
 // Variable to hold the filtered list before putting into state
let newList = [];

 // If the search bar isn't empty
if (e.target.value !== ""&&e.target.value!= null) {
     // Assign the original list to currentList
currentList = this.state.response;
console.log(currentList)
console.log(currentList.data)

     // Use .filter() to determine which items should be displayed
     // based on the search terms
newList = currentList.data.filter((item) => {
         // change current item to lowercase
         var lc;
         if(item.companyName){
      lc = item.companyName.toLowerCase();}
         // change search term to lowercase
 const filter = e.target.value.toLowerCase();
 console.log(filter)
         // check to see if the current list item includes the search term
         // If it does, it will be added to newList. Using lowercase eliminates
         // issues with capitalization in search terms and search content
        if(lc){ 
 return lc.includes(filter);}
 return false;
});
} else {
     // If the search bar is empty, set newList to original task list
newList = this.state.response;
}
console.log(newList)
 // Set the filtered state based on what our rules added to newList
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
        <input type="text" className="input" onChange={this.filterCompany} placeholder="Search..." name="target" />
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
