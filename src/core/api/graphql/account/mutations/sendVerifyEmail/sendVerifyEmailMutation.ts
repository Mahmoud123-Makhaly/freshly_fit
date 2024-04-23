import gql from 'graphql-tag'

const SEND_VERIFY_EMAIL = gql`
mutation SendVerifyEmail($command: InputSendVerifyEmailType) {
  sendVerifyEmail(command: $command)
}`

export default SEND_VERIFY_EMAIL
