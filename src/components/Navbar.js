import React from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.css';

function Navbar() {
  return(
      <div className="navbar-container">
      <nav className="navbar">
              <NavLink exact to="/" className="navbarLink" activeClassName="active">HOME</NavLink>
              <NavLink exact to="/tos" className="navbarLink" activeClassName="active">TOS</NavLink>
              <NavLink exact to="/commissions" className="navbarLink" activeClassName="active">COMMISSIONS</NavLink>
              <NavLink exact to="/gallery" className="navbarLink" activeClassName="active">GALLERY</NavLink>
      </nav>
          <hr className="navbarline"/>
      </div>
  );
}

export default Navbar;