import FULL_CART_FIELDS from '../../../fragments/fullCartFields'
import gql from 'graphql-tag'

const REMOVE_CART_ITEMS = gql`
${FULL_CART_FIELDS}
mutation RemoveCartItems($command: InputRemoveItemsType!) {
  removeCartItems(command: $command) {
    ...fullCartFields
  }
}
`

export default REMOVE_CART_ITEMS