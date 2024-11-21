const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.MONGO_URI;

const db = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error;
  }
};

module.exports = db;
