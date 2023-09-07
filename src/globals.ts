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

  return fetch(isFullUrl ? `${url}` : `${apiRoot}${url}`, config).then((res: any) => res.json())
}

export const checkObjectLength = (obj: any) => {
  if (Object.keys(obj).length) return true
  else return false
}

export const email = 'email'
export const password = 'password'
export const text = 'text'
