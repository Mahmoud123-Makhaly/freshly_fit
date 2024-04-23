import gql from 'graphql-tag'

const CHANGE_ORGANIZATION_CONTACT_ROLES = gql`
mutation ChangeOrganizationContactRole($command: InputChangeOrganizationContactRoleType!) {
  changeOrganizationContactRole(command: $command) {
    succeeded
    errors {
      code
      parameter
      description
    }
  }
}
`

export default CHANGE_ORGANIZATION_CONTACT_ROLES
