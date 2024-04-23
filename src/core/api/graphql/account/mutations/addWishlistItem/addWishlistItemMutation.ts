import gql from 'graphql-tag'

const ADD_WISHLIST_ITEM = gql`
mutation AddWishlistItem($command: InputAddWishlistItemType!) {
  addWishlistItem(command: $command) {
    id
  }
}
`
export default ADD_WISHLIST_ITEM