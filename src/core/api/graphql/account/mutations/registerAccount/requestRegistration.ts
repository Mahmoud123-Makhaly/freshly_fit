import gql from 'graphql-tag'

const REQUEST_REGISTRATION = gql`
mutation requestRegistration($command: InputRequestRegistrationType!) {
  requestRegistration(command: $command) {
    account {
      id
    }
    organization {
      id
    }
    contact {
      id
    }
    result {
      succeeded
      errors {
        code
        description
        parameter
      }
    }
  }
}
`

export default REQUEST_REGISTRATION