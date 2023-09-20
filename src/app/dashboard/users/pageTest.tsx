import { newStore } from '@/redux/store'
// @ts-ignore
import { render, screen, waitFor, waitForElement } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { Suspense } from 'react'

// import {} from ''

import Users from './page'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={newStore}>{children}</Provider>
}

beforeEach(() => {
  fetchMock.resetMocks()
})

describe('Users Page', () => {
  it('Fethced user', async () => {
    // const users = [
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz',
    //     address: {
    //       street: 'Kulas Light',
    //       suite: 'Apt. 556',
    //       city: 'Gwenborough',
    //       zipcode: '92998-3874',
    //       geo: {
    //         lat: '-37.3159',
    //         lng: '81.1496',
    //       },
    //     },
    //     phone: '1-770-736-8031 x56442',
    //     website: 'hildegard.org',
    //     company: {
    //       name: 'Romaguera-Crona',
    //       catchPhrase: 'Multi-layered client-server neural-net',
    //       bs: 'harness real-time e-markets',
    //     },
    //   },
    // ]

    render(
      <Suspense>
        <Wrapper>
          <Users />
        </Wrapper>
      </Suspense>,
    )

    const tableHead = screen.getByTestId('table-head')
    expect(tableHead).toBeInTheDocument()

    // const userName = await waitForElement(() => getByText('Leanne Graham'))
    // expect(userName).toBeInTheDocument()
  })
  // const inputElement = screen.getByTestId('search-input')
})
