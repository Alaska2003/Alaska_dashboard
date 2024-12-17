// Import necessary Chakra UI components, React hooks, and libraries
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

// Define the 'Login' component as a function
export default function Login() {
    // State variables using React hooks
    const [cred, setCred] = useState({});
    const navigate = useNavigate();
    const toast = useToast();

    // Event handler to update the 'cred' state when input fields change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCred({
            ...cred,
            [name]: value
        })
    }

    // Function to handle user login
    const handleLogin = async () => {
        try {
            // Send a POST request to the login API
            let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cred)
            })

            // Parse the response data
            let data = await res.json();

            if (data.token) {
                // Store the token in local storage and show a success toast
                localStorage.setItem("token", data.token);
                toast({
                    title: 'Login successful',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                navigate('/home')
            } else {
                // Show a toast with the login result message
                toast({
                    title: `${data.msg}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        } catch (error) {
            // Handle any errors with a toast message
            toast({
                description: "Something went wrong.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            console.log(error);
        }
    }

    // JSX structure for the login form and UI
    return (
        <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={8}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input onChange={handleChange} name='email' type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handleChange} name='password' type="password" />
                        </FormControl>

                        <Button
                            bgGradient="linear(to-r, #aa44b1, #f3429c)"
                            color={'white'}
                            _hover={{
                                bgGradient: "linear(to-r, #aa44b1, #f3429c)"
                            }}
                            onClick={handleLogin}
                            size="lg"
                        >
                            Sign in
                        </Button>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}
