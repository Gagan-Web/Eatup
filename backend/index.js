const express = require("express");
const mongoDB = require("./db");
const app = express();
const cors = require('cors');
const port = 5000;
mongoDB();
app.get("/", (req, res) => {
  res.send("gofood!");
});

app.use(cors());


// app.use((req, res, next) => {
//   res.setHeader("Access_Control_Allow-Origin", "https://localhost:3000");
//   res.header(
//     "Access_Control_Allow-Headers",
//     "Origin,X-Requested_With,Content-Type,Accept"
//   );
//   next();
// });
// default path
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
