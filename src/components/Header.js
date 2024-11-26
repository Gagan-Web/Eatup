import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducers";

const Header = () => {
  let data = useCart();
  const [cartView, setcartView] = useState(false);
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  const loadCart = () => {
    setcartView(true);
  };
  const items = useCart();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#343A40" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif", // Add Google Font
          }}
        >
          <span
            className="me-2 display-3 fw-bold"
            style={{
              color: "#ff5722", // Bright orange for "Go"
              textShadow: "3px 3px 7px rgba(0,0,0,0.5)", // Enhance shadow effect
              fontFamily: "'Pacifico', cursive", // Google Font for a creative look
            }}
          >
            Eat
          </span>
          <span
            className="display-4 fw-semibold"
            style={{
              color: "#4caf50", // Vibrant green for "Food"
              textShadow: "3px 2px 6px rgba(0,0,0,0.5)", // Consistent shadows
              fontFamily: "'Poppins', sans-serif", // Clean font for contrast
            }}
          >     
        Up
          </span>
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
          <ul className="navbar-nav me-auto mb-1">
            <li className="nav-item">
              <Link
                className="nav-link pt-3 fs-4 ps-4 active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link
                  className="nav-link pt-3 fs-4 ps-4 active text-white"
                  aria-current="page"
                  to="/myOrder"
                >
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1 " to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-white text-success mx-2"
                onClick={loadCart}
              >
                {/* My Cart{" "} */}
                <Badge color="secondary" badgeContent={items.length}>
                  Add to Cart
                </Badge>
              </div>

              {cartView ? (
                <Modal onClose={() => setcartView(false)}>
                  <Cart />
                </Modal>
              ) : (
                ""
              )}
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handlelogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
