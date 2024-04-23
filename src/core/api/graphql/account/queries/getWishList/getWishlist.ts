import PROPERTY_FIELDS from "../../../fragments/propertyFields"
import AVAILABILITY_DATA_FIELDS from "../../../fragments/availabilityDataFields"
import gql from 'graphql-tag'

const GET_WISHLIST = gql`
${PROPERTY_FIELDS}
${AVAILABILITY_DATA_FIELDS}
query GetWishlist($listId: String!, $cultureName: String) {
  wishlist(listId: $listId, cultureName: $cultureName) {
    name
    id
    items {
      id
      name
      imageUrl
      sku
      productId
      quantity
      salePrice {
        amount
        formattedAmount
      }
      listPrice {
        amount
        formattedAmount
      }
      productType
      product {
        name
        id
        code
        slug
        outline
        minQuantity
        maxQuantity
        imgSrc
        images {
          url
        }
        vendor {
          id
          name
        }
        availabilityData {
          ...availabilityDataFields
        }
        properties {
          ...propertyFields
        }
        price {
          actual {
            amount
            formattedAmount
          }
          discountAmount {
            amount
            formattedAmount
          }
          sale {
            amount
            formattedAmount
          }
          list {
            amount
            formattedAmount
          }
        }
      }
    }
  }
}
`

export default GET_WISHLIST