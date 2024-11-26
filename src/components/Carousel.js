import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import first from "../images/first.jpg";
import second from "../images/second.jpg";
import third from "../images/fourth.jpg";
const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade img-fluid"
      data-bs-ride="carousel"
      style={{ height: "683px", position: "relative" }}
    >
      <div className="carousel-inner" id="carousel">
        <div
          className="carousel-caption"
          style={{ zIndex: "10", height: "100px" }}
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            src="https://images.getbento.com/accounts/1881f2ca3c376…ormat&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
            className="d-block w-100"
            alt="Burger"
            style={{
              objectFit: "fill",
              width: "100%",
              height: "336px", // Increased height here
              maxHeight: "120vh",
              filter: "brightness(80%)",
              height: "551px",
              zoom: "1.5",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.getbento.com/accounts/1881f2ca3c376…ormat&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
            className="d-block w-100"
            alt="Pastry"
            style={{
              objectFit: "fill",
              width: "100%",
              height: "120vh", // Increased height here
              maxHeight: "120vh",
              filter: "brightness(80%)",
              height: "551px",
              zoom: "1.5",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.getbento.com/accounts/1881f2ca3c376…ormat&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
            className="d-block w-100"
            alt="Barbeque"
            style={{
              objectFit: "fill",
              width: "100%",
              height: "120vh", // Increased height here
              maxHeight: "120vh",
              filter: "brightness(80%)",
              height: "551px",
              zoom: "1.5",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
