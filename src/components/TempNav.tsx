import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const TempNav = () => {
  return (
    <Flex gap="2rem" w="100%" justifyContent="center">
      <Link to="/">home</Link>
      <Link to="/explore">explore</Link>
      <Link to="/launch">launch</Link>
    </Flex>
  );
};
