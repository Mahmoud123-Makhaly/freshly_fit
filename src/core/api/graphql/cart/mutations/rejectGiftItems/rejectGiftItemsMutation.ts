import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const REJECT_GIFT_ITEMS = gql`
${FULL_CART_FIELDS}
mutation RejectGiftItems($command: InputRejectGiftItemsType!) {
  rejectGiftItems(command: $command) {
    ...fullCartFields
  }
}
`

export default REJECT_GIFT_ITEMS