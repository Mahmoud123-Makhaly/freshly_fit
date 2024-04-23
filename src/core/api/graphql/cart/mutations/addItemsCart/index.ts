import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./addItemsCartMutation";
import type { CartType, InputNewCartItemType, Mutations, MutationsAddItemsCartArgs } from "../../../../graphql/types";

export async function addItemsCart(items: InputNewCartItemType[]): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "addItemsCart">>, MutationsAddItemsCartArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        storeId,
        userId,
        cultureName,
        currencyCode,
        cartItems: items,
      },
    },
  });

  return data!.addItemsCart;
}
