export interface CreateSessionResponse {
  user: {
    id: string
    email: string
  }
  token: string
}
