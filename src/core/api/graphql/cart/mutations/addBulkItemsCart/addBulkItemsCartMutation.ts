import SHORT_CART_FIELDS from "../../../fragments/shortCartFields"
import gql from 'graphql-tag'

const ADD_BULK_ITEMS_CART = gql`
${SHORT_CART_FIELDS}
mutation AddBulkItemsCart($command: InputAddBulkItemsType!) {
  addBulkItemsCart(command: $command) {
    cart {
      ...shortCartFields
    }

    errors {
      objectId
      errorCode
      errorParameters {
        key
        value
      }
    }
  }
}
`
export default ADD_BULK_ITEMS_CART