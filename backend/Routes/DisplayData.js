const express = require("express");
const { model } = require("mongoose");
const { route } = require("./CreateUser");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    // console.log(global.food_items)
    res.send([global.food_items,global.foodcategory]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
