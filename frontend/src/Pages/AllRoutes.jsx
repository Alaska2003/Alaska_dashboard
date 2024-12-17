// Import necessary components and libraries
import React from 'react'; // Importing React library
import { Route, Routes } from 'react-router-dom'; // Importing React Router components
import LoginSignUpPage from './LoginSignUpPage'; // Importing the 'LoginSignUpPage' component
import Home from './Home'; // Importing the 'Home' component
import Mentors from './Mentors'; // Importing the 'Mentors' component

// Define a functional component called 'AllRoutes'
const AllRoutes = () => {
    return (
        <div>
            {/* Define routes using the 'Routes' and 'Route' components from React Router */}
            <Routes>
                {/* Route for the root path ('/') that renders the 'LoginSignUpPage' component */}
                <Route path='/' element={<LoginSignUpPage />} />
                {/* Route for the '/home' path that renders the 'Home' component */}
                <Route path='/home' element={<Home />} />
                {/* Route for the '/mentors' path that renders the 'Mentors' component */}
                <Route path='/mentors' element={<Mentors />} />
            </Routes>
        </div>
    )
}

// Export the 'AllRoutes' component as the default export of this module
export default AllRoutes;
