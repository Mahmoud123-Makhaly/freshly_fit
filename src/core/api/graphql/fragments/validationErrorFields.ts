import gql from 'graphql-tag'

const VALIDATION_ERROR_FIELDS = gql`
fragment validationErrorFields on ValidationErrorType {
  errorCode
  errorMessage
  errorParameters {
    key
    value
  }
  objectId
  objectType
}
`
export default VALIDATION_ERROR_FIELDS