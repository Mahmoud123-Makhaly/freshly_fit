import { DEFAULT_PAGE_SIZE } from "../../../../../constants";
import { globals } from "../../../../../globals";
import graphqlClient from "../../../client";
import searchRelatedProductsQueryDocument from "./searchRelatedProducts";
import type { ProductAssociation, ProductAssociationsArgs, Query, QueryProductArgs } from "../../../../graphql/types";

export type RelatedProductsSearchParamsType = {
  productId: string;
  page?: number;
  itemsPerPage?: number;
  group?: string;
  query?: string;
};

export async function searchRelatedProducts({
  productId,
  group,
  query,
  page = 1,
  itemsPerPage = DEFAULT_PAGE_SIZE,
}: RelatedProductsSearchParamsType): Promise<ProductAssociation[]> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.query<
    Required<Pick<Query, "product">>,
    QueryProductArgs & ProductAssociationsArgs
  >({
    query: searchRelatedProductsQueryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      group,
      query,
      id: productId,
      first: itemsPerPage,
      after: String((page - 1) * itemsPerPage),
    },
  });

  return data.product?.associations?.items ?? [];
}
