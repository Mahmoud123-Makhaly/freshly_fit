import gql from 'graphql-tag'

const CHECK_USERNEME_UNIQUENESS = gql`
query checkUsernameUniqueness($username: String!) {
  checkUsernameUniqueness(username: $username)
}
`

export default CHECK_USERNEME_UNIQUENESS


