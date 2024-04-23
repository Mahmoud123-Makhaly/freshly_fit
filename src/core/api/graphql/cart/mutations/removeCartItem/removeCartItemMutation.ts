import FULL_CART_FIELDS from '../../../fragments/fullCartFields'
import gql from 'graphql-tag'

const REMOVE_CART_ITEM = gql`
${FULL_CART_FIELDS}
mutation RemoveCartItem($command: InputRemoveItemType!) {
  removeCartItem(command: $command) {
    ...fullCartFields
  }
}
`

export default REMOVE_CART_ITEM