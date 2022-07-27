import React from 'react'

// eslint-disable-next-line
// @ts-ignore
import { useQuery, useQueryClient, useMutation } from 'react-query'

import Card from '../Card'

export default function OptimisticUpdates(): JSX.Element {
  const queryClient = useQueryClient()
  const [text, setText] = React.useState('')

  const { status, data, error, isFetching } = useQuery(['todos'], async () => {
    let res = await fetch('http://localhost:4000/api/v1/todo')
    res = await res.json()
    return res
  })

  const addTodoMutation = useMutation((text: string) => fetch(`http://localhost:4000/api/v1/todo?add=${text}`), {
    // Optimistically update the cache value on mutate, but store
    // the old value and return it so that it's accessible in case of
    // an error
    onMutate: async (text: string) => {
      setText('')
      await queryClient.cancelQueries(['todos'])

      const previousValue = queryClient.getQueryData(['todos'])

      // eslint-disable-next-line
      queryClient.setQueryData(['todos'], (old: string[]) => ({
        // eslint-disable-next-line
        // @ts-ignore
        ...old.items,
        // eslint-disable-next-line
        // @ts-ignore
        items: [...old.items, text],
        // text,
      }))

      return previousValue
    },
    // On failure, roll back to the previous value
    // eslint-disable-next-line
    onError: (err: any, variables: any, previousValue: any) => {
      console.log(err, variables)
      return queryClient.setQueryData(['todos'], previousValue)
    },
    // After success or failure, refetch the todos query
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  return (
    <Card label='Optimistic Updates'>
      <h1>Optimistic Update</h1>
      <p>
        In this example, new items can be created using a mutation. The new item will be optimistically added to the
        list in hopes that the server accepts the item. If it does, the list is refetched with the true items from the
        list. Every now and then, the mutation may fail though. When that happens, the previous list of items is
        restored and the list is again refetched from the server.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodoMutation.mutate(text)
        }}
      >
        <input type='text' onChange={(event) => setText(event.target.value)} value={text} />
        <button>{addTodoMutation.isLoading ? 'Creating...' : 'Create'}</button>
      </form>
      <br />
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        error.message
      ) : (
        <>
          <div>Updated At: {new Date().toLocaleTimeString()}</div>
          <ul>
            {(data?.items || []).map((datum: string) => (
              <li key={datum}>{datum}</li>
            ))}
          </ul>
          <div>{isFetching ? 'Updating in background...' : ' '}</div>
        </>
      )}
    </Card>
  )
}
