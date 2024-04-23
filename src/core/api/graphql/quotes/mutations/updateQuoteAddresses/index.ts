import graphqlClient  from "../../../client";
import mutationDocument from "./updateQuoteAddressesMutation";
import type { Mutations, MutationsUpdateQuoteAddressesArgs, QuoteType } from "../../../../graphql/types";

export default async function removeQuoteItem(payload: MutationsUpdateQuoteAddressesArgs): Promise<QuoteType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "updateQuoteAddresses">>,
    MutationsUpdateQuoteAddressesArgs
  >({
    mutation: mutationDocument,
    variables: {
      ...payload,
    },
  });

  return data!.updateQuoteAddresses;
}
