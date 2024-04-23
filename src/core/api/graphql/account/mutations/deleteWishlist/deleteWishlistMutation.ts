import gql from 'graphql-tag'

const DELETE_WISHLIST = gql`
mutation DeleteWishlist($command: InputRemoveWishlistType!) {
  removeWishlist(command: $command)
}
`

export default DELETE_WISHLIST