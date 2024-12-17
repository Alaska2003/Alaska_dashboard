// Import necessary Chakra UI components, React hooks, and icons
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import { useToast } from '@chakra-ui/react'
  
  // Define the 'Signup' component as a function
  export default function Signup() {
      // State variables using React hooks
      const [showPassword, setShowPassword] = useState(false);
      const [cred, setCred] = useState({});
      const navigate = useNavigate();
      const toast = useToast()
  
      // Event handler to update the 'cred' state when input fields change
      const handleChange = (e) => {
          const { name, value } = e.target;
          setCred({
              ...cred,
              [name]: value
          })
      }
  
      // Function to handle user signup
      const handleSignUp = async () => {
          try {
              // Send a POST request to the signup API
              let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/register`, {
                  method: 'POST',
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(cred)
              })
  
              // Parse the response data
              let data = await res.json();
  
              // If the data is received successfully, show a success toast and navigate to the home page
              if (data) {
                  toast({
                      title: 'Account created.',
                      description: "We've created your account for you.",
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                  })
                  navigate('/home')
              }
              // If the user is already registered, navigate to the login page
              else if (data.msg === 'You have been registered successfully') {
                  navigate('/home')
              }
          } catch (error) {
              // Handle any errors with a toast message
              console.log(error);
              toast({
                  title: 'Error',
                  description: "User already exist or Something went wrong.",
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
              })
          }
      }
  
      // JSX structure for the signup form and UI
      return (
          <Flex
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack align={'center'}>
                      <Heading fontSize={'4xl'} textAlign={'center'}>
                          Sign up your account
                      </Heading>
                  </Stack>
                  <Box
                      rounded={'lg'}
                      bg={useColorModeValue('white', 'gray.700')}
                      boxShadow={'lg'}
                      p={8}>
                      <Stack spacing={4}>
                          <HStack>
                              <Box>
                                  <FormControl id="firstName" isRequired>
                                      <FormLabel>Name</FormLabel>
                                      <Input onChange={handleChange} name='name' type="text" />
                                  </FormControl>
                              </Box>
                          </HStack>
                          <FormControl id="" isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input onChange={handleChange} name='email' type="email" />
                          </FormControl>
                          <FormControl id="" isRequired>
                              <FormLabel>Password</FormLabel>
                              <InputGroup>
                                  <Input onChange={handleChange} name='password' type={showPassword ? 'text' : 'password'} />
                                  <InputRightElement h={'full'}>
                                      <Button
                                          variant={'ghost'}
                                          onClick={() =>
                                              setShowPassword((showPassword) => !showPassword)
                                          }>
                                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                      </Button>
                                  </InputRightElement>
                              </InputGroup>
                          </FormControl>
                          <Stack spacing={10} pt={2}>
                              <Button
                                  loadingText="Submitting"
                                  size="lg"
                                  bgGradient="linear(to-r, #aa44b1, #f3429c)"
                                  color={'white'}
                                  _hover={{
                                      bgGradient: "linear(to-r, #aa45b2, #f3429d)"
                                  }}
                                  onClick={handleSignUp}
                              >
                                  Sign up
                              </Button>
                          </Stack>
                          <Stack pt={6}>
                              <Text align={'center'}>
                                  Already a user? <Link color={'teal'}>Login</Link>
                              </Text>
                          </Stack>
                      </Stack>
                  </Box>
              </Stack>
          </Flex>
      );
  }
  