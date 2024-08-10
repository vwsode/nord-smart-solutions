import * as Types from '../../generated/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetRepositoriesQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
}>;


export type GetRepositoriesQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', edges?: Array<{ __typename?: 'SearchResultItemEdge', node?: { __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository', id: string, name: string, forkCount: number, stargazerCount: number, updatedAt: any, primaryLanguage?: { __typename?: 'Language', name: string } | null } | { __typename?: 'User' } | null } | null> | null } };


export const GetRepositoriesDocument = gql`
    query GetRepositories($query: String!) {
  search(query: $query, type: REPOSITORY, first: 20) {
    edges {
      node {
        ... on Repository {
          id
          name
          primaryLanguage {
            name
          }
          forkCount
          stargazerCount
          updatedAt
        }
      }
    }
  }
}
    `;

/**
 * __useGetRepositoriesQuery__
 *
 * To run a query within a React component, call `useGetRepositoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepositoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepositoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetRepositoriesQuery(baseOptions: Apollo.QueryHookOptions<GetRepositoriesQuery, GetRepositoriesQueryVariables> & ({ variables: GetRepositoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRepositoriesQuery, GetRepositoriesQueryVariables>(GetRepositoriesDocument, options);
      }
export function useGetRepositoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRepositoriesQuery, GetRepositoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRepositoriesQuery, GetRepositoriesQueryVariables>(GetRepositoriesDocument, options);
        }
export function useGetRepositoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRepositoriesQuery, GetRepositoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRepositoriesQuery, GetRepositoriesQueryVariables>(GetRepositoriesDocument, options);
        }
export type GetRepositoriesQueryHookResult = ReturnType<typeof useGetRepositoriesQuery>;
export type GetRepositoriesLazyQueryHookResult = ReturnType<typeof useGetRepositoriesLazyQuery>;
export type GetRepositoriesSuspenseQueryHookResult = ReturnType<typeof useGetRepositoriesSuspenseQuery>;
export type GetRepositoriesQueryResult = Apollo.QueryResult<GetRepositoriesQuery, GetRepositoriesQueryVariables>;