import gql from 'graphql-tag'

const CURRENCY_FIELDS = gql`
fragment currencyFields on CurrencyType {
  code
  symbol
}
`
export default CURRENCY_FIELDS