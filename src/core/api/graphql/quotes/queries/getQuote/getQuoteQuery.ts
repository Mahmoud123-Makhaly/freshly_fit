import MONEY_FIELDS from "../../../fragments/moneyFields"
import QUOTE_LINE_ITEM_FIELDS from "../../../fragments/quoteLineItemFields"
import QUOTE_ADDRESS_FIELDS from "../../../fragments/quoteAddressFields"
import gql from 'graphql-tag'

const GET_QUOTE = gql`
${MONEY_FIELDS}
${QUOTE_ADDRESS_FIELDS}
${QUOTE_LINE_ITEM_FIELDS}
query GetQuote($id: String, $storeId: String, $userId: String, $currencyCode: String, $cultureName: String) {
  quote(id: $id, storeId: $storeId, userId: $userId, currencyCode: $currencyCode, cultureName: $cultureName) {
    id
    number
    createdDate
    cancelledDate
    cancelReason
    comment
    isCancelled
    status
    items {
      ...quoteLineItemFields
    }
    addresses {
      ...quoteAddressFields
    }
    totals {
      grandTotalInclTax {
        ...moneyFields
      }
    }
  }
}
`

export default GET_QUOTE