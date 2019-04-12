import React, { Component } from "react";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";
import { withRouter } from 'react-router';

class userTable extends Component {
 
    state = {
      response: [],
      isLoaded: false,
      userID: "",
      accountStatus :"",
      message:""

    };
  

  handleClick  = async e => {
    e.preventDefault();
    await document.getElementById("myTable").addEventListener("click", (evt) =>   {
        var btn = evt.target;
        console.log(btn.tagName)
        if(btn.tagName==="BUTTON"){
           var row = btn.parentNode.parentNode;  //td than tr
           var cells = row.getElementsByTagName("td"); //cells
        //    console.log(cells[0].textContent, cells[1].textContent);
            this.setState({userID: cells[0].textContent})
        }
      })
      ;
    const response = await fetch('/api/admin/approve/'+this.state.userID+'/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
     
    },
    // window.location.reload()
    ); 
    // window.lo;
    //  this.props.history.dispatch("/adminARC",null)
     
    }

    handleSubmitR = async e => {
        e.preventDefault();
       await document.getElementById("myTable").addEventListener("click", (evt) =>   {
            var btn = evt.target;
            console.log(btn.tagName)
            if(btn.tagName==="BUTTON"){
               var row = btn.parentNode.parentNode;  //td than tr
               var cells = row.getElementsByTagName("td"); //cells
            //    console.log(cells[0].textContent, cells[1].textContent);
             this.setState({userID: cells[0].textContent})
            }
          })
        const response = await fetch('/api/admin/reject/'+this.state.userID+'/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            
          }
       
        },
        
        // window.location.reload()
        )
       
    //    this.props.history.dispatch("/adminARC",null)
       
    
    }
 
    handleComment = async e => {
        e.preventDefault()
        
       await document.getElementById("myTable").addEventListener("click", (evt) =>   {
           
            var btn = evt.target;
            console.log(btn.tagName)
            if(btn.tagName==="BUTTON"){
               var row = btn.parentNode.parentNode;  //td than tr
               var cells = row.getElementsByTagName("td"); //cells
            //    console.log(cells[0].textContent, cells[1].textContent);
             this.setState({userID: cells[0].textContent})
            }
          })
        const response = await fetch('/api/admin/sendRejectionMsg/'+this.state.userID+'/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body : JSON.stringify({rejectionMessage : this.state.message})
        },
        
        // window.location.reload()  
        )
       
    //    this.props.history.dispatch("/adminARC",null)
       
    
    }
  componentDidMount() {
    fetch("api/user/getUsers")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  };

  
  render() {
   
    
    var { response, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       
        <div className="AdminARC" id="myTable">
        
          <Table dark hover bordered>
            <thead>
              <tr>
              <th> ID </th>
                <th> name </th>
                <th> email </th>
                <th> accountType </th>
                <th> gender </th>
                <th> nationality </th>
                <th> typeID </th>
                <th> numberID </th>
                <th> dateOfBirth </th>
                <th> address </th>
                <th> phoneNumber </th>
                <th> faxNumber </th>
                <th> investorType </th>
                <th> capital </th>
                <th> capitalCurrency </th>
                <th>accountStatus</th>
                <th> accept</th>
                <th> reject</th>
                <th> rejectionMessage </th>
                {/* <th> accountStatus </th> */}
                <th> comment </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((x,key) => (
                <tr>
                  <td>{key=x._id}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.accountType}</td>
                  <td>{x.gender}</td>
                  <td>{x.nationality}</td>
                  <td>{x.typeID}</td>
                  <td>{x.numberID}</td>
                  <td>{x.dateOfBirth}</td>
                  <td>{x.address}</td>
                  <td>{x.phoneNumber}</td>
                  <td>{x.faxNumber}</td>
                  <td>{x.investorType}</td>
                  <td>{x.capital}</td>
                  <td>{x.capitalCurrency}</td>
                  <td >{x.accountStatus? "true":"false"} </td>
                  <td><Button type="submit"  onClick={this.handleClick}  >accept</Button> </td>
                  <td><Button  type="submit"  onClick={this.handleSubmitR}  >reject</Button></td>
                  <td>{x.rejectionMessage}</td>
                  <td> <Button  type="submit"  onClick={<dev><input
        type="text"
        value={this.state.message}
        onChange={e => this.setState({ message: e.target.value })}
      /></dev>}  >submit</Button> </td>
                  <td> </td>
                </tr>
                
              ))}
            </tbody>
          </Table>
          
        </div>
        
      );
    }
  }
}

export default  withRouter(userTable);
