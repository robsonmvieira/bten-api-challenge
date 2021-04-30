export interface ITokenAdapter {
  sign(payload: unknown, key: string, config: unknown): string
  verify(token: string, key: string): boolean
}
