import { ApolloError } from '@apollo/client';

import { RepositoryType } from '../components/Table/types';
import { useGetRepositoriesQuery } from '../graphql/queries/GetRepositories/GetRepositories.generated';

type UseGetRepositoriesReturnType = {
  repositories: RepositoryType[];
  isRepositoriesLoading: boolean;
  isRepositoriesError: ApolloError | undefined;
};

type RepositoryNode = {
  __typename: 'Repository';
  id: string;
  name: string;
  forkCount: number;
  stargazerCount: number;
  updatedAt: string;
  primaryLanguage?: {
    __typename: 'Language';
    name: string;
  } | null;
  description: string;
  languages: {
    nodes: {
      __typename: 'Language';
      name: string;
    }[];
    __typename: 'LanguageConnection';
  };
};

/**
 * A custom hook for fetching and formatting repository data based on a search query.
 *
 * @param query - A string representing the search term used to filter repositories.
 * @returns An object containing:
 *   - `repositories`: An array of formatted repository objects, with details such as id, name, primary language, number of forks, stars, last updated date, description, and additional languages.
 *   - `isRepositoriesLoading`: A boolean indicating whether the data is currently being loaded.
 *   - `isRepositoriesError`: An `ApolloError` object, if an error occurred during the data fetch; otherwise, `undefined`.
 */
export const useGetRepositories = (query: string): UseGetRepositoriesReturnType => {
  const { data, loading, error } = useGetRepositoriesQuery({
    variables: {
      query: query,
    },
  });

  const formattedData: RepositoryType[] =
    data?.search.edges
      ?.filter(
        (item): item is { node: { __typename: 'Repository' } & RepositoryNode } =>
          item?.node?.__typename === 'Repository',
      )
      ?.map((item) => ({
        id: item.node.id,
        name: item.node.name,
        lang: item.node.primaryLanguage?.name ?? '',
        forks: item.node.forkCount,
        stars: item.node.stargazerCount,
        updatedAt: new Date(item.node.updatedAt),
        description: item.node.description,
        languages: item.node.languages.nodes.map((lang) => lang.name),
      })) ?? [];

  return {
    repositories: formattedData,
    isRepositoriesLoading: loading,
    isRepositoriesError: error,
  };
};
