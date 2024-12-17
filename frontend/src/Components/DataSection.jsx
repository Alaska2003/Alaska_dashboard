// Import necessary Chakra UI components and React library
import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

// Import images from assets
import earningsReport from '../assets/earningsReport.png';
import topTen from '../assets/topTen.png';
import sittingGirl from '../assets/sittingGirl.png';

// Define the 'DataSection' component as a function
const DataSection = () => {
    return (
        // Container with styling
        <Box
            mr='-50px'
            bg='white'
            p='12'
            boxShadow='2xl'
            borderRadius={'14px'}
            alignItems={'center'}
        >
            {/* Image of a sitting girl */}
            <Image
                w='450px'
                m=''
                mb='12'
                boxShadow='xs'
                borderRadius={'16px'}
                src={sittingGirl}
            />

            {/* Flex container for two images */}
            <Flex gap='8' justifyContent={'center'}>
                {/* Image for displaying the top ten */}
                <Image
                    w='160px'
                    h='190px'
                    boxShadow='xl'
                    borderRadius={'16px'}
                    src={topTen}
                />
                {/* Image for displaying earnings report */}
                <Image
                    w='160px'
                    h='190px'
                    boxShadow='2xl'
                    borderRadius={'16px'}
                    src={earningsReport}
                />
            </Flex>

            {/* Flex container for a scroll-up button */}
            <Flex justifyContent={'center'} mt={6}>
                {/* Image for a scroll-up button */}
                <Image w='300px' src='https://www.poupamais.pt/assets/images/btn-scroll-up.png' />
            </Flex>
        </Box>
    )
}

// Export the 'DataSection' component as the default export of this module
export default DataSection;
