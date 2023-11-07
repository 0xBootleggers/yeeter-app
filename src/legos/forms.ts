import { APP_FIELD } from "./fields";
import { CustomFormLego } from "./legoConfig";
// import { APP_TX } from "./tx";

export const APP_FORM: Record<string, CustomFormLego> = {
  TEST_FORM: {
    id: "TEST_FORM",
    title: "Super Signal Form",
    subtitle: "Super Signal Proposal",
    description: "Ratify on-chain using a DAO proposal.",
    requiredFields: { title: true, description: true, testField: true },
    log: true,
    // tx: APP_TX.TEST_TX,
    fields: [APP_FIELD.TEST_FIELD],
  },
};
