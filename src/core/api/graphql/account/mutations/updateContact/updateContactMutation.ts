import gql from 'graphql-tag'

const UPDATE_CONTACT = gql`
mutation updateContact($command: InputUpdateContactType!) {
  updateContact(command: $command) {
    id
  }
}
`

export default UPDATE_CONTACT