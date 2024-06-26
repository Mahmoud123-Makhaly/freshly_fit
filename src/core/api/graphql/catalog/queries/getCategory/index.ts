import { gql } from 'graphql-tag';
import { getChildCategoriesTreeString } from '../../../../graphql/utils';
import { globals } from '../../../../../globals';
import graphqlClient from '../../../client';
import type { Query, QueryChildCategoriesArgs } from '../../../../graphql/types';
import type { DocumentNode } from 'graphql';
import { getFilterExpressionForCategorySubtree, getFilterExpressionForZeroPrice } from '../../../../../utilities';

function getCategoryQueryDocument(categoryId: string, maxChildCategoriesLevel = 0): DocumentNode {
  const childCategoriesFragment = getChildCategoriesTreeString(maxChildCategoriesLevel);
  const categoryQueryString = categoryId
    ? `
    category(
        storeId: $storeId
        userId: $userId
        cultureName: $cultureName
        currencyCode: $currencyCode
        id: "${categoryId}"
    ) {
        id
        name
        slug
        seoInfo {
            pageTitle
            metaKeywords
            metaDescription
        }
        breadcrumbs {
            title
            seoPath
        }
        parent {
            id
            name
            slug
        }
    }`
    : '';

  return gql`
    query GetCategory(
      $storeId: String!
      $userId: String
      $cultureName: String
      $currencyCode: String
      $maxLevel: Int
      $onlyActive: Boolean
      $productFilter: String
    ) {
      ${categoryQueryString}

      childCategories(
        storeId: $storeId
        userId: $userId
        cultureName: $cultureName
        currencyCode: $currencyCode
        maxLevel: $maxLevel
        onlyActive: $onlyActive
        productFilter: $productFilter
        ${categoryId ? `categoryId: "${categoryId}"` : ''}
      ) {
        __typename
        ${childCategoriesFragment}
      }
    }
  `;
}

export type ExtendedQueryCategoryArgsType = QueryChildCategoriesArgs;

export async function getCategory(payload: ExtendedQueryCategoryArgsType) {
  const { storeId, userId, cultureName, currencyCode, catalogId } = globals;
  const queryDocument = getCategoryQueryDocument(payload.categoryId ?? '', payload.maxLevel);

  payload.productFilter = getFilterExpressionForCategorySubtree({ catalogId, categoryId: payload.categoryId ?? '' });

  const { data } = await graphqlClient.query<
    Required<Pick<Query, 'category' | 'childCategories'>>,
    ExtendedQueryCategoryArgsType
  >({
    query: queryDocument,
    variables: {
      storeId,
      userId,
      cultureName,
      currencyCode,
      ...payload,
    },
  });

  return data;
}
