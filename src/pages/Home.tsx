import { Box, Flex, Text } from "@chakra-ui/react";
import { CircleButton } from "../components/CircleButton";

export const Home = () => {
  return (
    <Flex direction="row" wrap="wrap" alignItems="center" padding="3rem 0">
      <Box w="40%" textAlign="right">
        <Text mb="2rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi
          lacus, dictum at ultricies et, varius ut lacus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla interdum lobortis nisi, a placerat leo auctor sed. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nam venenatis convallis est. Vivamus pulvinar ligula eu sapien
          luctus ullamcorper nec non urna. Aenean ut suscipit ex. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Fusce vitae leo tempor, rhoncus massa quis, mollis est.
        </Text>
        <Text mb="2rem">
          Nullam et interdum felis, non scelerisque mi. Nunc blandit elementum
          venenatis. Donec vehicula ultrices lacus, mollis sollicitudin dui
          mollis sed. Quisque vitae ante non nunc consectetur ultricies ut
          efficitur tortor. Sed condimentum auctor mattis. Quisque venenatis,
          purus sit amet semper lacinia, nunc magna placerat est, nec faucibus
          ligula felis ut orci. Aliquam urna orci, sodales id elit quis,
          tristique tincidunt elit.
        </Text>
        <Text>
          Aliquam urna orci, sodales id elit quis, tristique tincidunt elit.
          Aliquam mollis eros non elementum finibus. Praesent id lectus sed erat
          convallis egestas vitae at metus. Etiam finibus elit nisl, vitae
          aliquam turpis viverra sit amet. Proin viverra risus posuere dui
          sodales, sed consectetur quam viverra. Vestibulum tempor vulputate
          magna, non lacinia erat consequat sed. Praesent convallis diam
          ultrices dictum pretium. Cras laoreet metus ac sapien ullamcorper,
          eget porta dolor varius. Donec elit quam, ultricies id commodo quis,
          aliquam ut nunc.
        </Text>
      </Box>
      <Box w="20%">
        <CircleButton />
      </Box>
      <Box w="40%">
        <Text fontSize="7xl" fontWeight="900" lineHeight="120px">
          YEETER IS A REVOLUTION IN WEB3 FUNDRAISING
        </Text>
      </Box>
    </Flex>
  );
};
