export interface User {
  id: number
  email: string
  first_name: string
}

export type GetUserResponse = {
  data: User[]
}
