import gql from 'graphql-tag'

const REMOVE_MEMBER_FROM_ORGANIZATION = gql`
mutation RemoveMemberFromOrganization($command: InputRemoveMemberFromOrganizationType!) {
  removeMemberFromOrganization(command: $command) {
    id
  }
}
`

export default REMOVE_MEMBER_FROM_ORGANIZATION