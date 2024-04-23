import gql from 'graphql-tag'

const UPDATE_MEMBER_ADDRESSES = gql`
mutation UpdateMemberAddresses($command: InputUpdateMemberAddressType!) {
  updateMemberAddresses(command: $command) {
    id
  }
}`

export default UPDATE_MEMBER_ADDRESSES
