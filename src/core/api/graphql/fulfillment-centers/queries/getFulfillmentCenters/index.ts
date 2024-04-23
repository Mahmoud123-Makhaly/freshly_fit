import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import getFulfillmentCentersQuery from "./getFulfillmentCenters";
import type { FulfillmentCenterConnection, Query, QueryFulfillmentCentersArgs } from "../../../../graphql/types";

export default async function getFulfillmentCenters(sort = "name"): Promise<FulfillmentCenterConnection> {
  const { storeId } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "fulfillmentCenters">>, QueryFulfillmentCentersArgs>({
    query: getFulfillmentCentersQuery,
    variables: {
      storeId,
      sort,
    },
  });

  return data.fulfillmentCenters;
}
