import MONEY_FIELDS from "../../../fragments/moneyFields"
import gql from 'graphql-tag'

const GET_QUOTES = gql`
${MONEY_FIELDS}
query GetQuotes(
  $storeId: String
  $cultureName: String
  $currencyCode: String
  $userId: String
  $sort: String
  $keyword: String
  $first: Int
  $after: String
) {
  quotes(
    storeId: $storeId
    cultureName: $cultureName
    currencyCode: $currencyCode
    userId: $userId
    sort: $sort
    keyword: $keyword
    first: $first
    after: $after
  ) {
    totalCount
    items {
      id
      createdDate
      customerId
      number
      status
      totals {
        grandTotalInclTax {
          ...moneyFields
        }
      }
    }
  }
}
`

export default GET_QUOTES