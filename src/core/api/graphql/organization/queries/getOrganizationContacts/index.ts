import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import getOrganizationContactsQueryDocument from "./getOrganizationContactsQuery";
import type {
  ContactConnection,
  OrganizationContactsArgs,
  Query,
  QueryOrganizationArgs,
} from "../../../../graphql/types";

export default async function getOrganizationContacts(
  organizationId: string,
  payload: OrganizationContactsArgs,
): Promise<ContactConnection> {
  const { userId } = globals;

  const { data } = await graphqlClient.query<
    Required<Pick<Query, "organization">>,
    QueryOrganizationArgs & OrganizationContactsArgs
  >({
    query: getOrganizationContactsQueryDocument,
    variables: {
      id: organizationId,
      userId,
      ...payload,
    },
  });

  return data.organization.contacts!;
}
