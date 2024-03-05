import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authtoken"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("authtoken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fs-italic" to="#">
            Foodie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5 btn bg-white text-success mx-1 rounded-pill"
                  aria-current="page"
                  to="/"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>

              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className=""
                    to="/cart"
                  >
                    
                  </Link>
                </li>
              )}
            </ul>
            {!isLoggedIn ? (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1 rounded-pill"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1 rounded-pill"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  className="btn bg-white text-success mx-2 rounded-pill"
                  to="/cart"
                >
                  My Cart
                </Link>
                <div
                  className="btn bg-white text-success mx-2 rounded-pill"
                  onClick={handleLogout}
                >
                  LogOut
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
