import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a
          class="navbar-brand"
          style={{
            marginLeft: "50px",
          }}
        >
          CHMS
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link " to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/contactform">
                Contact Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/resetpassword" element={<Nav />}></Route>
        <Route path="/login" element={<Nav />}></Route>
        <Route path="/signup" element={<Nav />}></Route>
        <Route path="/loginasAdmin" element={<Nav />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Navbar;
