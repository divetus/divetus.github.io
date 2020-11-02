import React from 'react';
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Desktop.css';


export default function Sidebar() {
    return(
        <>
            <div className="sidebar-container">
             <div className="sidebar">
                <h1 className="Logotext"><NavLink exact to="/" id="headerDivetus">DIVETUS</NavLink></h1>
                <hr className="hrSidebar"/>
                <img src='/logo.png' alt="logo"/>
                <p className="profileDescription">Freelance Artist & Designer</p>
                 <div className="sidebarIcons"><a data-tip="Discord ID copied" data-event="click focus">
                     <FontAwesomeIcon className="faIcons" title="Copy discord ID" icon={faDiscord}
                                      onClick={() => {navigator.clipboard.writeText("Divetus#5806")}}/></a>
                 <ReactTooltip className="customTooltip"
                               isCapture={true}
                               place={'bottom'}
                               globalEventOff='click'/>
                     <FontAwesomeIcon className="faIcons" icon={faInstagram} onClick={() => window.open("http://instagram.com/divetus", "_blank")}/>
                     <FontAwesomeIcon className="faIcons" icon={faTwitch} onClick={() => window.open("http://twitch.tv/divetus", "_blank")}/>
                     <FontAwesomeIcon className="faIcons" icon={faTwitter} onClick={() => window.open("http://twitter.com/divetus", "_blank")}/></div>
                 <p className="commissionStatusText"> Commission Status: <span className="commissionStatusState">OPEN</span></p>
                 <button className={"buttonStyle email"} onClick={()=> window.open("mailto: divetus@gmail.com")}>E-MAIL</button><br/>
                 <button className={"buttonStyle schedule"} onClick={() => window.open("https://trello.com/b/7RAyAub3/twitch-commissions", "_blank")}>SCHEDULE</button>
             </div>
            </div>
                <div className='vertical'></div>
        </>
    );
}
