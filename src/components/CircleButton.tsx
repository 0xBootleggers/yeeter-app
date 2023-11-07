import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CircleButton = () => {
  return (
    <Box
      bg="brandColors.3"
      textAlign="center"
      display="inline-block"
      width="400px"
      height="400px"
      borderRadius="50%"
      padding="150px 35px"
      boxShadow="12px 12px 2px 1px black"
    >
      <Flex alignItems="center">
        <Link to="/launch">
          <Text fontSize="6xl" fontWeight="900">
            NEW
          </Text>
        </Link>
        <Text fontSize="6xl" fontWeight="900">
          |
        </Text>
        <Link to="/explore">
          <Text fontSize="6xl" fontWeight="900">
            VIEW
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
