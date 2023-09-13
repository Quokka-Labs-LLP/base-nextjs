export interface FilteredUser {
  id: string
  name: string
  email: string
  role: string
  verified: boolean
  createdAt: string
  updatedAt: string
}

export interface TaskResponse {
  status: string
  data: {
    result: any[]
  }
}

export interface UserLoginResponse {
  data: {
    email: string
    fullName: string
    token: string
  }
  code: number
  msg: string
  statusCode: number
  statusText: string
}
