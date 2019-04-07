// import React, { Component } from 'react';
// // import { SearchBar } from 'react-native-elements';
// // import React from 'react';
// import PropTypes from 'prop-types';
// // import TypeChecker from 'typeco';


// const ENTER_KEY = 13;
// const SEARCH_BUTTON_EDGE = 35;

// const searchFieldStyle = {
//   border: '1px #ddd solid',
//   display: 'inline-flex',
//   justifyContent: 'space-between',
//   height: SEARCH_BUTTON_EDGE,
// };

// const searchFieldButtonStyle = {
//   height: SEARCH_BUTTON_EDGE - 2, // reduces 2px because of top and bottom border
//   width: SEARCH_BUTTON_EDGE - 2,
//   outline: 'none',
//   backgroundColor: 'white',
//   cursor: 'pointer',
//   padding: 5,
//   boxSizing: 'border-box',
//   appearance: 'none',
//   border: 'none',
//   borderLeft: '1px #ddd solid',
// };

// const searchFieldInputStyle = {
//   outline: 'none',
//   border: 'none',
//   fontSize: 14,
//   padding: 10,
//   flex: 1,
//   color: '#5a5a5a',
//   fontWeight: 100,
//   height: SEARCH_BUTTON_EDGE - 2,
// };

// const SearchIcon = () => {
//   const iconEdge = Math.ceil(SEARCH_BUTTON_EDGE * 0.60);
//   const searchIconStyle = {
//     fill: '#727272',
//   };
//   return (
//     <svg
//       version="1.1"
//       x="0px"
//       y="0px"
//       width={iconEdge}
//       height={iconEdge}
//       viewBox="0 0 635 635"
//       style={searchIconStyle}
//     >
//       <g>
//         <path d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
//           c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
//           c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
//           C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
//           c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"
//         />
//       </g>
//     </svg>
//   );
// };



// class searchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: this.props.searchText,
//         };
    
//         this.onChangeBound = this.onChangeBound.bind(this);
//         this.onEnterBound = this.onEnterBound.bind(this);
//         this.onSearchClick = this.onSearchClick.bind(this);
//     }


//  componentDidMount() {

//    fetch('api/internalPortal')
//    .then(res=>res.json())
//    .then(json=>{
//      this.setState({
//    isLoaded:true,
//    response:json,
//      })
//    })
//  }

//  componentWillReceiveProps(nextProps) {
//     if (this.props.searchText !== nextProps.searchText) {
//       this.setState({
//         value: nextProps.searchText,
//       });
//     }
//   }

//   onChangeBound(event) {
//     this.setState({
//       value: event.target.value,
//     });
    
//       this.props.onChange(event.target.value, event);
    
//   }

//   onEnterBound(event) {
//     const isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
//     if (isEnterPressed) {
//       this.props.onEnter(event.target.value, event);
//     }
//   }

//   onSearchClick() {
  
//       this.props.onSearchClick(this.state.value);
    
//   }

 
//  render() {
   
//   return <div>Loading...</div>


// // const {
// //     classNames,
// //     placeholder,
// //   } = this.props;
// //   const className = `searchBar ${classNames}`;

// //   return (
// //     <div
// //       className={className}
// //       style={searchFieldStyle}
// //     >
// //       <input
// //         className="react-search-field-input"
// //         style={searchFieldInputStyle}
// //         onChange={this.onChangeBound}
// //         onKeyPress={this.onEnterBound}
// //         placeholder={placeholder}
// //         type="text"
// //         value={this.state.value}
// //       />
// //       <button
// //         className="react-search-field-button"
// //         type="button"
// //         style={searchFieldButtonStyle}
// //         onClick={this.onSearchClick}
// //       >
// //         <SearchIcon />
// //       </button>
// //     </div>
// //   );
// // }
// // }

// // searchBar.propTypes = {
// // classNames: PropTypes.string,
// // searchText: PropTypes.string,
// // placeholder: PropTypes.string,
// // onChange: PropTypes.func,
// // onEnter: PropTypes.func,
// // onSearchClick: PropTypes.func,
// // };

// // searchBar.defaultProps = {
// // classNames: '',
// // searchText: '',
// // placeholder: 'Search',
// // onChange: null,
// // onEnter: null,
// // onSearchClick: null,
// }};



// export default searchBar


// import React, { Component } from 'react';
// import { Table } from 'reactstrap';

// class searchBar extends React.Component {
//   state = {
//     query: "",
//     orgData: [],
//     filteredData: []
//   };

//   handleInputChange = event => {
//     const query = event.target.value;

