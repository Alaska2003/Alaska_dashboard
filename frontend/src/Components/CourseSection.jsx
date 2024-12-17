// Import necessary Chakra UI components, React, and icons
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import headline from '../assets/headline.png'
import { BiSearch } from "react-icons/bi";

// Define the 'CourseSection' component as a function
const CourseSection = () => {
    return (
        // Flex container with a vertical column layout and padding
        <Flex flexDir={'column'} p='6% 9%' gap='2'>
            {/* Image displaying a headline */}
            <Image w='70%' src={headline} />

            {/* Text describing the content */}
            <Box
                fontWeight={"bold"}
                fontSize={"md"}
                color={"blackAlpha.600"}
            >
                <Text>
                    Everything you need to know for your study <br />
                    abroad journey: from the first search to your first day <br />
                    on campus
                </Text>
            </Box>

            {/* Container for buttons and options */}
            <Box
                bg={"#fff"}
                borderRadius={"10px"}
                pos={"relative"}
                zIndex={2}
                boxShadow='xl'
                p='8'
            >
                {/* Flex container for navigation links */}
                <Flex
                    fontWeight={"md"}
                    gap={4}
                    placeItems={"center"}
                >
                    {/* Link to 'Courses' */}
                    <Flex
                        gap={1}
                        placeItems={"center"}
                    >
                        <Image w='40px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjCNxDFRtZn0eS0_jmYIfCBTpcGVbLCNx4nBe4OjRpA&s' />
                        <Text
                            borderBottom={"2px"}
                            borderBottomColor={"blue"}
                            cursor={"pointer"}
                        >
                            Courses
                        </Text>
                    </Flex>
                    {/* Link to 'Services' */}
                    <Flex gap={1} placeItems={"center"} cursor={"pointer"}>
                        <Image w='30px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1cruxdhv_sDguhwlNJjSYIMAjPXaslGoxQ&usqp=CAU' />
                        <Text>Services</Text>
                    </Flex>
                </Flex>

                {/* Container for search options */}
                <Flex
                    color={"blackAlpha.600"}
                    flexDir={"column"}
                    gap={3}
                    mt={8}
                >
                    {/* Option to select a subject */}
                    <Flex
                        p={4}
                        border={"1px solid "}
                        borderColor={"blackAlpha.400"}
                        borderRadius={"8px"}
                        gap={'2'}
                        fontWeight={"semibold"}
                        flexDir={"column"}
                        cursor={"pointer"}
                    >
                        <Text fontSize={"small"}>Subject</Text>
                        <Text fontSize={"x-small"}>What do you want to study?</Text>
                    </Flex>

                    {/* Option to select a location */}
                    <Flex
                        p={3}
                        border={"1px"}
                        borderColor={"blackAlpha.400"}
                        borderRadius={"6px"}
                        fontWeight={"semibold"}
                        justify={"space-between"}
                        bg={"blackAlpha.100"}
                        placeItems={"center"}
                        cursor={"pointer"}
                    >
                        <Flex flexDir={"column"} gap={'2'}>
                            <Text fontSize={"small"}>Where</Text>
                            <Text fontSize={"x-small"}>
                                Your ideal country/region or institution
                            </Text>
                        </Flex>

                        {/* Button to trigger search */}
                        <Button
                            color={'white'}
                            bg='#af8994'
                            p={7}
                            _hover={{}}
                        >
                            <Flex gap={2} placeItems={"center"}>
                                <Text fontSize={"25px"}>
                                    <BiSearch />
                                </Text>
                                <Text fontSize={'xl'}>Search</Text>
                            </Flex>
                        </Button>
                    </Flex>
                </Flex>
            </Box>

            {/* Decorative box with a light background */}
            <Box
                p={16}
                bgColor={"#f8ecd5"}
                zIndex={1}
                borderRadius={"full"}
                position={"absolute"}
                bottom={"70px"}
                left={"12%"}
            ></Box>
        </Flex>
    )
}

// Export the 'CourseSection' component as the default export of this module
export default CourseSection;
