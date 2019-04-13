import React, { Component } from 'react';
import { Button } from "react-bootstrap";
class LawyerFillForm extends Component {
    state = { 
      companyName: "",
      companyNameEng: "",
      addresscompanyType: "",
      headquarters: {
        governorate: "",
        city: "",
        address: "",
        telephone: "",
        fax: ""
      },
      financialInfo: {
        currency: "",
        capital: ""
      },
       entityType: "",
       board:[]
    };

    fillForm = async e=>{
        e.preventDefault();
        const response = await fetch("api/lawyer/"+  this.state.id +
        "/" +
        this.state.inID, {
            method: "POST",
           headers: {
              'Content-Type': 'application/json',
            }},
            JSON.stringify({
                companyName: this.state.companyName,
    companyNameEng:this.state.companyNameEng,
    addresscompanyType:this.state.addresscompanyType,
                headquarters: {
                    governorate: this.state.governorate,
                    city: this.state.city,
                    address: this.state.address,
                    telephone: this.state.telephone,
                    fax: this.state.fax
                  },
                  financialInfo: {
                    currency:this.state.currency,
                    capital:this.state.capital
                  },
                  
       entityType:this.state.entityType,
            }),
            {
              headers: {
                "Content-Type": "application/json"
              }
            })
          
          .then(response => {
            const body = response.text();
    
            this.setState({ responseToPost: body });
          })
          .catch(err => {
            console.log(err);
          })};
        
        render() {
            return (
              <div className="Home">
                <p>
                  <strong>Lawyer fill form</strong>
                </p>
                Please insert lawuer:
                <input
                  type="text"
                  value={this.state.id}
                  onChange={e => this.setState({ formID: e.target.value })}
                />
                <p />
                Please insert investor ID:
                <input
                  type="text"
                  value={this.state.INV}
                  onChange={e => this.setState({ inID: e.target.value })}
                />
                <p/>
                <dev>
          <p>{this.state.responseToPost}</p>
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
            </dev>
            <dev>
            <p>{this.state.responseToPost}</p>
            companyNameEng:
            <input
              type="text"
              value={this.state.companyNameEng}
              onChange={e => this.setState({ companyNameEng: e.target.value })}
            />
              </dev>
              <dev>
            <p>{this.state.responseToPost}</p>
            addresscompanyType:
            <input
              type="text"
              value={this.state.addresscompanyType}
              onChange={e => this.setState({ addresscompanyType: e.target.value })}
            />
              </dev>
              <dev>
            <p>{this.state.responseToPost}</p>
            governorate:
            <input
              type="text"
              value={this.state.addresscompanyType}
              onChange={e => this.setState({ addresscompanyType: e.target.value })}
            />
              </dev>
              <dev>
            <p>{this.state.responseToPost}</p>
            telephone:
            <input
              type="text"
              value={this.state.telephone}
              onChange={e => this.setState({ city: e.target.telephone })}
            />
              </dev>
              <dev>
            <p>{this.state.responseToPost}</p>
            address:
            <input
              type="text"
              value={this.state.address}
              onChange={e => this.setState({ city: e.target.address })}
            />
              </dev>
              <dev>
              <p>{this.state.responseToPost}</p>
              fax:
              <input
                type="text"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />
                </dev>
                <dev>
                <p>{this.state.responseToPost}</p>
                currency:
                <input
                  type="text"
                  value={this.state.currency}
                  onChange={e => this.setState({currency :e.target.value })}
                />
                  </dev>
                  <dev>
                <p>{this.state.responseToPost}</p>
                entityType:
                <input
                  type="text"
                  value={this.state.entityType}
                  onChange={e => this.setState({entityType :e.target.value })}
                />
                <button
            type="submit"
            onClick={e => {
              this.fillForm(e);
            }}
          >
            submit
          </button>
                  </dev>
                </div>
                )}
            }
    //         companyName: "",
    //   companyNameEng: "",
    //   addresscompanyType: "",
    //   headquarters: {
    //     governorate: "",
    //     city: "",
    //     address: "",
    //     telephone: "",
    //     fax: ""
    //   },
    //   financialInfo: {
    //     currency: "",
    //     capital: ""
    //   },
    //    entityType: "",
    //    lawyer: "",
    //    lawyerComment: "",
    //    lawyerDecision:"",
    export default LawyerFillForm;