//     this.setState(prevState => {
//       const filteredData = prevState.data.filter(element => {
//         return element.name.toLowerCase().includes(query.toLowerCase());
//       });

//       return {
//         query,
//         filteredData
//       };
//     });
//   };

//   getData = () => {
//     // fetch(`api/form/search`)
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     const { query } = this.state;
//     //     const filteredData= data.filter(element => {
//     //       return element.name.toLowerCase().includes(query.toLowerCase());
//     //     });

//     //     this.setState({
//     //       data : data,
//     //       filteredData :filteredData 
//     //     });
//     //   });
//     fetch('api/form/search')
//     .then(res=>res.json())
//     .then(json=>{
//       this.setState({
//     orgData:json,
//     filteredData:json,
//       })
//     })
 
//   };

//   componentWillMount() {
//     this.getData();
//   }

//   render() {
//     var {filteredData,query,orgData } = this.state;
//     return (
//       <div className="searchBar">
//         <form>
//           <input
//             placeholder="Search for..."
//             value={this.state.query}
//             onChange={this.handleInputChange}
//           />
//         </form>
//         <div>{orgData.data.map(i => <p>{i.name}</p>)}</div>
//        <Table dark hover bordered >
//        <thead>
//          <tr>
//          <th> ID</th>
//            <th> companyName </th>
//            <th> companyNameEng  </th>
//            <th> companyType </th>
//            {/* <th> governorate  </th> */}
//            {/* <th> city </th>
//            <th> address </th>
//            <th> telephone </th>
//            <th> fax </th>
//            <th> currency </th>
//            <th> capital </th> */}
//            <th> entityType </th>
//            <th> regulatedLaw </th>
//            <th> investor </th>
//            <th> lawyer </th>
//            <th> lawyerComment </th>
//            <th> lawyerDecision </th>
//            <th> reviewer </th>
//            <th> feesCalculation </th>
//            <th> reviwerComment </th>
//            <th> reviewerDecision </th>
//            <th> dateOfApproval </th>
//            <th> amountOfPayment </th>
//            <th> dateOfPayment </th>
//            <th> paymentId </th>
//            <th> formStatus </th>
//            {/* <th> board </th> */}
          
           
//          </tr>
//        </thead>
//        <tbody>
//          {orgData.data.map(
//            (x,key)=> <tr>
//             <td> {key=x._id}</td>
//              <td>{x.companyName}</td>
//              <td>{x.companyNameEng}</td>
//              <td>{x.companyType}</td>         
//              {/* <td>{x.headquarters}</td> */}
//              {/* <td>{x.city}</td>
//              <td>{x.address}</td>
//              <td>{x.telephone}</td>
//              <td>{x.fax}</td>
//              <td>{x.currency}</td>
//              <td>{x.capital}</td> */}
//              <td>{x.entityType}</td>
//              <td>{x.regulatedLaw}</td>
//              <td>{x.investor}</td>
//              <td>{x.lawyer}</td>
//              <td>{x.lawyerComment}</td>
//              <td>{x.lawyerDecision}</td>
//              <td>{x.reviewer}</td>
//              <td>{x.feesCalculation}</td>
//              <td>{x.reviwerComment}</td>
//              <td>{x.reviewerDecision}</td>
//              <td>{x.dateOfApproval}</td>
//              <td>{x.amountOfPayment}</td>
//              <td>{x.dateOfPayment}</td>
//              <td>{x.paymentId}</td>
//              <td>{x.formStatus}</td>
//              {/* <td>{x.board}</td> */}
//              </tr>
             
//          )}
       
//        </tbody>
//      </Table>
//      </div>


//     );
//   }
// }
// export default searchBar;





import React, { Component } from 'react';
import { Table } from 'reactstrap';
var _ = require('lodash');
// var filter = require('lodash.filter');
const bodyParser=require('body-parser');
class searchBar extends React.Component {
  state = {
    query: "",
    orgData: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;
    // console.log("hena")
    this.setState(prevState => {
         const filteredData = _.filter(prevState.orgData,element => {
          return element.some((v)=> v===query);
        });
    //  console.log("hena")

      return {
        query: query,
        filteredData: filteredData
      };
    });
  };

  getData = () => {
     fetch(`api/form/search`)
      .then(response => response.json())
      .then(response => {
        const { query } = this.state;
        const filteredData = _.filter(response,element => {
          return element.some((v)=> v===query);
        });

        this.setState({
           orgData : response,
          filteredData: filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."S
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
      </div>
    );
  }
 
}
export default searchBar
