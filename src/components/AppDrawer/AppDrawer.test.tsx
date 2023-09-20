import { newStore } from '@/redux/store'
// @ts-ignore
import { render, screen, waitFor, waitForElement } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { Suspense } from 'react'

import { Wrapper } from '@/app/dashboard/users/pageTest'

import AppDrawer from './AppDrawer'

beforeEach(() => {
  fetchMock.resetMocks()
})

describe('AppDrawer Wrapper', () => {
  it('AppDrawer', () => {
    render(
      <Wrapper>
        <AppDrawer />
      </Wrapper>,
    )
    const links = [
      {
        title: 'Dashboard',
        path: '/dashboard/',
        icons: HTMLElement,
      },
      {
        title: 'Users',
        path: '/dashboard/users/',
        icons: HTMLElement,
      },
    ]
    const anchorEl: any[] = []
    for (let i = 0; i < links.length; i++) {
      anchorEl.push(screen.getByText(links[i].title))
    }
    expect(anchorEl).toHaveLength(links.length)
  })
})
