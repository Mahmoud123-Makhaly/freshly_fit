import gql from 'graphql-tag'

const PROPERTY_FIELDS = gql`
fragment propertyFields on Property {
  name
  value
  type
  hidden
  valueType
  label
}
`

export default PROPERTY_FIELDS