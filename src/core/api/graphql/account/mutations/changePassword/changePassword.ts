import gql from 'graphql-tag'

const CHANGE_PASSWORD = gql`
mutation ChangePassword($command: InputChangePasswordType) {
  changePassword(command: $command) {
    succeeded
    errors {
      code
      description
      parameter
    }
  }
}`

export default CHANGE_PASSWORD
