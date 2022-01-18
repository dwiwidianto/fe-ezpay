import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EZPAY
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products/pln" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

