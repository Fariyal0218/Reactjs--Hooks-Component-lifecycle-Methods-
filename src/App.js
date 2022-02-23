import React from 'react';
//import { BrowserRouter } from "react-router-dom";
import ContextDemo from "./component/ContextDemo";
import About from "./reactrouter/About";
//import Home from "./reactrouter/Home";
import Services from "./reactrouter/Services";

 //import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import Navigate from './component/Navigate';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import AddCounter from './AddCounter';
import Counter from './Counter';
function App(){
  return(
    <div className="App">
      {/* <BrowserRouter>                       //react-router folder code
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">Aboute</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    
      <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    </Routes>  
    <ContextDemo/>
    </BrowserRouter>    */}

   {/* <BrowserRouter>                            //Navigate and homejs code         
   <Routes>
   <Route path="/" element={<Navigate/>} />
    <Route path="/home" element={<Home/>} />
   </Routes>
   </BrowserRouter> */}
   <AddCounter/>
   <Counter/>
    </div>
  );
}
 export default App;


