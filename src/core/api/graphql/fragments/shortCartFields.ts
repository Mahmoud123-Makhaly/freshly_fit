import gql from 'graphql-tag'

const SHORT_CART_FIELDS = gql`
fragment shortCartFields on CartType {
  id
  itemsQuantity
  items {
    id
    sku
    quantity
    productId
    extendedPrice {
      amount
    }
  }
}
`

export default SHORT_CART_FIELDS