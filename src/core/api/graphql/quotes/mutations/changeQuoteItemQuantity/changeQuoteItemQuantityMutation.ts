import gql from 'graphql-tag'

const CHANGE_QUOTE_ITEM_QUANTITY = gql`
mutation ChangeQuoteItemQuantity($command: ChangeQuoteItemQuantityCommandType!) {
  changeQuoteItemQuantity(command: $command) {
    id
  }
}
`

export default CHANGE_QUOTE_ITEM_QUANTITY