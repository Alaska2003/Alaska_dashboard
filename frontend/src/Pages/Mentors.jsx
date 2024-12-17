// Import necessary components and libraries
import { Box, Flex, Heading } from '@chakra-ui/react'; // Importing Chakra UI components
import React from 'react'; // Importing React library
import Navbar from '../Components/Navbar'; // Importing the 'Navbar' component

// Define a functional component called 'Mentors'
const Mentors = () => {
    return (
        <>
            {/* Outer container with padding and background color */}
            <Box p='3rem 7rem' bg={'#c9c9c9'} minH={'100vh'}>
                <Box bg='white' > {/* Inner container with a white background */}
                    <Navbar /> {/* Render the 'Navbar' component */}
                    <Flex justifyContent={'center'} py='10'> {/* Flex container for centering */}
                        <Heading>
                            Mentors
                        </Heading>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

// Export the 'Mentors' component as the default export of this module
export default Mentors;
