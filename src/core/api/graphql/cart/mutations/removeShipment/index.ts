import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./removeShipmentMutation";
import type { CartType, Mutations, MutationsRemoveShipmentArgs } from "../../../../graphql/types";

export async function removeShipment(shipmentId: string, cartId?: string): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "removeShipment">>, MutationsRemoveShipmentArgs>(
    {
      mutation: mutationDocument,
      variables: {
        command: {
          storeId,
          userId,
          cultureName,
          currencyCode,
          cartId,
          shipmentId,
        },
      },
    },
  );

  return data!.removeShipment;
}
