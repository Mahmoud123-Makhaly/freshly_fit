import gql from 'graphql-tag'

const CREATE_QUOTE_FROM_CART = gql`
mutation CreateQuoteFromCart($command: CreateQuoteFromCartCommandType!) {
  createQuoteFromCart(command: $command) {
    id
  }
}
`

export default CREATE_QUOTE_FROM_CART