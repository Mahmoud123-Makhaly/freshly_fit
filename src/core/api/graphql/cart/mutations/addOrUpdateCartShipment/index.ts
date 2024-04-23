import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./addOrUpdateCartShipmentMutation";
import type {
  CartType,
  InputShipmentType,
  Mutations,
  MutationsAddOrUpdateCartShipmentArgs,
} from "../../../../graphql/types";

export async function addOrUpdateCartShipment(shipment: InputShipmentType, cartId?: string): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "addOrUpdateCartShipment">>,
    MutationsAddOrUpdateCartShipmentArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: {
        storeId,
        userId,
        cultureName,
        currencyCode,
        cartId,
        shipment,
      },
    },
  });

  return data!.addOrUpdateCartShipment;
}
