import React, { createContext, useContext } from 'react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { from } from '@apollo/client/link/core'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

export interface RealTimProps extends JSX.IntrinsicAttributes {
  children: JSX.Element
  auth?: { token: string }
}

export const GQLContext = createContext(null)

export default function RealtimeContext(props: RealTimProps): JSX.Element {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: `ws:${process.env.REACT_APP_GRAPHQL_ROOT}`,
      lazy: true,
      retryAttempts: 2,
      ...(props.auth
        ? {
            connectionParams: {
              authToken: props.auth.token,
            },
          }
        : {}),
    }),
  )

  const retryLink = new RetryLink({
    attempts: (count, operation, error) => {
      const isMutation =
        operation &&
        operation.query &&
        operation.query.definitions &&
        Array.isArray(operation.query.definitions) &&
        operation.query.definitions.some((def) => def.kind === 'OperationDefinition' && def.operation === 'mutation')

      if (isMutation) {
        return !!error && count < 25
      }

      return !!error && count < 6
    },
  })

  const httpLink = new HttpLink({
    uri: `http:${process.env.REACT_APP_GRAPHQL_ROOT}`,
    // credentials: 'include',
  })

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

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(`[GraphQL error]: Message: ${message}`)
        console.log(`Location: ${locations}`)
        console.log(`Path: ${path}`)
      })
    }

    // eslint-disable-next-line
    // @ts-ignore
    if (networkError && networkError.statusCode === 401) {
      console.log(`[Network Error]: ${networkError}`)
    }
  })

  const authLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      ...(props.auth
        ? {
            authToken: props.auth.token,
          }
        : {}),
    },
  }))

  const client = new ApolloClient({
    link: from([errorLink, retryLink, authLink, splitLink]),
    cache: new InMemoryCache(),
    assumeImmutableResults: true,
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'none',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  })

  return (
    // eslint-disable-next-line
    // @ts-ignore
    <GQLContext.Provider {...props} value={{}}>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </GQLContext.Provider>
  )
}

// eslint-disable-next-line
export function useGQLContext(): any {
  return useContext(GQLContext)
}
