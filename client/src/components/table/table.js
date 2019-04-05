import React, { Component } from 'react';


class Table extends Component {
  state = {
    response: '',
    
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data.map(
        x=>(
            <li>
               Name:{x.name}<br/>
               Email:{x.email}<br/>
              accountType:{x.accountType}<br/>
               gender:{x.gender}<br/>
               nationality:{x.nationality}<br/>
               typeID:{x.typeID}<br/>
               numberID:{x.numberID}<br/>
               dateOfBirth:{x.dateOfBirth}<br/>
               address:{x.address}<br/>
               phoneNumber:{x.phoneNumber}<br/>
               faxNumber:{x.faxNumber}<br/>
               investorType:{x.investorType}<br/>
               capital:{x.capital}<br/>
               capitalCurrency:{x.capitalCurrency}<br/>
               </li>
             )
      ) }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/user/getUsers');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
      <div className="Table">
        <p>{this.state.response}</p>
       
      </div>
    );
  }
}

export default Table;