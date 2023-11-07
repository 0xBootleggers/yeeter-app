import { FormBuilderBase } from "@daohaus/form-builder-base";
import { AppFieldLookup } from "../legos/legoConfig";
import { APP_FORM } from "../legos/forms";
import { Box } from "@chakra-ui/react";

export const Launch = () => {
  return (
    <Box m="10rem">
      <FormBuilderBase
        form={APP_FORM.TEST_FORM}
        // targetNetwork={"0x5"}
        fieldObj={AppFieldLookup}
      />
    </Box>
  );
};
