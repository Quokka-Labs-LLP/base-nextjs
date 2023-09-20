import { renderHook, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import { Provider } from 'react-redux'
import type { ReactNode } from 'react'

import { newStore } from '../store'
import { useGetUsersQuery } from './api'

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={newStore}>{children}</Provider>
}

beforeEach(() => {
  fetchMock.resetMocks()
})

describe('useGetUserQuery', () => {
  const endpointName = 'getUsers' // is a endpoint name (aks method in create api)
  const data = {}

  beforeEach(() => {
    fetchMock.mockOnceIf(`https://jsonplaceholder.typicode.com/`, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      }),
    )
  })

  it('renders hook', async () => {
    const { result } = renderHook(() => useGetUsersQuery(''), {
      wrapper,
    })
    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(fetchMock).toBeCalledTimes(0)
    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false,
    })
  })
})
