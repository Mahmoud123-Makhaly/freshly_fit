import graphqlClient  from "../../../client";
import mutationDocument from "./changeQuoteCommentMutation";
import type { Mutations, MutationsChangeQuoteCommentArgs, QuoteType } from "../../../../graphql/types";

export default async function changeQuoteComment(payload: MutationsChangeQuoteCommentArgs): Promise<QuoteType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "changeQuoteComment">>,
    MutationsChangeQuoteCommentArgs
  >({
    mutation: mutationDocument,
    variables: {
      ...payload,
    },
  });

  return data!.changeQuoteComment;
}
