import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const ADD_OR_UPDATE_CART_SHIPMENT = gql`
${FULL_CART_FIELDS}
mutation AddOrUpdateCartShipment($command: InputAddOrUpdateCartShipmentType!) {
  addOrUpdateCartShipment(command: $command) {
    ...fullCartFields
  }
}
`

export default ADD_OR_UPDATE_CART_SHIPMENT