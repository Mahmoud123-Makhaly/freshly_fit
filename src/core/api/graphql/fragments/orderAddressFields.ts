import gql from 'graphql-tag'

const ORDER_ADDRESS_FIELDS = gql`
fragment orderAddressFields on OrderAddressType {
  id
  name
  organization
  firstName
  lastName
  line1
  line2
  city
  countryCode
  countryName
  regionId
  regionName
  postalCode
  phone
  email
  addressType
}
`
export default ORDER_ADDRESS_FIELDS