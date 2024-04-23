import gql from 'graphql-tag'

const UPDATE_QUOTE_ADDRESSES = gql`
mutation UpdateQuoteAddresses($command: UpdateQuoteAddressesCommandType!) {
  updateQuoteAddresses(command: $command) {
    id
  }
}
`

export default UPDATE_QUOTE_ADDRESSES