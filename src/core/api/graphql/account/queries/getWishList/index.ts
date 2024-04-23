import { globals } from "../../../../../globals";
import  graphqlClient  from "../../../client";
import queryDocument from "./getWishlist";
import type { Query, QueryWishlistArgs, WishlistType } from "../../../../graphql/types";

export default async function getWishList(listId: string): Promise<WishlistType> {
  const { cultureName } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "wishlist">>, QueryWishlistArgs>({
    query: queryDocument,
    variables: {
      cultureName,
      listId,
    },
  });

  return data.wishlist;
}
