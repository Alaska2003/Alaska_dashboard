// Import necessary components and libraries
import { Box, Flex } from '@chakra-ui/react'; // Importing Chakra UI components
import React from 'react'; // Importing React library
import Navbar from '../Components/Navbar'; // Importing the 'Navbar' component
import CourseSection from '../Components/CourseSection'; // Importing the 'CourseSection' component
import DataSection from '../Components/DataSection'; // Importing the 'DataSection' component

// Define a functional component called 'Home'
const Home = () => {
  return (
    // Outer container with padding and background color
    <>
      <Box p='3rem 7rem' bg={'#c9c9c9'} minH={'100vh'}>
        <Box bg='white' > {/* Inner container with a white background */}
          <Navbar /> {/* Render the 'Navbar' component */}
          <Flex placeItems={'center'}> {/* Flex container for centering */}
            <CourseSection /> {/* Render the 'CourseSection' component */}
            <DataSection /> {/* Render the 'DataSection' component */}
          </Flex>
        </Box>
      </Box>
    </>
  )
}

// Export the 'Home' component as the default export of this module
export default Home;
