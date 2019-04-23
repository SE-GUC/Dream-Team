import React, { Component } from "react";
import { Table } from "reactstrap";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import withAuth from "../../components/withAuth";
import feesCalc from "../../components/feesCalc/feesCalc";
import formsOfLawyer from "../../components/formsOfLawyer/formsOfLawyer";
import formTable from "../../components/formTable";
import lawyerFinalizedCases from "../../components/lawyerFinalizedCases/lawyerFinalizedCases";
// import Tableform from '../../components/formTable';
import searchBar from "../../components/searchBar";
import viewAllInvestors from "../../components/viewAllInvestors/viewAllInvestors";
import "../homepage/homepage.css";

class lawyer extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  // publishedCompanies() {
  //   this.props.history.push("/publishedCompanies");
  // }
  viewAllForms() {
    this.props.history.push("/viewAllForms");
  }
  LawyerFillForm() {
    this.props.history.push("/LawyerFillForm");
  }
  lawyerFinalizedCases() {
    this.props.history.push("/lawyerFinalizedCases");
  }
  formsOfLawyer() {
    this.props.history.push("/formsOfLawyer");
  }
  lawyerview() {
    this.props.history.push("/Lawyershowmyforms");
  }
  assignLaw() {
    this.props.history.push("/assignLaw");
  }
  lawyerfilter() {
    this.props.histroy.push("/filterCase");
  }
  lawUp() {
    this.props.history.push("/lawyerUpdate");
  }
  render() {
    return (
      <div className="HomePage">
        <div className="App-header">
          <h2>Welcome Home</h2>
        </div>
        <div>
          lawyer fill form
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.LawyerFillForm();
            }}
          >
            lawyer fill form
          </button>
        </div>
        <div>
          To view lawyer form push here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerview();
            }}
          >
            Click to show
          </button>
        </div>
        <div>
          assign a lawyer
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.assignLaw();
            }}
          >
            Click to assign
          </button>
        </div>
        {/* To view publishedCompanies click here
        <button
          className="btn btn-primary width-150"
          onClick={e => {
            this.publishedCompanies();
          }}
        /> */}
        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.formsOfLawyer();
            }}
          >
            View Forms of Lawyer
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerFinalizedCases();
            }}
          >
            View Lawyers Finalized Cases
          </button>
        </div>
        <div>
          To view all forms
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewAllForms();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          Lawyer Update Form
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawUp();
            }}
          >
            Click to Update
          </button>
        </div>
      </div>
    );
  }
}
export default lawyer;
