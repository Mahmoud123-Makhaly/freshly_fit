import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./changeCartCommentMutation";
import type { CartType, Mutations, MutationsChangeCommentArgs } from "../../../../graphql/types";

export async function changeCartComment(comment: string): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "changeComment">>, MutationsChangeCommentArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        storeId,
        userId,
        cultureName,
        currencyCode,
        comment,
      },
    },
  });

  return data!.changeComment;
}
