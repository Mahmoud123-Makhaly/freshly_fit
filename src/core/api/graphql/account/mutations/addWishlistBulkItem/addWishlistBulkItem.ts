import gql from 'graphql-tag'

const ADD_WISHLIST_BULK_ITEM = gql`
mutation AddWishlistBulkItem($command: InputAddWishlistBulkItemType!) {
  addWishlistBulkItem(command: $command) {
    wishlists {
      id
    }
  }
}
`

export default ADD_WISHLIST_BULK_ITEM