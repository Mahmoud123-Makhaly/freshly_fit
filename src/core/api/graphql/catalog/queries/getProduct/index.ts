import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import getProductsQueryDocument from "./getProductQuery";
import type { Product, Query, QueryProductArgs } from "../../../../graphql/types";

export async function getProduct(id: string): Promise<Product | null> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "product">>, QueryProductArgs>({
    query: getProductsQueryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      id,
    },
  });

  return data.product;
}
