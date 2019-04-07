import React, { Component } from "react";
// import { Table } from "reactstrap";
class comRule extends Component {
  render() {
    return (
      <dev className="rule">
        <p>
          1: SSC Minimum Capital Limit is 50,000 EGP
          <br />> 2: SSC Must have at least One Egyptian Manager, In case
          Founder/Investor is from Foreign Country
          <br />
          3: SPC Minimum Capital Limit will be 100,000 EGP in case of Foreign
          Investor Only,Otherwise there is No Capital Limit <br />
          4: SSC and SPC can Only have One Investor as their Founder 5: SPC
          doesn't have any Managers
          <br /> 6: Both SPC and SSC must have Unique Company Name (Company
          Names can't be Repeated)
          <br /> 7: SSC can't have the same investor founder to Multiple SSC
          Companies <br />
          8: Each Request must have a Unique auto generated Case ID <br />
          9: A Contract will be Generated for SSC Companies after Lawyer Fills
          Form. The generated form is in pdf format and this Is the file to be
          sent to external entities <br />
          10:A Decision will be Generated for SPC Companies after Lawyer Fills
          Form.The generated form is in pdf format and this Is the file to be
          sent to external entities
          <br />
          11:The Lawyer has the option to Regenerate Documents after editing
          anything in the Form <br />
          12:Fees will be calculated at the Lawyer's Step and Lawyer can
          Recalculate Fees afterediting the Form
          <br /> 13:Each Company after the Approval of the Reviewer will have an
          Electronic Journal(Same as Contract/Decision) and will be displayed in
          a Separate View at the Portal <br />
          14:The UI of the application forms has to be rendered by a given JSON
          Object that shows the required fields and their types
        </p>
      </dev>
    );
  }
}
export default comRule;
