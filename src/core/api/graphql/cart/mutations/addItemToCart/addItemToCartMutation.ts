import SHORT_CART_FIELDS from "../../../fragments/shortCartFields"
import gql from 'graphql-tag'

const ADD_ITEM = gql`
${SHORT_CART_FIELDS}
mutation AddItem($command: InputAddItemType!) {
  addItem(command: $command) {
    ...shortCartFields
  }
}
`

export default ADD_ITEM