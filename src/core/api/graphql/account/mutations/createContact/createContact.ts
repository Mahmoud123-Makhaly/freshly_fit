import gql from 'graphql-tag'

const CREATE_CONTACT = gql`
mutation createContact($command: InputCreateContactType!) {
  createContact(command: $command) {
    id
  }
}
`

export default CREATE_CONTACT