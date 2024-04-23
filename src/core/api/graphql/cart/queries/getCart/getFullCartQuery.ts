import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const GET_FULL_CART = gql`
${FULL_CART_FIELDS}
query GetFullCart($storeId: String!, $userId: String!, $currencyCode: String!, $cultureName: String) {
  cart(storeId: $storeId, userId: $userId, currencyCode: $currencyCode, cultureName: $cultureName) {
    ...fullCartFields
  }
}
`

export default GET_FULL_CART