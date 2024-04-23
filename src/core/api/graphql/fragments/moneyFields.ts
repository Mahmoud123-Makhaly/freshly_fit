import CURRENCY_FIELDS from './currencyFields' 
import gql from 'graphql-tag'

const MONEY_FIELDS = gql`
${CURRENCY_FIELDS}
fragment moneyFields on MoneyType {
  amount
  formattedAmount
  formattedAmountWithoutCurrency
  currency {
    ...currencyFields
  }
}
`

export default  MONEY_FIELDS
