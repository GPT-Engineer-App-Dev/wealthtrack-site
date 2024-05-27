import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots, FaEllipsisH } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">Financial Times</Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaChartLine /> Markets</Link>
            <Link href="#"><FaGlobe /> World</Link>
            <Link href="#"><FaCommentDots /> Opinion</Link>
            <Link href="#"><FaEllipsisH /> More</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Latest News Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400x200" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400x200" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            {/* Add more news articles as needed */}
          </SimpleGrid>
        </Box>

        {/* Sidebar with Market Data */}
        <Box flex="1" p={4} borderLeftWidth={{ base: 0, md: "1px" }} borderTopWidth={{ base: "1px", md: 0 }} borderColor="gray.200">
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">Stock Price 1</Heading>
              <Text mt={2}>$123.45</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">Stock Price 2</Heading>
              <Text mt={2}>$678.90</Text>
            </Box>
            {/* Add more market data as needed */}
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
        <HStack spacing={8} justifyContent="center">
          <Link href="#">Contact Information</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;