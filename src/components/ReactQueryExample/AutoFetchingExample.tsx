import React from 'react'
// eslint-disable-next-line
// @ts-ignore
import { useQuery, useQueryClient, useMutation } from 'react-query'

import Card from '../Card'

export default function AutoFetching(): JSX.Element {
  const queryClient = useQueryClient()
  const [intervalMs, setIntervalMs] = React.useState(1000)
  const [value, setValue] = React.useState('')

  const { status, data, error, isFetching } = useQuery(
    ['todos'],
    async () => {
      // const res = await fetch('/api/data')
      return ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    },
    {
      // Refetch the data every second
      refetchInterval: intervalMs,
    },
  )

  const addMutation = useMutation((value: string) => fetch(`/api/data?add=${value}`), {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  const clearMutation = useMutation(() => fetch(`/api/data?clear=1`), {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') return <span>Error: {error.message}</span>

  return (
    <Card label='Auto Fetching'>
      <>
        <h1>Auto Refetch with stale-time set to 1s)</h1>
        <p>
          This example is best experienced on your own machine, where you can open multiple tabs to the same localhost
          server and see your changes propagate between the two.
        </p>
        <label>
          Query Interval speed (ms):{' '}
          <input
            value={intervalMs}
            onChange={(ev) => setIntervalMs(Number(ev.target.value))}
            type='number'
            step='100'
          />{' '}
          <span
            style={{
              display: 'inline-block',
              marginLeft: '.5rem',
              width: 10,
              height: 10,
              background: isFetching ? 'green' : 'transparent',
              transition: !isFetching ? 'all .3s ease' : 'none',
              borderRadius: '100%',
              transform: 'scale(2)',
            }}
          />
        </label>
        <h2>Todo List</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            addMutation.mutate(value, {
              onSuccess: () => {
                setValue('')
              },
            })
          }}
        >
          <input placeholder='enter something' value={value} onChange={(ev) => setValue(ev.target.value)} />
        </form>
        <ul>
          {data.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => {
              clearMutation.mutate()
            }}
          >
            Clear All
          </button>
        </div>
      </>
    </Card>
  )
}
