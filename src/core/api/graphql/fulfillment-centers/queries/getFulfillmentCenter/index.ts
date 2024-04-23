import graphqlClient  from "../../../client";
import getFulfillmentCenterQuery from "./getFulfillmentCenter";
import type { FulfillmentCenterType, Query, QueryFulfillmentCenterArgs } from "../../../../graphql/types";

export default async function getProduct(id: string): Promise<FulfillmentCenterType | null> {
  const { data } = await graphqlClient.query<Required<Pick<Query, "fulfillmentCenter">>, QueryFulfillmentCenterArgs>({
    query: getFulfillmentCenterQuery,
    variables: {
      id,
    },
  });

  return data.fulfillmentCenter;
}
