import gql from 'graphql-tag'

const LOCK_ORGANIZATION_CONTACT = gql`
mutation LockOrganizationContact($command: InputLockUnlockOrganizationContactType!) {
  lockOrganizationContact(command: $command) {
    id
  }
}
`

export default LOCK_ORGANIZATION_CONTACT