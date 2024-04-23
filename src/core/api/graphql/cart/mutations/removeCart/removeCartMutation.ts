import gql from 'graphql-tag'

const REMOVE_CART = gql`
mutation RemoveCart($command: InputRemoveCartType!) {
  removeCart(command: $command)
}
`

export default REMOVE_CART