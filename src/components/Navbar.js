import React from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.css';

function Navbar() {
  return(
      <>
      <nav className="navbar">
          <div className="navbar-container">
              <NavLink exact to="/" className="navbarLink" activeClassName="active">HOME</NavLink>
              <NavLink exact to="/tos" className="navbarLink" activeClassName="active">TOS</NavLink>
              <NavLink exact to="/commissions" className="navbarLink" activeClassName="active">COMMISSIONS</NavLink>
              <NavLink exact to="/gallery" className="navbarLink" activeClassName="active">GALLERY</NavLink>
          </div>
      </nav>
          <hr/>
      </>
  );
}

export default Navbar;