import gql from 'graphql-tag'

const CREATE_USER = gql`
mutation createUser($command: InputCreateUserType!) {
  createUser(command: $command) {
    succeeded
    errors {
      code
      description
    }
  }
}
`

export default CREATE_USER