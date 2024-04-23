import graphqlClient  from "../../../client";
import mutationDocument from "./changeQuoteItemQuantityMutation";
import type { Mutations, MutationsChangeQuoteItemQuantityArgs, QuoteType } from "../../../../graphql/types";

export default async function changeQuoteItemQuantity(
  payload: MutationsChangeQuoteItemQuantityArgs,
): Promise<QuoteType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "changeQuoteItemQuantity">>,
    MutationsChangeQuoteItemQuantityArgs
  >({
    mutation: mutationDocument,
    variables: {
      ...payload,
    },
  });

  return data!.changeQuoteItemQuantity;
}
