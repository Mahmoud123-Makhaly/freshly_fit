import graphqlClient  from "../../../client";
import mutationDocument from "./addOrUpdateOrderPaymentMutation";
import type {
  InputAddOrUpdateOrderPaymentType,
  Mutations,
  MutationsAddOrUpdateOrderPaymentArgs,
} from "../../../../graphql/types";

export default async function addOrUpdateOrderPayment(payload: InputAddOrUpdateOrderPaymentType): Promise<void> {
  await graphqlClient.mutate<
    Required<Pick<Mutations, "addOrUpdateOrderPayment">>,
    MutationsAddOrUpdateOrderPaymentArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });
}
