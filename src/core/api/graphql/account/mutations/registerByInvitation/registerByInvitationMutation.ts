import gql from 'graphql-tag'

const REGISTER_BY_INVITATION = gql`
mutation RegisterByInvitation($command: InputRegisterByInvitationType!) {
  registerByInvitation(command: $command) {
    succeeded
    errors {
      code
      description
      parameter
    }
  }
}
`

export default REGISTER_BY_INVITATION