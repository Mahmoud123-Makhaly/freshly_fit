import SHORT_CART_FIELDS from "../../../fragments/shortCartFields"
import gql from 'graphql-tag'

const CHANGE_SHORT_CART_ITEM_QUANTITY = gql`
${SHORT_CART_FIELDS}
mutation ChangeShortCartItemQuantity($command: InputChangeCartItemQuantityType!) {
  changeCartItemQuantity(command: $command) {
    ...shortCartFields
  }
}
`

export default CHANGE_SHORT_CART_ITEM_QUANTITY