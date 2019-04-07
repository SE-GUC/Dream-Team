import React, { Component } from 'react';


class HomePage extends Component {


  
    update(){
        this.props.history.push('/update');
        
        }
    login(){
      this.props.history.push('/login'); 
      }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <h2>Welcome Home</h2>
        </div>
        <p className="App-intro">
        <div>
       To Login Press here
       <button  className ="btn btn-primary width-150" onClick={(e) => { this.login()} }>Click to login</button>
       
       </div>
       <div>
       To Update Press here
       <button  className ="btn btn-primary width-150" onClick={(e) => { this.update()} }>Click to Update</button>

        </div>

        </p>
      </div>
    );
  }
}

export default HomePage;