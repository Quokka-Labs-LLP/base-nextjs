import React, { useState } from 'react'
// eslint-disable-next-line
// @ts-ignore
import { useQuery, useQueryClient } from 'react-query'

import Card from '../Card'

function usePosts() {
  return useQuery(['posts'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
  })
}

// eslint-disable-next-line
function Posts({ setPostId }: { setPostId: any }) {
  const queryClient = useQueryClient()
  const { status, data, error, isFetching } = usePosts()

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {/* eslint-disable-next-line */}
              {data.map((post: any) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href='#'
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['post', post.id])
                        ? {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  )
}

const getPostById = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return await res.json()
}

function usePost(postId: number) {
  return useQuery(['post', postId], () => getPostById(postId), {
    enabled: !!postId,
  })
}

// eslint-disable-next-line
function Post({ postId, setPostId }: { postId: any; setPostId: any }) {
  const { status, data, error, isFetching } = usePost(postId)

  return (
    <div>
      <div>
        <a onClick={() => setPostId(-1)} href='#'>
          Back
        </a>
      </div>
      {!postId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  )
}

export default function BasicExample(): JSX.Element {
  const [postId, setPostId] = useState(-1)

  return (
    <Card label='Basic Example'>
      <p>
        As you visit the posts below, you will notice them in a loading state the first time you load them. However,
        after you return to this list and click on any posts you have already visited again, you will see them load
        instantly and background refresh right before your eyes!{' '}
        <strong>(You may need to throttle your network speed to simulate longer loading sequences)</strong>
      </p>
      {postId > -1 ? <Post postId={postId} setPostId={setPostId} /> : <Posts setPostId={setPostId} />}
    </Card>
  )
}
