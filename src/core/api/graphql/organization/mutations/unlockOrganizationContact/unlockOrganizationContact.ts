import gql from 'graphql-tag'

const UNLOCK_ORGANIZTION_CONTACT = gql`
mutation UnlockOrganizationContact($command: InputLockUnlockOrganizationContactType!) {
  unlockOrganizationContact(command: $command) {
    id
  }
}
`

export default UNLOCK_ORGANIZTION_CONTACT