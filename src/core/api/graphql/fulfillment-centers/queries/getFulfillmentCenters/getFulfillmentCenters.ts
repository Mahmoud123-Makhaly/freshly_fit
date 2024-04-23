import gql from "graphql-tag";

const GET_FULFILLMENT_CENTERS = gql`
  query GetFulfillmentCenters(
    $after: String
    $first: Int
    $storeId: String
    $query: String
    $sort: String
    $fulfillmentCenterIds: [String]
  ) {
    fulfillmentCenters(
      after: $after
      first: $first
      storeId: $storeId
      query: $query
      sort: $sort
      fulfillmentCenterIds: $fulfillmentCenterIds
    ) {
      items {
        id
        name
        description
        shortDescription
        geoLocation
        address {
          city
          countryCode
          countryName
          line1
          line2
          postalCode
          zip
          phone
        }
      }
    }
  }
`;

export default GET_FULFILLMENT_CENTERS;
