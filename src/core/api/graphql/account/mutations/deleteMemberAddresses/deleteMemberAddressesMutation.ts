import gql from 'graphql-tag'

const DELETE_MEMBER_ADDRESSES = gql`
mutation DeleteMemberAddresses($command: InputDeleteMemberAddressType!) {
  deleteMemberAddresses(command: $command) {
    id
  }
}
`

export default DELETE_MEMBER_ADDRESSES