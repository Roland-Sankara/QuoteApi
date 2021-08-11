const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")




// Quote Route
const quoteRoute = require("./routes/quoteRoute");

const app = express();
//for cross origin resource sharing 
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*") //update to match detail you make requests from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to quote app");
});
// Middleware - helps modify the request
app.use(express.json());

// Routes for API
app.use("/quotes", quoteRoute);

// Connect to Our Database
const URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://Roland:quote123@quotedb.tvvsk.mongodb.net/Quote-Data?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connection Established...");
  })
  .catch(() => {
    console.log("Database Connection Failed !!");
  });

// Start the Server
app.listen(PORT, () => {
  console.log("Server is listening on port 3000 ...");
});
