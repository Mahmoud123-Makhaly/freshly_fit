import SHORT_ORDER_FIELDS from '../../../fragments/shortOrderFields'
import gql from 'graphql-tag'

const GET_SHORT_ORDER = gql`
${SHORT_ORDER_FIELDS}
query GetShortOrder($id: String, $number: String, $cultureName: String) {
  order(id: $id, number: $number, cultureName: $cultureName) {
    ...shortOrderFields
  }
}
`

export default GET_SHORT_ORDER
