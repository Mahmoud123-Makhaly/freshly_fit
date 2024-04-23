import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const CHANGE_CART_COMMENT = gql`
${FULL_CART_FIELDS}
mutation ChangeCartComment($command: InputChangeCommentType!) {
  changeComment(command: $command) {
    ...fullCartFields
  }
}
`
export default CHANGE_CART_COMMENT