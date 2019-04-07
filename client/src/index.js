import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/homepage';
import Case from './pages/LRspecificCase';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<HomePage />, document.getElementById('root'));
ReactDOM.render(<Case />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();