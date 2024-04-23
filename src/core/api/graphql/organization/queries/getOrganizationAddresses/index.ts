import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import queryDocument from "./getOrganizationAddressesQuery";
import type {
  MemberAddressConnection,
  OrganizationAddressesArgs,
  Query,
  QueryOrganizationArgs,
} from "../../../../graphql/types";

export default async function getOrganizationAddresses(
  organizationId: string,
  payload?: OrganizationAddressesArgs,
): Promise<MemberAddressConnection> {
  const { userId } = globals;

  const { data } = await graphqlClient.query<
    Required<Pick<Query, "organization">>,
    QueryOrganizationArgs & OrganizationAddressesArgs
  >({
    query: queryDocument,
    variables: {
      userId,
      id: organizationId,
      ...payload,
    },
  });

  return data.organization.addresses!;
}
