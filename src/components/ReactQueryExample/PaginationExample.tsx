import React from 'react'

// eslint-disable-next-line
// @ts-ignore
import { useQuery, useQueryClient } from 'react-query'

import Card from '../Card'

async function fetchProjects(page = 0) {
  let res = await fetch('http://localhost:4000/api/v1/projects?page=' + page)
  res = await res.json()
  return res
}

export default function PaginationExample(): JSX.Element {
  const queryClient = useQueryClient()
  const [page, setPage] = React.useState(1)

  const { status, data, error, isFetching, isPreviousData } = useQuery(['projects', page], () => fetchProjects(page), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  // Prefetch the next page!
  React.useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () => fetchProjects(page + 1))
    }
  }, [data, page, queryClient])

  return (
    <Card label='Pagination'>
      <p>
        In this example, each page of data remains visible as the next page is fetched. The buttons and capability to
        proceed to the next page are also supressed until the next page cursor is known. Each page is cached as a normal
        query too, so when going to previous pages, you&apos;ll see them instantaneously while they are also refetched
        invisibly in the background.
      </p>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <div>
          {(data?.projects || []).map((project: any) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <div>Current Page: {page + 1}</div>
      <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((old) => (data?.hasMore ? old + 1 : old))
        }}
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching && <span> Loading...</span>}
    </Card>
  )
}
