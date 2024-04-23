import graphqlClient  from "../../../client";
import checkEmailUniquenessQueryDocument from "./checkEmailUniquenessQuery";
import type { Query, QueryCheckEmailUniquenessArgs } from "../../../../graphql/types";

export default async function checkEmailUniqueness(payload: QueryCheckEmailUniquenessArgs): Promise<boolean> {
  const { data } = await graphqlClient.query<
    Required<Pick<Query, "checkEmailUniqueness">>,
    QueryCheckEmailUniquenessArgs
  >({
    query: checkEmailUniquenessQueryDocument,
    variables: {
      ...payload,
    },
  });

  return data.checkEmailUniqueness;
}
