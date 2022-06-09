import React, { Suspense } from 'react'

interface LoaderProp {
  children: JSX.Element
}

export default function Loader({ children }: LoaderProp) {
  return <Suspense fallback={<p>Loading....</p>}>{children}</Suspense>
}
