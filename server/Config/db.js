const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });
