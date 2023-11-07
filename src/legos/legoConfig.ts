import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { TestField } from "../components/fieldTest";

export const AppFieldLookup = {
  testField: TestField,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;
