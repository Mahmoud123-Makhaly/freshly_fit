import gql from 'graphql-tag'

const GET_MENUS = gql`
query GetMenus($storeId: String!, $cultureName: String, $keyword: String) {
  menus(storeId: $storeId, cultureName: $cultureName, keyword: $keyword) {
    name
    items {
      title
      url
      priority
    }
  }
}
`

export default GET_MENUS