import gql from 'graphql-tag'

const AUTHORIZE_PAYMENT = gql`
mutation AuthorizePayment($command: InputAuthorizePaymentType!) {
  authorizePayment(command: $command) {
    isSuccess
    errorMessage
  }
}
`

export default AUTHORIZE_PAYMENT