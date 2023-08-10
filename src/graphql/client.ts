import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client: any = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
})
