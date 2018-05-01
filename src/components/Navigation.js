import React from "react";
import { NavLink } from "react-router-dom";
import {API_TITLE_NAME} from "../config/config_rest"

const Navigation = () => (
  <nav
    className="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand" >
       <a href="/" className="navbar-item"><h1>{API_TITLE_NAME}</h1></a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
         <NavLink className="navbar-item"  exact activeClassName="current" to="/">Home</NavLink>
        <a href="/Contact" className="navbar-item">Contact</a>
        <a href="/about" className="navbar-item">About</a>
        </div>
      </div>
    </div>
  </nav>
);
export default Navigation;
