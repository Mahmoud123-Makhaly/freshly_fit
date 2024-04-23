import gql from 'graphql-tag'

const MERGE_CART = gql`
mutation MergeCart($command: InputMergeCartType!) {
  mergeCart(command: $command) {
    id
  }
}
`

export default MERGE_CART