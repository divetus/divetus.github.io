import React from 'react';

import './Desktop.css';

export default function Sidebar() {
    return(
        <>
            <div className="sidebar-container">
             <div className="sidebar">
                <h1 className="Logotext">DIVETUS</h1>
                <hr class="hrSidebar"/>
                <img src='/logo.png' alt="logo"/>
             </div>
                <div className='vertical'></div>
            </div>
        </>
    );
}