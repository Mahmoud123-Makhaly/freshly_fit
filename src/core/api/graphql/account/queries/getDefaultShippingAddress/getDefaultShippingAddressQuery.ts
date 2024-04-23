import MEMBER_ADDRESS_FIELDS from "../../../fragments/memberAddressFields"
import gql from 'graphql-tag'

const GET_DEFAULT_SHIPPING_ADDRESS = gql`
${MEMBER_ADDRESS_FIELDS}
query GetDefaultShippingAddress {
  me {
    contact {
      defaultShippingAddress {
        ...memberAddressFields
      }
    }
  }
}
`

export default GET_DEFAULT_SHIPPING_ADDRESS