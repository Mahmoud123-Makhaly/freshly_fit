import graphqlClient  from "../../../client";
import getCountriesQuery from "./getCountries";
import type { CountryType, Query } from "../../../../graphql/types";

export default async function getCountries(): Promise<CountryType[]> {
  const { data } = await graphqlClient.query<Required<Pick<Query, "countries">>>({
    query: getCountriesQuery,
  });

  return data.countries;
}
