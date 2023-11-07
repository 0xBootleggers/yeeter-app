import { Input, Text } from "@chakra-ui/react";
import { Buildable, Field } from "../types/formAndField";

export const TestField = (props: Buildable<Field>) => {
  console.log("props", props);
  return (
    <>
      <Text fontWeight="900" textTransform="uppercase">
        {props.label}
      </Text>
      <Input
        {...props}
        borderRadius="0px"
        width="60rem"
        borderColor="brandColors.1"
      />
    </>
  );
};
