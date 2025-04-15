const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogapi");

    console.log("DB is connected.");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};

module.exports = connectDatabase;
