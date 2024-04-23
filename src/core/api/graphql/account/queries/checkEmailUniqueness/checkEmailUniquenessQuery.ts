import gql from 'graphql-tag'

const CHECK_EMAIL_UNIQUENESS = gql`
query checkEmailUniqueness($email: String!) {
  checkEmailUniqueness(email: $email)
}
`
export default CHECK_EMAIL_UNIQUENESS