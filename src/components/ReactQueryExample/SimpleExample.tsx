import React from 'react'
// eslint-disable-next-line
// @ts-ignore
import { useQuery } from 'react-query'

import Card from '../Card'

export default function BasicExample(): JSX.Element {
  function fetchGithubRepoDetails() {
    return fetch(`https://api.github.com/repos/tannerlinsley/react-query`).then((res) => res.json())
  }

  const { isLoading, error, data, isFetching } = useQuery(['repoData'], fetchGithubRepoDetails)

  return (
    <Card label='Simple'>
      {isLoading && <>Loading...</>}
      {error && <>An error has occurred: {error?.message}</>}
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong> <strong>✨ {data?.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </Card>
  )
}
