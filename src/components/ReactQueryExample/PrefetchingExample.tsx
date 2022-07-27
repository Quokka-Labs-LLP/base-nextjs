import React from 'react'
// eslint-disable-next-line
// @ts-ignore
import { useQuery, useQueryClient } from 'react-query'

import Card from '../Card'

const getCharacters = async () => {
  await new Promise((r) => setTimeout(r, 500))
  let res = await fetch('https://rickandmortyapi.com/api/character/')
  res = await res.json()
  return res
}

const getCharacter = async (selectedChar: string) => {
  await new Promise((r) => setTimeout(r, 500))
  let res = await fetch(`https://rickandmortyapi.com/api/character/${selectedChar}`)
  res = await res.json()
  return res
}

export default function PrefetchingExample(): JSX.Element {
  const queryClient = useQueryClient()
  // const rerender = React.useState(0)[1]
  const [selectedChar, setSelectedChar] = React.useState(1)

  const charactersQuery = useQuery(['characters'], getCharacters)
  const characterQuery = useQuery(['character', selectedChar], () => getCharacter(selectedChar.toString()))

  return (
    <Card label='Pre-Fetching'>
      <p>
        Hovering over a character will prefetch it, and when it&apos;s been prefetched it will turn{' '}
        <strong>bold</strong>. Clicking on a prefetched character will show their stats below immediately.
      </p>
      <h2>Characters</h2>
      {charactersQuery.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <ul>
            {charactersQuery.data?.results.map((char: any) => (
              <li
                key={char.id}
                onClick={() => {
                  setSelectedChar(char.id)
                }}
                onMouseEnter={async () => {
                  await queryClient.prefetchQuery(['character', char.id], () => getCharacter(char.id), {
                    staleTime: 10 * 1000, // only prefetch if older than 10 seconds
                  })
                }}
              >
                <div
                  style={
                    queryClient.getQueryData(['character', char.id])
                      ? {
                          fontWeight: 'bold',
                        }
                      : {}
                  }
                >
                  {char.id} - {char.name}
                </div>
              </li>
            ))}
          </ul>

          <h3>Selected Character</h3>
          {characterQuery.isLoading ? (
            'Loading...'
          ) : (
            <>
              <pre>{JSON.stringify(characterQuery.data, null, 2)}</pre>
            </>
          )}
        </>
      )}
    </Card>
  )
}
