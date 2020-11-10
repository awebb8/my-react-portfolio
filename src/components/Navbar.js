import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/about" className="navbar-brand">Alix Webb</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar;