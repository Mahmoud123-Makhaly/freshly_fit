import MEMBER_ADDRESS_FIELDS from "../../../fragments/memberAddressFields"
import gql from 'graphql-tag'

const GET_MY_ADDRESSES = gql`
${MEMBER_ADDRESS_FIELDS}
query GetMyAddresses($after: String, $first: Int, $sort: String) {
  me {
    contact {
      addresses(after: $after, first: $first, sort: $sort) {
        items {
          ...memberAddressFields
        }
      }
    }
  }
}`
 export default GET_MY_ADDRESSES
