import React from 'react';
import ReactDOM from 'react-dom';
import RandomGame, { App, App2 } from './App';
import Caculate from './caculate/Caculate'
import JsxExtend from './jsxextend/JsxExtend'
import Parent from './lifecycle/Parent'
import Auth from './authen/App'
import Children from './children/Children'
import MyComponent from './class-func-component/MyComponent'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render( <RandomGame user_name="admin" />, document.getElementById('root'));
// ReactDOM.render( <Parent user_name="admin" />, document.getElementById('root'));
ReactDOM.render( <MyComponent />, document.getElementById('root'));
// ReactDOM.render( <JsxExtend />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();