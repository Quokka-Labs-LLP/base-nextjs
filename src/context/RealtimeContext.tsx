import React from 'react'
import { split, HttpLink, ApolloProvider } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createClient } from 'graphql-ws'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
})

export interface RealTimProps extends JSX.IntrinsicAttributes {
  children: JSX.Element
  auth?: { token: string }
}

export default function RealTime(props: RealTimProps): JSX.Element {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'ws://localhost:4000/graphql',
      ...(props.auth
        ? {
            connectionParams: {
              authToken: props.auth.token,
            },
          }
        : {}),
    }),
  )

  // The split function takes three parameters:
  //
  // * A function that's called for each operation to execute
  // * The Link to use for an operation if the function returns a "truthy" value
  // * The Link to use for an operation if the function returns a "falsy" value
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    httpLink,
  )

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
