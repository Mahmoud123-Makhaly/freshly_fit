import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import getOrdersQueryDocument from "./getOrdersQuery";
import type { CustomerOrderConnection, Query, QueryOrdersArgs } from "../../../../graphql/types";

export default async function getOrders(payload?: QueryOrdersArgs): Promise<CustomerOrderConnection> {
  const { userId, cultureName } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "orders">>, QueryOrdersArgs>({
    query: getOrdersQueryDocument,
    variables: {
      userId,
      cultureName,
      ...payload,
    },
  });

  return data.orders;
}
