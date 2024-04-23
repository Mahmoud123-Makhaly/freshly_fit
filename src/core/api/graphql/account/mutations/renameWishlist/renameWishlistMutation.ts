import gql from 'graphql-tag'

const RENAME_WISHLIST = gql`
mutation RenameWishlist($command: InputRenameWishlistType!) {
  renameWishlist(command: $command) {
    id
  }
}
`

export default RENAME_WISHLIST