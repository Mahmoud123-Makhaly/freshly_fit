import FULL_ORDER_FIELDS from "../../../fragments/fullOrderFields"
import gql from 'graphql-tag'

const CREATE_ORDER_FROM_CART = gql`
${FULL_ORDER_FIELDS}
mutation CreateOrderFromCart($command: InputCreateOrderFromCartType!) {
  createOrderFromCart(command: $command) {
    ...fullOrderFields
  }
}
`

export default CREATE_ORDER_FROM_CART