export interface IHash {
  hash(password: string, salt: string | number): Promise<string>
  verify(password: string, hashedPassword: string): Promise<boolean>
}
