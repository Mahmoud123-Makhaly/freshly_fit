import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const ADD_OR_UPDATE_CART_PAYMENT = gql`
${FULL_CART_FIELDS}
mutation AddOrUpdateCartPayment($command: InputAddOrUpdateCartPaymentType!) {
  addOrUpdateCartPayment(command: $command) {
    ...fullCartFields
  }
}
`

export default ADD_OR_UPDATE_CART_PAYMENT