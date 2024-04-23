import gql from 'graphql-tag'

const INVITE_USER = gql`
mutation InviteUser($command: InputInviteUserType!) {
  inviteUser(command: $command) {
    succeeded
    errors {
      code
      description
      parameter
    }
  }
}
`

export default INVITE_USER