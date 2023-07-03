import type { MethodType } from './types'

export const apiRoot = process.env.NEXT_APP_API_ROOT

export function FETCH(
  method: MethodType,
  url: string,
  authToken: string | null,
  body: object | null,
  customHeaders: object = {},
  isFullUrl = false,
) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken ? { Authorization: `${authToken}` } : {}),
      ...customHeaders,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  }

  return fetch(isFullUrl ? `${url}` : `${apiRoot}${url}`, config)
    .then((res: any) => res.json())
}
