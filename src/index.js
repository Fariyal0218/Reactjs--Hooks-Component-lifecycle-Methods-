import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './component/Form';
import ParentComponent from './component/ParentComponent';
import Register from './component/Register';
import Success from './component/Success';
import PropsDemo from './component/PropsDemo';
import ComponentLifeCycle from './component/ComponentLifeCycle';
import UseEffectHook from './component/UseEffectHook';
import StateDemo1 from './component/StateDemo1';
import StateDemo2 from './component/StateDemo2';
import FormData from './component/FormData';
import ReactServices from './component/ReactServices';
import PostRequest from './component/PostRequest';

ReactDOM.render(
<App/>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
