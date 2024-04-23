import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./removeCartMutation";
import type { Mutations, MutationsRemoveCartArgs } from "../../../../graphql/types";

export async function removeCart(cartId: string): Promise<boolean> {
  const { userId } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "removeCart">>, MutationsRemoveCartArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        cartId,
        userId,
      },
    },
  });

  return data!.removeCart;
}
