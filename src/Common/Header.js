import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  
  return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <span className="navbar-brand">Shop</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/">Product</Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/Cart">Cart</Link>
                  </span>
                </li>
              </ul>
          </div>
        </nav>
      </div>
  );
};
export default Header;