import graphqlClient  from "../../../client";
import getMeQueryDocument from "./getMeQuery";
import type { ContactTypeOrganizationsArgs, Query, UserType } from "../../../../graphql/types";

export default async function getMe(): Promise<UserType> {
  const { data } = await graphqlClient.query<Required<Pick<Query, "me">>, ContactTypeOrganizationsArgs>({
    query: getMeQueryDocument,
  });

  return data.me;
}
