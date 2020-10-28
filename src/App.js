import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Commissions from "./components/Commission";
import Gallery from "./components/Gallery";
import ToS from "./components/ToS";
import Error from "./components/Error";
import Sidebar from "./components/Sidebar";

import './App.css';

function App () {
    return(
       <Router>
           <Sidebar/>
            <Navbar/>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact/>
                <Route path={process.env.PUBLIC_URL + '/tos'} component={ToS}/>
                <Route path={process.env.PUBLIC_URL + '/commissions'} component={Commissions}/>
                <Route path={process.env.PUBLIC_URL + '/gallery'} component={Gallery}/>
                <Route component={{Error}}/>
            </Switch>
       </Router>
    );
}

export default App;