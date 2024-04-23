import { DEFAULT_PAGE_SIZE } from "../../../../../constants";
import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import queryDocument from "./getWishlists";
import type { WishlistsSearchParams } from "../../../../graphql/account";
import type { Query, QueryWishlistsArgs, WishlistConnection } from "../../../../graphql/types";

export default async function getWishlists({
  itemsPerPage = DEFAULT_PAGE_SIZE,
  page = 1,
  sort,
}: Partial<WishlistsSearchParams>): Promise<WishlistConnection> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "wishlists">>, QueryWishlistsArgs>({
    query: queryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      sort,
      first: itemsPerPage,
      after: String((page - 1) * itemsPerPage),
    },
  });

  return data.wishlists;
}
