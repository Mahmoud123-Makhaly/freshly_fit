import graphqlClient  from "../../../client";
import checkUsernameUniquenessQueryDocument from "./checkUsernameUniquenessQuery";
import type { Query, QueryCheckUsernameUniquenessArgs } from "../../../../graphql/types";

export default async function checkUsernameUniqueness(payload: QueryCheckUsernameUniquenessArgs): Promise<boolean> {
  const { data } = await graphqlClient.query<
    Required<Pick<Query, "checkUsernameUniqueness">>,
    QueryCheckUsernameUniquenessArgs
  >({
    query: checkUsernameUniquenessQueryDocument,
    variables: {
      ...payload,
    },
  });

  return data.checkUsernameUniqueness;
}
