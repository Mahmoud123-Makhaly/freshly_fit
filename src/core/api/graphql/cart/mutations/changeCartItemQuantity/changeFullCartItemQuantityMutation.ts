import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const CHANGE_FULL_CART_ITEM_QUANTITY = gql`
${FULL_CART_FIELDS}
mutation ChangeFullCartItemQuantity($command: InputChangeCartItemQuantityType!) {
  changeCartItemQuantity(command: $command) {
    ...fullCartFields
  }
}
`

export default CHANGE_FULL_CART_ITEM_QUANTITY