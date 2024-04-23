import gql from 'graphql-tag'

const UPDATE_ORGANIZTION = gql`
mutation UpdateOrganization($command: InputUpdateOrganizationType!) {
  updateOrganization(command: $command) {
    id
  }
}
`

 export default UPDATE_ORGANIZTION
