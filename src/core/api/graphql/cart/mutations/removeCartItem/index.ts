import { globals } from "../../../../../globals";
import graphqlClient from "../../../client";
import mutationDocument from "./removeCartItemMutation";
import type { CartType, Mutations, MutationsRemoveCartItemArgs } from "../../../../graphql/types";

export async function removeCartItem(lineItemId: string): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "removeCartItem">>, MutationsRemoveCartItemArgs>(
    {
      mutation: mutationDocument,
      variables: {
        command: {
          storeId,
          userId,
          cultureName,
          currencyCode,
          lineItemId,
        },
      },
    },
  );

  return data!.removeCartItem;
}
