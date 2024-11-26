import React, { useRef } from "react";
import "./FoodScrollBar.css"; // Include the CSS file
// import biryani from "../images/biryani.jpg"

const FoodScrollBar = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const foodItems = [
    { name: "Biryani", image: require("../images/biryani.jpg") },
    { name: "Ice Cream", image: require("../images/icecream.jpg") },
    { name: "Cake", image: require("../images/cake.jpg") },
    { name: "Noodles", image: require("../images/noodles.jpg") },
    { name: "Momos", image: require("../images/momos.jpg") },
    { name: "Paratha", image: require("../images/paratha.jpg") },
    { name: "Chhole Bhature", image: require("../images/chole.jpg") },
    { name: "Coffee", image: require("../images/coffee.jpg") },
    { name: "Gulab Jamun", image: require("../images/gulab.jpg") },
    { name: "Rasgulla", image: require("../images/ragulla.jpg") },
    { name: "Rolls", image: require("../images/rolls.jpg") },
    { name: "Poori", image: require("../images/poori.jpg") },
    { name: "Lassi", image: require("../images/lassi.jpg") },
    { name: "kababs", image: require("../images/kabab.jpg") },
    { name: "Pure veg", image: require("../images/veg.jpg") },
    { name: "Salad", image: require("../images/salad.jpg") },
    { name: "Dosa", image: require("../images/dosa.jpg") },
  ];

  return (
    <div className="arrow-scroll-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#8249;
      </button>
      <div className="scroll-wrapper" ref={scrollContainer}>
        {foodItems.map((item, index) => (
          <div className="food-item" key={index}>
            <img src={item.image} alt={item.name} className="food-logo" />
            <p className="food-name">{item.name}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};
export default FoodScrollBar;
