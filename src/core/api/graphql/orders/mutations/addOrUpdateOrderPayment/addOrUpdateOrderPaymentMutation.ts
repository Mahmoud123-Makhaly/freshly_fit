import gql from 'graphql-tag'

const ADD_OR_UPDATE_ORDER_PAYMENT = gql`
mutation AddOrUpdateOrderPayment($command: InputAddOrUpdateOrderPaymentType!) {
  addOrUpdateOrderPayment(command: $command) {
    id
  }
}`

export default ADD_OR_UPDATE_ORDER_PAYMENT
