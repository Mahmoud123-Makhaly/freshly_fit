import gql from 'graphql-tag'

const GET_MENU = gql`
query GetMenu($storeId: String!, $cultureName: String!, $name: String!) {
  menu(storeId: $storeId, cultureName: $cultureName, name: $name) {
    items {
      title
      url
      childItems {
        title
        url
      }
    }
  }
}
`

export default GET_MENU