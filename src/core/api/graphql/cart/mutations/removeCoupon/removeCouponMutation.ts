import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const REMOVE_COUPON = gql`
${FULL_CART_FIELDS}
mutation RemoveCoupon($command: InputRemoveCouponType!) {
  removeCoupon(command: $command) {
    ...fullCartFields
  }
}
`

export default REMOVE_COUPON
