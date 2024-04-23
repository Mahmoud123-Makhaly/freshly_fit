import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import getQuoteQueryDocument from "./getQuoteQuery";
import type { Query, QueryQuoteArgs, QuoteType } from "../../../../graphql/types";

export default async function getQuote(payload?: QueryQuoteArgs): Promise<QuoteType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "quote">>, QueryQuoteArgs>({
    query: getQuoteQueryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      ...payload,
    },
  });

  return data.quote;
}
