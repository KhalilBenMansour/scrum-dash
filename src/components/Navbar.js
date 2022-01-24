import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="logo" style={{ fontSize: "20px", color: "white" }}>
            SCRUMDASH
          </div>
          <div className="links">
            <span className="icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
