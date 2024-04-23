//import type { I18n } from "@/i18n";

type GlobalVariablesType = {
  storeId?: string;
  fulfillmentId?: string;
  catalogId?: string;
  userId?: string;
  cultureName?: string;
  currencyCode?: string;
  //i18n?: I18n;
  router?: string;
};

const globalVariables: GlobalVariablesType = {};

export const globals = globalVariables as Readonly<Required<GlobalVariablesType>>;

export function setGlobals(variables: GlobalVariablesType) {
  Object.assign(globalVariables, variables);
}
