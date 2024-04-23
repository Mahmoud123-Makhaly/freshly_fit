import graphqlClient  from "../../../client";
import requestPasswordResetDocument from "./requestPasswordReset";
import type { Query, QueryRequestPasswordResetArgs } from "../../../../graphql/types";

export default async function requestPasswordReset(payload: QueryRequestPasswordResetArgs): Promise<boolean> {
  const { data } = await graphqlClient.query<
    Required<Pick<Query, "requestPasswordReset">>,
    QueryRequestPasswordResetArgs
  >({
    query: requestPasswordResetDocument,
    variables: {
      ...payload,
    },
  });

  return data.requestPasswordReset;
}
