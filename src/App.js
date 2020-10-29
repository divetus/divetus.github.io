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
       <Router><div className="wrapper">
           <Sidebar/>
           <div className="zoomWrapper">
            <Navbar/>
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact/>
                <Route path={process.env.PUBLIC_URL + '/ToS'} component={ToS}/>
                <Route path={process.env.PUBLIC_URL + '/Commissions'} component={Commissions}/>
                <Route path={process.env.PUBLIC_URL +'/Gallery'} component={Gallery}/>
                <Route component={Error}/>
            </Switch>
           </div>
           </div>
       </Router>

    );
}

export default App;