import React from "react";
import "./nav.css";
import { FaFingerprint } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <ul className="navbar-links">

              <div className="col-xl-6">
              <li className="nav-item">
                  
                <FaFingerprint className="finger" />
                </li>
              </div>
              <div className="col-xl-6">
              <li className="nav-item">
                <h4 className="name">Ansh</h4>
                </li>
                
              </div>
              </ul>
            </div>
            </div>
          <div className="col-xl-6 ">
            <ul className="navbarlinks navbar-links ">
              <li className="nav-item">
                {" "}
                <a className="item navhome">Home</a>{" "}
              </li>
              <li className="nav-item">
                <a className="item navproduct ">Product</a>
              </li>
              <li className="nav-item">
                <a className="item navservice">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
