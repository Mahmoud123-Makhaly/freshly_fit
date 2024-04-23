import FULL_ORDER_FIELDS from "../../../fragments/fullOrderFields"
import gql from 'graphql-tag'

const GET_FULL_ORDER = gql`
${FULL_ORDER_FIELDS}
query GetFullOrder($id: String, $number: String, $cultureName: String) {
  order(id: $id, number: $number, cultureName: $cultureName) {
    ...fullOrderFields
  }
}
`

export default GET_FULL_ORDER