import gql from 'graphql-tag'

const REMOVE_QUOTE_ITEM = gql`
mutation RemoveQuoteItem($command: RemoveQuoteItemCommandType!) {
  removeQuoteItem(command: $command) {
    id
  }
}
`

export default REMOVE_QUOTE_ITEM