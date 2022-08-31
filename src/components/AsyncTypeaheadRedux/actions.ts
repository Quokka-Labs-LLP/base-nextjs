export const requestGithubUsers = (query: any) => ({
  type: 'GITHUB_USERS_REQUEST',
  query,
})

export const storeGithubUsers = (query: any, users: any) => ({
  type: 'GITHUB_USERS_RESPONSE',
  query,
  users,
})

export const searchGithubUsers = (query: string) => (dispatch: any) => {
  dispatch(requestGithubUsers(query))

  fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items: users }) => dispatch(storeGithubUsers(query, users)))
}
