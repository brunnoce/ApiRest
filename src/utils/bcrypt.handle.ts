import { hash, compare } from "bcrypt-ts"

export const encrypt = async (password: string) => {
  const passHash = await hash(password, 8)
  return passHash
}

export const verify = async (password: string, passHash: string) => {
  const comparePass = await compare(password, passHash)
  return comparePass
}