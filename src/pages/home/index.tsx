import React, { useEffect } from 'react'

// import { gamesApi } from '../../redux/games'

export default function Home(): JSX.Element {
  // const [getGames] = gamesApi.useGetGamesMutation()

  async function ComponentDidMount() {
    // const response = await getGames({})
    // console.log(response)
  }

  useEffect(() => {
    ComponentDidMount()
  }, [])

  return <h1>Home Page</h1>
}
