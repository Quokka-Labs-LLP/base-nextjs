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
  /**
   * Create a web socket link for subscription.
   */
  const wsLink = new GraphQLWsLink(
    createClient({
      url: `ws:${process.env.REACT_APP_GRAPHQL_ROOT}`,
      /**
       * Controls when should the connection be established.
       *
       * false: Establish a connection immediately. Use onNonLazyError to handle errors.
       * true: Establish a connection on first subscribe and close on last unsubscribe.
       * Use the subscription sink's error to handle errors.
       */
      lazy: true,
      /**
       * How many times should the client try to reconnect on abnormal socket closure
       * before it errors out?
       */
      retryAttempts: 2,
      /**
       * Attach the auth token into connectionParams for authenticated calls.
       */
      ...(props.auth
        ? {
            connectionParams: {
              authToken: props.auth.token,
            },
          }
        : {}),
    }),
  )

  /**
   * The [Apollo Link](https://www.apollographql.com/docs/react/api/link/introduction)
   * library enables you to configure advanced handling of errors that occur while
   * executing GraphQL operations.
   *
   * As a recommended first step, you can add an onError link to your link chain
   * that receives error details and acts on them accordingly.
   */
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

  /**
   * Create an http link for setting up the graphql.
   */
  const httpLink = new HttpLink({
    uri: `http:${process.env.REACT_APP_GRAPHQL_ROOT}`,
    // credentials: 'include',
  })

  /**
   * The split function takes three parameters:
   *
   * A function that's called for each operation to execute
   * The Link to use for an operation if the function returns a "truthy" value
   * The Link to use for an operation if the function returns a "falsy" value
   *
   */
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    httpLink,
  )

  /**
   * The onError link can retry a failed operation based on the type of GraphQL
   * error that's returned. For example, when using token-based authentication,
   * you might want to automatically handle re-authentication when the token
   * expires.
   */
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

  /**
   * Creating an authLink and send the authToken into the headers
   * of every graphql api calls for authenticated calls.
   */
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

  /**
   * The ApolloClient class encapsulates Apollo's core client-side API.
   *
   * See https://www.apollographql.com/docs/react/api/core/ApolloClient
   */
  const client = new ApolloClient({
    // You can provide an Apollo Link instance to serve as Apollo Client's network layer.
    link: from([errorLink, retryLink, authLink, splitLink]),
    // The URI of the GraphQL endpoint that Apollo Client will communicate with.
    // uri: '',
    /**
     * Configuring the Apollo Client cache
     * https://www.apollographql.com/docs/react/caching/overview
     *
     * The cache that Apollo Client should use to store query results locally.
     * The recommended cache is InMemoryCache, which is provided by the
     * @apollo/client package.
     */
    cache: new InMemoryCache(),
    /**
     * If true, Apollo Client will assume results read from the cache are never
     * mutated by application code, which enables substantial performance optimizations.
     */
    assumeImmutableResults: true,
    /**
     * If false, Apollo Client sends every created query to the server, even if
     * a completely identical query (identical in terms of query string, variable
     * values, and operationName) is already in flight.
     */
    queryDeduplication: true,
    /**
     * Provide this object to set application-wide default values for options you
     * can provide to the watchQuery, query, and mutate functions.
     */
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
    <GQLContext.Provider {...props} value={null}>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </GQLContext.Provider>
  )
}

// eslint-disable-next-line
export function useGQLContext(): any {
  return useContext(GQLContext)
}
