import React from 'react'
// eslint-disable-next-line
// @ts-ignore
import { useQuery, useQueryClient, useMutation } from 'react-query'

import Card from '../Card'

function login() {
  document.cookie = 'swr-test-token=swr;'
}

function logout() {
  document.cookie = 'swr-test-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export default function WindowRefocusFetching(): JSX.Element {
  const queryClient = useQueryClient()

  const { status, data, error } = useQuery(['user'], async () => {
    // const res = await fetch('/api/user')
    return {
      loggedIn: true,
      name: 'Tanner',
      avatar: 'https://github.com/tannerlinsley.png',
    }
  })

  const logoutMutation = useMutation(logout, {
    onSuccess: () => queryClient.invalidateQueries(['user']),
  })

  const loginMutation = useMutation(login, {
    onSuccess: () => queryClient.invalidateQueries(['user']),
  })

  return (
    <Card label='Window Refocus Fetching'>
      <p>
        In this example, you should open two tabs, log in or out on one tab, then focus the other to see it sync up!
        (Pro Tip: Do NOT use incognito tabs)
      </p>
      {status === 'loading' ? (
        <h1>Loading...</h1>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : data.loggedIn ? (
        <div>
          <h1>Welcome, {data.name}</h1>
          <img src={data.avatar} width={80} />
          <div>
            <button
              onClick={() => {
                logoutMutation.mutate()
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please login</h1>
          <div>
            <button
              onClick={() => {
                loginMutation.mutate()
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </Card>
  )
}
