import gql from 'graphql-tag';

export const GET_ME = gql`
  query GetMe {
    me {
      id
      memberId
      userName
      email
      emailConfirmed
      photoUrl
      phoneNumber
      permissions
      isAdministrator
      passwordExpired
      forcePasswordChange
      lockedState
      normalizedUserName
      accessFailedCount
      createdBy
      lockoutEnabled
      modifiedBy
      normalizedEmail
      phoneNumberConfirmed
      roles {
        description
        id
        name
        normalizedName
        permissions
      }
      securityStamp
      storeId
      twoFactorEnabled
      userType
      contact {
        id
        outerId
        memberType
        name
        status
        phones
        emails
        groups
        seoObjectType
        firstName
        lastName
        middleName
        fullName
        birthDate
        defaultBillingAddress {
          id
          key
          isDefault
          city
          countryCode
          countryName
          email
          firstName
          middleName
          lastName
          line1
          line2
          name
          organization
          phone
          postalCode
          regionId
          regionName
          zip
          outerId
          description
          addressType
        }
        defaultShippingAddress {
          id
          key
          isDefault
          city
          countryCode
          countryName
          email
          firstName
          middleName
          lastName
          line1
          line2
          name
          organization
          phone
          postalCode
          regionId
          regionName
          zip
          outerId
          description
          addressType
        }
      }
    }
  }
`;
