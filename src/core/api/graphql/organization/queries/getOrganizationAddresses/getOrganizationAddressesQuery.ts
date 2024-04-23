import MEMBER_ADDRESS_FIELDS from "../../../fragments/memberAddressFields"
import gql from 'graphql-tag'

const GET_ORGANIZATION_ADDRESSES = gql`
${MEMBER_ADDRESS_FIELDS}
query GetOrganizationAddresses($id: String!, $userId: String, $after: String, $first: Int, $sort: String) {
  organization(id: $id, userId: $userId) {
    addresses(after: $after, first: $first, sort: $sort) {
      totalCount
      items {
        ...memberAddressFields
      }
    }
  }
}
`

export default GET_ORGANIZATION_ADDRESSES