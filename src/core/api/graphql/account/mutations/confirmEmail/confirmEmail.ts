import gql from 'graphql-tag'

const CONFIRM_EMAIL = gql`
mutation confirmEmail($command: InputConfirmEmailType!) {
  confirmEmail(command: $command) {
    succeeded
  }
}`

export default CONFIRM_EMAIL
