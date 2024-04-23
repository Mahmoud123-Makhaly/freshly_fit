import type { InputAddBulkItemsType } from "../../../graphql/types";

export type InputBulkItemsType = Omit<InputAddBulkItemsType, "storeId" | "userId" | "cultureName" | "currencyCode">;
