const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User's name
    email: { type: String, required: true }, // User's email (unique and required)
    password: { type: String, required: true }, // User's password
  },
  { versionKey: false } // This option removes the "__v" field from documents
);

// Create a user model using the user schema
const userModel = mongoose.model("user", userSchema);

// Export the user model to be used in other parts of the application
module.exports = userModel;
