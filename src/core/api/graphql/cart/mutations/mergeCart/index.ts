import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./mergeCartMutation";
import type { Mutations, MutationsMergeCartArgs } from "../../../../graphql/types";

export async function mergeCart(userId: string, secondCartId: string, cartId?: string): Promise<void> {
  const { storeId, cultureName, currencyCode } = globals;

  await graphqlClient.mutate<Pick<Mutations, "mergeCart">, MutationsMergeCartArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        storeId,
        userId,
        cultureName,
        currencyCode,
        cartId,
        secondCartId,
      },
    },
  });
}
