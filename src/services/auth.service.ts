import { Auth } from "@/interfaces/auth.interface"
import { User } from "@/interfaces/user.interface"
import UserModel from "@/models/user.model"
import { encrypt, verify } from "@/utils/bcrypt.handle"
import { generateToken } from "@/utils/jwt.handle"

export const registerNewUser = async ({name, lastName, email, password}: User) => {
  const checkUser = await UserModel.findOne({email})
  if (checkUser) return "ALREADY_EXISTS"
  const passHash = await encrypt(password)
  const registerNewUser = await UserModel.create({name, 
    lastName, 
    email, 
    password: passHash})

  return registerNewUser
} 

export const loginUser = async ({email, password}: Auth) => {
  const checkUser = await UserModel.findOne({email})
  if (!checkUser) return "USER_NOT_FOUND"

  const passHash = checkUser.password
  const checkPass = await verify(password, passHash)
  
  if (!checkPass) return "PASSWORD_INCORRECT"
  const token = generateToken(checkUser.email)

  const data = {
    token,
    user: checkUser
  }

  return data
}