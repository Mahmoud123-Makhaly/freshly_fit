import gql from 'graphql-tag'

const ADD_WISHLIST = gql`
mutation AddWishlist($command: InputCreateWishlistType!) {
  createWishlist(command: $command) {
    id
  }
}
`

export default ADD_WISHLIST