import gql from 'graphql-tag'

const UPDATE_WISHLIST_ITEMS = gql`
mutation UpdateWishListItems($command: InputUpdateWishlistItemsType!) {
  updateWishListItems(command: $command) {
    id
  }
}
`

export default UPDATE_WISHLIST_ITEMS