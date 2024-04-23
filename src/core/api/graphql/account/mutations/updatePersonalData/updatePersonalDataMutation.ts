import gql from 'graphql-tag'

const UPDATE_PERSONAL_DATA = gql`
mutation UpdatePersonalData($command: InputUpdatePersonalDataType!) {
  updatePersonalData(command: $command) {
    succeeded
    errors {
      code
      description
    }
  }
}`

export default UPDATE_PERSONAL_DATA
