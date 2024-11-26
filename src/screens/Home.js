import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "../components/Box";
import first from "../images/topings.jpg";
import second from "../images/burger.jpg";
import third from "../images/mixed.jpg";
import FoodScrollBar from "../components/Scroller";
const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      Headers: {
        "content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0], response[1]);
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-dark text-white">
      <div>
        <Header />
      </div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade img-fluid"
        data-bs-ride="carousel"
        style={{ height: "680px" }}
      >
        <div className="carousel-inner" id="carousel">
          <div
            className="carousel-caption"
            style={{ zIndex: "10", height: "300px" }}
          >
            <p
              className="mb-200"
              style={{
                fontSize: "3.5rem", // Scales well on different devices
                fontWeight: "700", // Bold for emphasis
                color: "#e70870", // Gold hue adds sophistication and stands out
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Subtle but effective shadow
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "1px", // Adds a modern touch
                filter: "drop-shadow(2px 4px 6px black)",
              }}
            >
              Savor Every Bite, Delivered with Delight!
            </p>
          </div>
          <div
            className="carousel-caption"
            style={{ zIndex: "10", height: "100px" }}
          >
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for restourant,cuisine and dish"
                aria-label="Search"
                style={{
                  opacity: "0.9",
                }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success bg-success  text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src={first}
              className="d-block w-100"
              alt="Burger"
              style={{
                objectFit: "cover",
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
              src={second}
              className="d-block w-100"
              alt="Pastry"
              style={{
                objectFit: "cover",
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
              src={third}
              className="d-block w-100"
              alt="Barbeque"
              style={{
                objectFit: "cover",
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <h2 className="m-4">What's on your mind?</h2>
        <hr />
        < FoodScrollBar />
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {" "}
                  {data.CategoryName}{" "}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._ids}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Box
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          ></Box>
                        </div>
                      );
                    })
                ) : (
                  <div>No Such data found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>"""""""""""</div>
        )}
      </div>
      <div className="bg-dark text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
