import gql from 'graphql-tag'

const MEMBER_ADDRESS_FIELDS = gql`
fragment memberAddressFields on MemberAddressType {
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
  isDefault
  phone
  email
  description
  addressType
}
`

export default MEMBER_ADDRESS_FIELDS