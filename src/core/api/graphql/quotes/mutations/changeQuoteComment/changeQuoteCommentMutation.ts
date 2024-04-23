import gql from 'graphql-tag'

const CHANGE_QUOTE_COMMENT = gql`
mutation ChangeQuoteComment($command: ChangeQuoteCommentCommandType!) {
  changeQuoteComment(command: $command) {
    id
  }
}
`

export default CHANGE_QUOTE_COMMENT