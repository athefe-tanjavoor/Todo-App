const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Optional, as express.json() covers it

const app = express();

app.use(cors());
app.use(express.json()); // Make sure to include this

const db = require("./config/db"); // Ensure your DB is connected correctly
db();

const routes = require("./routes/routes");
app.use("/api", routes); // Ensure routes are mounted correctly

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
