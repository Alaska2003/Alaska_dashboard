const jwt = require("jsonwebtoken");

// Define an authentication middleware function called 'auth'
const auth = (req, res, next) => {
    // Extract the token from the request headers
    const token = req.headers.authorization;

    // Check if a token is present in the request headers
    if (token) {
        // Verify the token using the secret key ("meeku" in this case)
        jwt.verify(token, "meeku", (err, decoded) => {
            if (decoded) {
                // If the token is successfully verified, add the 'userID' to the request body
                req.body.userID = decoded.userID;
                next(); // Continue to the next middleware or route handler
            } else {
                // If the token is invalid or expired, send an error response
                res.send({ "msg": "Token didn't match, Please Login First!" });
            }
        });
    } else {
        // If no token is provided in the headers, send an error response
        res.send({ "msg": "Please Login First!" });
    }
};

// Export the 'auth' middleware to be used in other parts of the application
module.exports = { auth };
