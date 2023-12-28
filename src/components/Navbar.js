import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logout from "./Logout";
function Navbar() {
  let location = useLocation();

  useEffect(() => {
    // console.log(location,"lcoatiion of route")
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          INoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/" ? `nav-link active` : `nav-link`
                }
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/about"
                    ? `nav-link active`
                    : `nav-link`
                }
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

         {!localStorage.getItem('token') ?<form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">
              Signup
            </Link>
          </form>:<Logout/>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
