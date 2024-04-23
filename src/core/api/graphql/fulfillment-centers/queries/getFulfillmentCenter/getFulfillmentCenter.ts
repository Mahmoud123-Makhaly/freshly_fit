import gql from 'graphql-tag'

const GET_FULFILLMENT_CENTER = gql`
query GetFulfillmentCenter($id: String!) {
  fulfillmentCenter(id: $id) {
    id
    name
    description
    shortDescription
    address {
      city
      countryCode
      countryName
      line1
      line2
      postalCode
      zip
      phone
    }
  }
}
`

export default GET_FULFILLMENT_CENTER