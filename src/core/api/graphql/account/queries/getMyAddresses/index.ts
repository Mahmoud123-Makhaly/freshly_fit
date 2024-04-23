import graphqlClient  from "../../../client";
import getMyAddressesQueryDocument from "./getMyAddressesQuery";
import type { ContactTypeAddressesArgs, MemberAddressType, Query } from "../../../../graphql/types";

export default async function getMyAddresses(payload?: ContactTypeAddressesArgs): Promise<MemberAddressType[]> {
  const { data } = await graphqlClient.query<Required<Pick<Query, "me">>, ContactTypeAddressesArgs>({
    query: getMyAddressesQueryDocument,
    variables: {
      ...payload,
    },
  });

  return data.me.contact?.addresses?.items ?? [];
}
