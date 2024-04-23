import gql from 'graphql-tag'

const AVAILABILITY_DATA_FIELDS = gql`
fragment availabilityDataFields on AvailabilityData {
  isActive
  isAvailable
  isBuyable
  isInStock
  availableQuantity
  inventories {
    fulfillmentCenterId
    fulfillmentCenterName
    inStockQuantity
    }
}`

export default AVAILABILITY_DATA_FIELDS
