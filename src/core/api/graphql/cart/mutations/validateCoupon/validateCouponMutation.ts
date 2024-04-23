import gql from 'graphql-tag'

const VALIDATE_COUPON = gql`
mutation ValidateCoupon($command: InputValidateCouponType!) {
  validateCoupon(command: $command)
}`

export default VALIDATE_COUPON
