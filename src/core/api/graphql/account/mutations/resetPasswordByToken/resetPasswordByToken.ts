import gql from 'graphql-tag'

const RESET_PASSWORD_BY_TOKEN = gql`
mutation ResetPasswordByToken($command: InputResetPasswordByTokenType) {
  resetPasswordByToken(command: $command) {
    succeeded
    errors {
      code
      description
      parameter
    }
  }
}
`

export default RESET_PASSWORD_BY_TOKEN