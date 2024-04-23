import graphqlClient  from "../../../client";
import mutationDocument from "./addWishlistBulkItem";
import type {
  Mutations,
  MutationsAddWishlistBulkItemArgs,
  BulkWishlistType,
  InputAddWishlistBulkItemType,
} from "../../../../graphql/types";

export default async function addWishlistBulkItem(payload: InputAddWishlistBulkItemType): Promise<BulkWishlistType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "addWishlistBulkItem">>,
    MutationsAddWishlistBulkItemArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.addWishlistBulkItem;
}
