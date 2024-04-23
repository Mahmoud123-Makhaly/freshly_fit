import SHORT_CART_FIELDS from "../../../fragments/shortCartFields"
import gql from 'graphql-tag'

const ADD_ITEMS_CART = gql`
${SHORT_CART_FIELDS}
mutation AddItemsCart($command: InputAddItemsType!) {
  addItemsCart(command: $command) {
    ...shortCartFields
  }
}
`

export default ADD_ITEMS_CART
