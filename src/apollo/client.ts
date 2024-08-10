import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_ACCESS_TOKEN = import.meta.env.GITHUB_ACCESS_TOKEN;
const GITHUB_GQL_URI = 'https://api.github.com/graphql';

export const client = new ApolloClient({
  uri: GITHUB_GQL_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
  },
});
