import React, { Component } from "react";
import { Table } from "reactstrap";
import updateTest from "../updateTest";

class viewRejectedForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      isLoaded: false,
      update: true
    };
  }

  componentDidMount() {
    fetch("api/internalPortal/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          response: json
        });
      });
  }
  update(formId, investorId) {
    this.props.history.push("/update");
  }

  //   showUpdate() {
  //     alert("dalia");
  //     if (this.state.update) {
  //       alert("fi  amaaaal");
  //       return <updateTest />;
  //     }
  //     alert("mafish fayda");
  //   }

  render() {
    var { response, isLoaded } = this.state;
    let x;
    if (this.state.update) x = <updateTest />;
    else x = <br />;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="formTable">
          <Table dark hover bordered>
            <thead>
              <tr>
                <th>headquarters</th>
                <th> ID</th>
                <th> companyName </th>
                <th> entityType </th>
                <th> regulatedLaw </th>
                <th> investor </th>
                <th> formStatus </th>
                <th> board </th>
                <th> __v </th>
                <th> lawyer </th>
                <th> lawyerDecision </th>
                <th> amountOfPayment </th>
                <th> update </th>

                {/* <th> board </th> */}
              </tr>
            </thead>
            <tbody>
              {response.data.map((x, key) => (
                <tr>
                  <td> {(key = x._id)}</td>
                  <td>{x.companyName}</td>
                  <td>{x.entityType}</td>
                  <td>{x.regulatedLaw}</td>
                  <td>{x.investor}</td>
                  <td>{x.formStatus}</td>
                  <td>{x.board}</td>
                  <td>{x.__v}</td>
                  <td>{x.lawyer}</td>
                  <td>{x.lawyerDecision}</td>

                  <td>{x.amountOfPayment}</td>
                  <td>
                    {
                      <button
                        className="btn btn-primary width-150"
                        onClick={e => {
                          this.update(x._id, x.investor);
                        }}
                      >
                        Click to view
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>{x}</div>
        </div>
      );
    }
  }
}

export default viewRejectedForms;
