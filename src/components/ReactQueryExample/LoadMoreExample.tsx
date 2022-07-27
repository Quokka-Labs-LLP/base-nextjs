import React from 'react'
import { useInView } from 'react-intersection-observer'
// eslint-disable-next-line
// @ts-ignore
import { useInfiniteQuery } from 'react-query'

import Card from '../Card'

export default function LoadMoreExample(): JSX.Element {
  const { ref, inView } = useInView()

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    ['projects'],
    async ({ pageParam = 1 }) => {
      let res: any = await fetch('http://localhost:4000/api/v1/cursor?pos=' + pageParam)
      res = await res.json()
      return res
    },
    {
      // eslint-disable-next-line
      getPreviousPageParam: (firstPage: any) => firstPage.previousId ?? undefined,
      // eslint-disable-next-line
      getNextPageParam: (lastPage: any) => lastPage.nextId ?? undefined,
    },
  )

  React.useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Card label='Load More Item/Lazy load'>
      <h1>Infinite Loading</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            <button onClick={() => fetchPreviousPage()} disabled={!hasPreviousPage || isFetchingPreviousPage}>
              {isFetchingPreviousPage ? 'Loading more...' : hasPreviousPage ? 'Load Older' : 'Nothing more to load'}
            </button>
          </div>
          {/* eslint-disable-next-line */}
          {(data?.pages || []).map((page: any) => (
            <React.Fragment key={page.nextId}>
              {/* eslint-disable-next-line */}
              {(page?.items || []).map((project: any) => (
                <p
                  style={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    padding: '5rem 1rem',
                    background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
                  }}
                  key={project.id}
                >
                  {project.name}
                </p>
              ))}
            </React.Fragment>
          ))}
          <div>
            <button ref={ref} onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load Newer' : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Background Updating...' : null}</div>
        </>
      )}
      <hr />
    </Card>
  )
}
