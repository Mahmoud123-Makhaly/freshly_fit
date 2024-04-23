import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const REMOVE_SHIPMENT = gql`
${FULL_CART_FIELDS}
mutation RemoveShipment($command: InputRemoveShipmentType!) {
  removeShipment(command: $command) {
    ...fullCartFields
  }
}
`

export default REMOVE_SHIPMENT