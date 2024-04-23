import gql from 'graphql-tag'

const GET_WISHLISTS = gql`
query GetWishlists(
  $storeId: String!
  $userId: String!
  $currencyCode: String!
  $cultureName: String
  $after: String
  $first: Int
  $sort: String
) {
  wishlists(
    storeId: $storeId
    userId: $userId
    currencyCode: $currencyCode
    cultureName: $cultureName
    first: $first
    after: $after
    sort: $sort
  ) {
    items {
      id
      name
      items {
        id
        productId
      }
    }
  }
}
`

export default GET_WISHLISTS