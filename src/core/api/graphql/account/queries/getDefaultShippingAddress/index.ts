import graphqlClient  from "../../../client";
import getDefaultShippingAddressQueryDocument from "./getDefaultShippingAddressQuery";
import type { MemberAddressType, Query } from "../../../../graphql/types";

export default async function getDefaultShippingAddress(): Promise<MemberAddressType | undefined> {
  const { data } = await graphqlClient.query<Required<Pick<Query, "me">>>({
    query: getDefaultShippingAddressQueryDocument,
  });

  return data.me.contact?.defaultShippingAddress;
}
