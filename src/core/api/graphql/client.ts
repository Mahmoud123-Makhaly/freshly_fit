import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL + '/graphql',
  cache: new InMemoryCache(),
});

export default graphqlClient;
