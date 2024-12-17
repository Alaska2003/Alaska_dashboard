const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const userRouter = express.Router();

// Route for user registration
userRouter.post("/register", async (req, res) => {
    const payload = req.body;
    const { password, email } = payload;
    const user = await userModel.findOne({ email });

    // Check if the user with the same email already exists
    if (user) {
        res.send("User Already exists, please login");
    } else {
        try {
            // Hash the user's password before storing it in the database
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.send({ msg: "Something went wrong while hashing the password" });
                } else {
                    // Create a new user with the hashed password and save it to the database
                    const user = new userModel({ ...payload, password: hash });
                    await user.save();
                    res.send({ msg: "You have been registered successfully" });
                }
            });
        } catch (err) {
            res.send({
                msg: "Something went wrong, cannot register.",
                error: err.message,
            });
        }
    }
});

// Route for user login
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (user) {
            // Compare the provided password with the hashed password in the database
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    // Generate a JSON Web Token (JWT) for authentication
                    let token = jwt.sign({ userID: user._id }, "meeku");
                    
                    // Update the user's status to indicate they are active (you may need to add this field to your schema)
                    await userModel.findByIdAndUpdate(
                        { _id: user._id },
                        { is_active: true }
                    );
                    
                    res.send({ msg: "Login Successful", token: token });
                } else {
                    res.send({ msg: "Wrong Credentials" });
                }
            });
        } else {
            res.send({ msg: "User not found!" });
        }
    } catch (err) {
        res.send({ msg: "Something went wrong, cannot login", error: err.message });
    }
});

module.exports = userRouter;
