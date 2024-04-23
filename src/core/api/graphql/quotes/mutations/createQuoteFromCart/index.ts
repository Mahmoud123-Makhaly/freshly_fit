import graphqlClient  from "../../../client";
import mutationDocument from "./createQuoteFromCartMutation";
import type { Mutations, MutationsCreateQuoteFromCartArgs, QuoteType } from "../../../../graphql/types";

export default async function createQuoteFromCart(cartId: string, comment: string): Promise<QuoteType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "createQuoteFromCart">>,
    MutationsCreateQuoteFromCartArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: {
        cartId,
        comment,
      },
    },
  });

  return data!.createQuoteFromCart;
}
