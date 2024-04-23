import gql from 'graphql-tag'

const INITIALIZE_PAYMENT = gql`
mutation InitializePayment($command: InputInitializePaymentType!) {
  initializePayment(command: $command) {
    isSuccess
    errorMessage
    actionHtmlForm
    actionRedirectUrl
    paymentActionType
    publicParameters {
      key
      value
    }
  }
}
`

export default INITIALIZE_PAYMENT