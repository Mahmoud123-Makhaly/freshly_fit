import gql from 'graphql-tag'

const SUBMIT_QUOTE_REQUEST = gql`
mutation SubmitQuoteRequest($command: SubmitQuoteCommandType!) {
  submitQuoteRequest(command: $command) {
    id
  }
}
`

export default SUBMIT_QUOTE_REQUEST