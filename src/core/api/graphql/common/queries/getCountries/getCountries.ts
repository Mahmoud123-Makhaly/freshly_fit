import gql from 'graphql-tag'

const GET_COUNTRIES = gql`
query GetCountries {
  countries {
    id
    name
    regions {
      id
      name
    }
  }
}
`

export default GET_COUNTRIES