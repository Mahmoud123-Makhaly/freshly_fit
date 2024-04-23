import gql from 'graphql-tag'

const GET_ORGANIZATION_CONTACTS = gql`
query GetOrganizationContacts(
  $id: String!
  $userId: String!
  $first: Int
  $after: String
  $sort: String
  $searchPhrase: String
) {
  organization(id: $id, userId: $userId) {
    contacts(first: $first, after: $after, sort: $sort, searchPhrase: $searchPhrase) {
      items {
        id
        name
        firstName
        lastName
        fullName
        emails
        status
        securityAccounts {
          id
          email
          roles {
            id
            name
          }
        }
      }
      totalCount
    }
  }
}
`

export default GET_ORGANIZATION_CONTACTS