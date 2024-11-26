import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <footer
        className="d-flex justify-content-between align-items-center py-3 my-0 border-top bg-dark text-white"
        style={{
          marginLeft: "60px",
          marginRight:"60px"
        }}
      >
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
          ></Link>
          <span
            className="bg-dark text-white d-flex justify-content-center align-items-center"
            style={{
              textAlign: "center",
            }}
          >
            © 2021 Company, Inc
          </span>
        </div>

        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">   
        </ul> */}
      </footer>
    </div>
  );
};

export default Footer;
