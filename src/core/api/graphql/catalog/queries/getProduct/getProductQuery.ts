import PROPERTY_FIELDS from "../../../fragments/propertyFields";
import AVAILABILITY_DATA_FIELDS from "../../../fragments/availabilityDataFields";
import gql from "graphql-tag";

const GET_PRODUCT = gql`
  ${PROPERTY_FIELDS}
  ${AVAILABILITY_DATA_FIELDS}
  query GetProduct(
    $storeId: String!
    $currencyCode: String!
    $cultureName: String
    $id: String!
  ) {
    product(
      storeId: $storeId
      id: $id
      currencyCode: $currencyCode
      cultureName: $cultureName
    ) {
      name
      id
      code
      slug
      catalogId
      category {
        id
      }
      outline
      hasVariations
      minQuantity
      maxQuantity
      imgSrc
      inWishlist
      productType
      images {
        url
      }
      assets {
        name
        url
      }
      breadcrumbs {
        itemId
        typeName
        title
        seoPath
      }
      description {
        content
      }
      properties {
        ...propertyFields
      }
      variations {
        id
        name
        images {
          url
        }
        minQuantity
        maxQuantity
        code
        productType
        properties {
          ...propertyFields
        }
        vendor {
          id
          name
          rating {
            value
            reviewCount
          }
        }
        availabilityData {
          ...availabilityDataFields
        }
        price {
          pricelistId
          discounts {
            coupon
            promotionId
            description
            amount
            amountWithTax
            promotion {
              id
              name
              description
              type
            }
          }
          listWithTax {
            amount
            formattedAmount
            formattedAmountWithoutCurrency
          }
          actual {
            amount
            formattedAmount
          }
          discountAmount {
            amount
            formattedAmount
          }
          sale {
            amount
            formattedAmount
          }
          list {
            amount
            formattedAmount
          }
          discountPercent
        }
      }
      vendor {
        id
        name
        rating {
          value
          reviewCount
        }
      }
      availabilityData {
        ...availabilityDataFields
      }
      price {
        pricelistId
        discounts {
          coupon
          promotionId
          description
          amount
          amountWithTax
          promotion {
            id
            name
            description
            type
          }
        }
        listWithTax {
          amount
          formattedAmount
          formattedAmountWithoutCurrency
        }
        actual {
          amount
          formattedAmount
        }
        discountAmount {
          amount
          formattedAmount
        }
        sale {
          amount
          formattedAmount
        }
        list {
          amount
          formattedAmount
        }
        discountPercent
      }
      seoInfo {
        pageTitle
        metaKeywords
        metaDescription
      }
    }
  }
`;

export default GET_PRODUCT;
