import graphqlClient  from "../../../client";
import mutationDocument from "./removeQuoteItemMutation";
import type { Mutations, MutationsRemoveQuoteItemArgs, QuoteType } from "../../../../graphql/types";

export default async function removeQuoteItem(payload: MutationsRemoveQuoteItemArgs): Promise<QuoteType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "removeQuoteItem">>,
    MutationsRemoveQuoteItemArgs
  >({
    mutation: mutationDocument,
    variables: {
      ...payload,
    },
  });

  return data!.removeQuoteItem;
}
