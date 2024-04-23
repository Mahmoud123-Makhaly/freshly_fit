import gql from 'graphql-tag'

const GET_ME = gql`
query GetMe($after: String, $first: Int, $sort: String) {
  me {
    id
    memberId
    userName
    email
    emailConfirmed
    photoUrl
    phoneNumber
    permissions
    isAdministrator
    passwordExpired
    forcePasswordChange
    contact {
      firstName
      lastName
      fullName
      organizationId
      organizations(after: $after, first: $first, sort: $sort) {
        items {
          id
          name
        }
      }
    }
    operator {
      userName
      contact {
        fullName
      }
    }
  }
}
`

export default GET_ME