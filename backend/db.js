const mongoose = require("mongoose");

const mongo_URI = "mongodb+srv://gofood:%23gagan123@cluster0.umjov.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

    // Fetch the `food_items` and `foodcategory` collections asynchronously
    const db = mongoose.connection.db;

    const foodItemsCollection = db.collection("food_items");
    const foodCategoryCollection = db.collection("foodcategory");

    const foodItemsData = await foodItemsCollection.find({}).toArray();
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    // Set global variables with fetched data
    global.food_items = foodItemsData;
    global.foodcategory = foodCategoryData;

    // console.log("Data loaded into global variables");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
