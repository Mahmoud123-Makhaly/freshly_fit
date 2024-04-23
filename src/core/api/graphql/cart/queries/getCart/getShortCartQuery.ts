import SHORT_CART_FIELDS from "../../../fragments/shortCartFields"
import gql from 'graphql-tag'

const GET_SHORT_CART = gql`
${SHORT_CART_FIELDS}
query GetShortCart($storeId: String!, $userId: String!, $currencyCode: String!, $cultureName: String) {
  cart(storeId: $storeId, userId: $userId, currencyCode: $currencyCode, cultureName: $cultureName) {
    ...shortCartFields
  }
}
`

export default GET_SHORT_CART
