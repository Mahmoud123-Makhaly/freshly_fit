import { ProductsSearchParams } from './../../../../../types/product';
import { DEFAULT_PAGE_SIZE } from "../../../../../constants";
import { globals } from "../../../../../globals";
import { getFilterExpressionForCategorySubtree, getFilterExpressionForZeroPrice } from "../../../../../utilities";
import graphqlClient  from "../../../client";
import searchProductsQueryDocument from "./searchProductsQuery";
import type { ProductConnection, Query, QueryProductsArgs } from "../../../../graphql/types";

export async function searchProducts(
  {
    itemsPerPage = DEFAULT_PAGE_SIZE,
    page = 1,
    categoryId,
    filter,
    sort,
    keyword,
    fuzzy,
    fuzzyLevel,
    productIds,
  }: Partial<ProductsSearchParams>,
  options: {
    /** @default false */
    withFacets?: boolean;
    /** @default true */
    withImages?: boolean;
    /** @default false */
    withZeroPrice?: boolean;
  } = {},
): Promise<ProductConnection> {
  const { storeId, catalogId, userId, cultureName, currencyCode } = globals;
  const { withFacets = false, withImages = true, withZeroPrice = false } = options;

  const filterString = [
    getFilterExpressionForCategorySubtree({ catalogId, categoryId }),
    getFilterExpressionForZeroPrice(withZeroPrice, currencyCode),
    filter,
  ]
    .filter(Boolean)
    .join(" ");

  const { data } = await graphqlClient.query<
    Required<Pick<Query, "products">>,
    QueryProductsArgs & { withFacets: boolean; withImages: boolean }
  >({
    query: searchProductsQueryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      sort,
      fuzzy,
      fuzzyLevel,
      withFacets,
      withImages,
      query: keyword,
      filter: filterString,
      first: itemsPerPage,
      after: String((page - 1) * itemsPerPage),
      productIds,
    },
  });

  return data.products;
}
