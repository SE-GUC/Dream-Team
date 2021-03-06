import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
import React, { Component } from "react";
import { Table } from "reactstrap";
import LawyerUpdateForm from "../lawyerUpdateForm/lawyerUpdateForm";
const axios = require("axios");

class LawyerUpdate extends Component {
  Auth = new AuthHelperMethods();
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false,
      update: true,
      componentCall: "",
      id: ""
    };
  }
  componentDidMount() {
    this.Auth.fetch("api/lawyer/form/" + this.state.id)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }
  handleUpdate = async e => {
    e.preventDefault();

    await document.getElementById("myTable1").addEventListener("click", evt => {
      var btn = evt.target;
      console.log(btn.tagName);
      if (btn.tagName === "BUTTON") {
        var row = btn.parentNode.parentNode; //td than tr
        var cells = row.getElementsByTagName("td"); //cells
        //    console.log(cells[0].textContent, cells[1].textContent);
        this.setState({ id: cells[0].textContent });
      }
    });
  };
  // componentDidMount() {
  //   axios

  //     .get("http://localhost:5000/api/lawyer/5ca0c1466a36eb47ec6db2a1")

  //     .then(res => {
  //       const response = res.data;
  //       this.setState({ response: response });
  //       this.setState({ isLoaded: true });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  update(
    formId,
    lawyerId,
    companyName,
    address,
    city,
    governorate,
    telephone,
    fax,
    currency,
    capital,
    companyNameEng,
    board
  ) {
    // this.props.history.push("/update");
    this.setState({
      componentCall: (
        <LawyerUpdateForm
          formId={formId}
          lawyerId={lawyerId}
          companyName={companyName}
          address={address}
          city={city}
          governorate={governorate}
          telephone={telephone}
          fax={fax}
          currency={currency}
          capital={capital}
          companyNameEng={companyNameEng}
          board={board}
        />
      )
    });
  }
  render() {
    var { response, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="formTable">
          <Table dark hover bordered id="myTable1">
            <thead>
              <tr>
                <th> address</th>
                <th> city </th>
                <th> governorate </th>
                <th> telephone </th>
                <th> Fax </th>
                <th> currency </th>
                <th> capital </th>
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
                <th> formType </th>
                <th> Board </th>
                <th> Update </th>
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td> {x.headquarters.address}</td>
                  <td> {x.headquarters.city}</td>
                  <td> {x.headquarters.governorate}</td>
                  <td> {x.headquarters.telephone}</td>
                  <td> {x.headquarters.fax}</td>
                  <td> {x.financialInfo.currency}</td>
                  <td> {x.financialInfo.capital}</td>

                  <td> {x._id}</td>
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
                  <td>{x.formType}</td>
                  <td>{x.board}</td>
                  <td>
                    {
                      <button
                        className="btn btn-primary width-150"
                        onClick={e => {
                          this.update(
                            x._id,
                            x.lawyer,
                            x.companyName,
                            x.headquarters.address,
                            x.headquarters.city,
                            x.headquarters.governorate,
                            x.headquarters.telephone,
                            x.headquarters.fax,
                            x.financialInfo.currency,
                            x.financialInfo.capital,
                            x.companyNameEng,
                            x.board
                          );
                        }}
                      >
                        Click to update
                      </button>
                    }
                    <td>
                      <button onClick={this.handleUpdate}>
                        Submit The Update
                      </button>
                    </td>
                  </td>
                  <td />
                </tr>
              ))}
            </tbody>
          </Table>
          <div>{this.state.componentCall}</div>
        </div>
      );
    }
  }
}

export default withAuth(LawyerUpdate);
