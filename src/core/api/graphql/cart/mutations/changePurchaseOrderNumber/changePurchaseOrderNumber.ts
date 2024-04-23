import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const CHANGE_PURCHASE_ORDER_NUMBER = gql`
${FULL_CART_FIELDS}
mutation ChangePurchaseOrderNumber($command: InputChangePurchaseOrderNumber) {
  changePurchaseOrderNumber(command: $command) {
    ...fullCartFields
  }
}
`

export default CHANGE_PURCHASE_ORDER_NUMBER
