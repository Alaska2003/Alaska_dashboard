// Import required libraries and modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file
const userRouter = require("./route/user.route");  // Correct the path to your user routes

// Create an Express application
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Middleware for enabling CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Use the userRouter for handling routes
app.use('/', userRouter);

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World');
});

// MongoDB connection setup using the connection string from .env
const mongoURI = process.env.MONGO_URI;  // Ensure your .env has MONGO_URI
const port = process.env.PORT || 5005;    // Use PORT from .env or fallback to 5003

// Set the strictQuery option to suppress the deprecation warning
mongoose.set('strictQuery', true); // or false, depending on your needs

// Start the server and connect to MongoDB
app.listen(port, async () => {
  try {
    // Connect to MongoDB using mongoose and the URI from .env file
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Server error:', err); // Log the error for better debugging
  }
  console.log(`Server is running at port ${port}`);
});