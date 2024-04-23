import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const ADD_GIFT_ITEMS = gql`
${FULL_CART_FIELDS}
mutation AddGiftItems($command: InputAddGiftItemsType!) {
  addGiftItems(command: $command) {
    ...fullCartFields
  }
}
`

export default ADD_GIFT_ITEMS