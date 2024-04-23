import graphqlClient  from "../../../client";
import mutationDocument from "./deleteWishlistMutation";
import type { Mutations, MutationsRemoveWishlistArgs } from "../../../../graphql/types";

export default async function deleteWishlist(listId: string): Promise<boolean> {
  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "removeWishlist">>, MutationsRemoveWishlistArgs>(
    {
      mutation: mutationDocument,
      variables: {
        command: {
          listId,
        },
      },
    },
  );

  return data!.removeWishlist;
}
