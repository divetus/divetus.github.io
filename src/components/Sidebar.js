import React from 'react';

import './Desktop.css';
import { NavLink} from "react-router-dom";

export default function Sidebar() {
    return(
        <>
            <div className="sidebar-container">
             <div className="sidebar">
                <h1 className="Logotext"><NavLink exact to="/" id="headerDivetus">DIVETUS</NavLink></h1>
                <hr class="hrSidebar"/>
                <img src='/logo.png' alt="logo"/>
             </div>
                <div className='vertical'></div>
            </div>
        </>
    );
}