import React, { useState } from "react";
import style from "./Button.module.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { accessToken } = useSelector((state) => state.auth);

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

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
            <Link to="/products/pln" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-links" onClick={closeMobileMenu}>
              History Transaction
            </Link>
          </li>
        </ul>
        {accessToken !== "" && (
          <button onClick={logoutHandler} className={style.btn}>
            Logout
          </button>
        )}
        {accessToken === "" && (
          <Link to="/login">
            <button className={style.btn}>Login</button>
          </Link>
        )}
      </nav>
    </>
  );
}
