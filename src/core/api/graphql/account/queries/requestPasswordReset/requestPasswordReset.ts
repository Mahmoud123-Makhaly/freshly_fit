import gql from 'graphql-tag'

const REQUEST_PASSWORD_RESET = gql`
query requestPasswordReset($loginOrEmail: String!, $urlSuffix: String!) {
  requestPasswordReset(loginOrEmail: $loginOrEmail, urlSuffix: $urlSuffix)
}
`

export default REQUEST_PASSWORD_RESET