import gql from 'graphql-tag'

const DELETE_WISHLIST_ITEM = gql`
mutation DeleteWishlistItem($command: InputRemoveWishlistItemType!) {
  removeWishlistItem(command: $command) {
    id
  }
}
`

export default DELETE_WISHLIST_ITEM
