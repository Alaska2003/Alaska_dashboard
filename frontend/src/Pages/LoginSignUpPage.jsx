// Import necessary components and libraries
import React from 'react'; // Importing React library
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center } from '@chakra-ui/react'; // Importing Chakra UI components
import Login from '../Components/Login'; // Importing the 'Login' component
import Signup from '../Components/Signup'; // Importing the 'Signup' component

// Define a functional component called 'LoginSignUpPage'
const LoginSignUpPage = () => {
    return (
        // Outer container with a minimum height and a gradient background
        <Box minH={'100vh'} bgGradient="linear(to-r, #aa44b1, #f3429c)">
            <Center> {/* Center align the content */}
                {/* Tabs component for switching between 'Login' and 'Signup' */}
                <Tabs variant='soft-rounded' colorScheme='green' mt='50px'>
                    <Center>
                        <TabList>
                            {/* Two tabs for 'Login' and 'Signup' */}
                            <Tab>Login</Tab>
                            <Tab>Signup</Tab>
                        </TabList>
                    </Center>
                    <TabPanels>
                        <TabPanel>
                            <Login /> {/* Render the 'Login' component */}
                        </TabPanel>
                        <TabPanel>
                            <Signup /> {/* Render the 'Signup' component */}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Center>
        </Box>
    )
}

// Export the 'LoginSignUpPage' component as the default export of this module
export default LoginSignUpPage;
