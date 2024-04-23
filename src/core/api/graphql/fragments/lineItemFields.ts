import PROPERTY_FIELDS from "./propertyFields" 
import MONEY_FIELDS from "./moneyFields" 
import AVAILABILITY_DATA_FIELDS from "./availabilityDataFields" 
import gql from 'graphql-tag'

const LINE_ITEM_FIELDS = gql`
${PROPERTY_FIELDS}
${MONEY_FIELDS}
${AVAILABILITY_DATA_FIELDS}
fragment lineItemFields on LineItemType {
  id
  name
  sku
  quantity
  inStockQuantity
  imageUrl
  productId
  productType
  product {
    id
    slug
    minQuantity
    maxQuantity
    masterVariation {
      id
      slug
    }
    properties {
      ...propertyFields
    }
    availabilityData {
      ...availabilityDataFields
    }
  }
  vendor {
    id
    name
    rating {
      value
      reviewCount
    }
  }
  extendedPrice {
    ...moneyFields
  }
  placedPrice {
    ...moneyFields
  }
  listPrice {
    ...moneyFields
  }
  salePrice {
    ...moneyFields
  }
  discountTotal {
    ...moneyFields
  }
  validationErrors {
    errorCode
    errorMessage
    errorParameters {
      key
      value
    }
  }
}
`

export default LINE_ITEM_FIELDS