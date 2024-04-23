import FULL_CART_FIELDS from "../../../fragments/fullCartFields"
import gql from 'graphql-tag'

const ADD_COUPON = gql`
${FULL_CART_FIELDS}
mutation AddCoupon($command: InputAddCouponType!) {
  addCoupon(command: $command) {
    ...fullCartFields
  }
}
`

export default ADD_COUPON
