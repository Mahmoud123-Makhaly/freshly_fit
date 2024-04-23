import graphqlClient  from "../../../client";
import mutationDocument from "./addWishlistItemMutation";
import type {
  InputAddWishlistItemType,
  Mutations,
  MutationsAddWishlistItemArgs,
  WishlistType,
} from "../../../../graphql/types";

export default async function addWishlistItem(payload: InputAddWishlistItemType): Promise<WishlistType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "addWishlistItem">>,
    MutationsAddWishlistItemArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.addWishlistItem;
}
