import React, { Component } from 'react';
import '../homepage/homepage.css';
import Login from '../../components/login'
import Table from '../../components/table/usertable'
class HomePage extends Component {
  // state = {
    
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.data[0].name }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/user/getUsers');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };
 
  render() {
    return (
      <div className="HomePage">
        {/* <p>{this.state.response}</p> */}
        IN HomePage.JS
        <Login/>
        <Table ApiURL='api/user/getUsers'/>
      </div>
    );
  }
}

export default HomePage;
