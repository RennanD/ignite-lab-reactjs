import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5rhun0p9l01xxb7635i4l/master',
  cache: new InMemoryCache(),
});
