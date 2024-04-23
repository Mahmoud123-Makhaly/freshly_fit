import MONEY_FIELDS from "../../../fragments/moneyFields"
import gql from 'graphql-tag'

const GET_ORDERS = gql`
${MONEY_FIELDS}
query GetOrders($filter: String, $sort: String, $cultureName: String, $userId: String, $after: String, $first: Int) {
  orders(filter: $filter, sort: $sort, cultureName: $cultureName, userId: $userId, after: $after, first: $first) {
    totalCount
    items {
      id
      createdDate
      status
      currency {
        code
      }
      total {
        ...moneyFields
      }
      inPayments {
        number
      }
      number
      customerId
      purchaseOrderNumber
    }
  }
}
`

export default GET_ORDERS