import React, { Component } from "react";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
import { Table } from "reactstrap";

class LawyerFillForm extends Component {
  Auth = new AuthHelperMethods();
  state = {
    companyName: "",
    companyNameEng: "",
    companyType: "",
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
    board: [],
    regulatedLaw: "",
    inID: "",
    id: "",
    responseToPost: "",
    b: {
      name: "",
      gender: "",
      investorType: "",
      nationality: "",
      idType: "",
      id: "",
      dateOfBirth: "",
      addressOB: "",
      title: ""
    }
  };
  addBoard = e => {
    let name = this.state.name;
    let gender = this.state.gender;
    let investorType = this.state.investorType;
    let nationality = this.state.nationality;
    let idType = this.state.idType;
    let id = this.state.id;
    let dateOfBirth = this.state.dateOfBirth;
    let addressOB = this.state.addressOB;
    let title = this.state.title;
    //let board=this.state.board;

    if (
      name != "" &&
      gender != "" &&
      investorType != "" &&
      nationality != "" &&
      idType != "" &&
      id != "" &&
      dateOfBirth != "" &&
      addressOB != "" &&
      title != ""
    ) {
      // this.setState({...this.state.b, name:name,gender:gender,investorType:investorType,nationality:nationality,idType:idType,id:id,dateOfBirth:dateOfBirth,address:address
      // ,title:title });
      console.log(name);
      //   this.setState(prevState => ({
      //     b: {
      //         ...prevState.b,
      //         name: name
      //     }
      // }))
      // const { b } = { ...this.state };
      // const currentState = b;

      // currentState[name] = name;
      var b = { ...this.state.b };
      b.name = name;
      b.gender = gender;
      b.investorType = investorType;
      b.nationality = nationality;
      b.idType = idType;
      b.id = id;
      b.dateOfBirth = dateOfBirth;
      b.addressOB = addressOB;
      b.title = title;
      this.setState({ b });
      console.log(b);
      // this.setState({ b: currentState });
      //   console.log(this.state.b);
      // this.setState({
      //   board: this.state.board.concat()
      // })
      // this.setState(prevState => ({
      //   board: [...prevState.myArray, b]
      // }))
      var joined = this.state.board.push(this.state.b);
      this.setState({ board: joined });
      console.log(this.state.board);
    }
  };
  fillForm = async e => {
    e.preventDefault();
    const response = await this.Auth.fetch("api/lawyer/createForm/", {
      method: "POST",
      body: JSON.stringify({
        lawyerId: this.Auth.getConfirm().id,
        companyName: this.state.companyName,
        companyNameEng: this.state.companyNameEng,
        companyType: this.state.companyType,
        headquarters: {
          governorate: this.state.governorate,
          city: this.state.city,
          address: this.state.address,
          telephone: this.state.telephone,
          fax: this.state.fax
        },
        financialInfo: {
          currency: this.state.currency,
          capital: this.state.capital
        },
        regulatedLaw: this.state.regulatedLaw,
        entityType: this.state.entityType,
        board: this.state.board
      })
    }).catch(err => {
      this.setState({ responseToPost: err });
    });
    const body1 = await response.text();
    this.setState({ responseToPost: body1 });
  };
  render() {
    return (
      <div className="LawyerFillForm">
        <br />
        <br />
        <div>
          Please insert investor ID:
          <input
            type="text"
            value={this.state.inID}
            onChange={e => this.setState({ inID: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          companyName:
          <input
            type="text"
            value={this.state.companyName}
            onChange={e => this.setState({ companyName: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          companyNameEng:
          <input
            type="text"
            value={this.state.companyNameEng}
            onChange={e => this.setState({ companyNameEng: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          companyType:
          <input
            type="text"
            value={this.state.companyType}
            onChange={e => this.setState({ companyType: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          governorate:
          <input
            type="text"
            value={this.state.governorate}
            onChange={e => this.setState({ governorate: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          city:
          <input
            type="text"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          telephone:
          <input
            type="text"
            value={this.state.telephone}
            onChange={e => this.setState({ telephone: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          address:
          <input
            type="text"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          fax:
          <input
            type="text"
            value={this.state.fax}
            onChange={e => this.setState({ fax: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          currency:
          <input
            type="text"
            value={this.state.currency}
            onChange={e => this.setState({ currency: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          capital:
          <input
            type="text"
            value={this.state.capital}
            onChange={e => this.setState({ capital: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          entityType:
          <input
            type="text"
            value={this.state.entityType}
            onChange={e => this.setState({ entityType: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div>
          regulatedLaw:
          <input
            type="text"
            value={this.state.regulatedLaw}
            onChange={e => this.setState({ regulatedLaw: e.target.value })}
          />
        </div>
        Board of members
        <div>
          name:
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          geneder:
          <input
            type="text"
            value={this.state.gender}
            onChange={e => this.setState({ gender: e.target.value })}
          />
        </div>
        <div>
          investorType:
          <input
            type="text"
            value={this.state.investorType}
            onChange={e => this.setState({ investorType: e.target.value })}
          />
        </div>
        <div>
          nationality:
          <input
            type="text"
            value={this.state.nationality}
            onChange={e => this.setState({ nationality: e.target.value })}
          />
        </div>
        <div>
          idType:
          <input
            type="text"
            value={this.state.idType}
            onChange={e => this.setState({ idType: e.target.value })}
          />
        </div>
        <div>
          id:
          <input
            type="text"
            value={this.state.id}
            onChange={e => this.setState({ id: e.target.value })}
          />
        </div>
        <div>
          dateOfBirth:
          <input
            type="text"
            value={this.state.dateOfBirth}
            onChange={e => this.setState({ dateOfBirth: e.target.value })}
          />
        </div>
        <div>
          address of board member:
          <input
            type="text"
            value={this.state.addressOB}
            onChange={e => this.setState({ addressOB: e.target.value })}
          />
        </div>
        <div>
          title:
          <input
            type="text"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" onClick={this.addBoard}>
            submit a board member
          </button>
        </div>
        <br />
        <br />
        <div>
          <button type="submit" onClick={this.fillForm}>
            submit
          </button>
        </div>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
export default LawyerFillForm;
