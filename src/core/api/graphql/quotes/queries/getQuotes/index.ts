import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import getQuotesQueryDocument from "./getQuotesQuery";
import type { Query, QueryQuotesArgs, QuoteConnection } from "../../../../graphql/types";

export default async function getQuotes(payload?: QueryQuotesArgs): Promise<QuoteConnection> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "quotes">>, QueryQuotesArgs>({
    query: getQuotesQueryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      ...payload,
    },
  });

  return data.quotes;
}
