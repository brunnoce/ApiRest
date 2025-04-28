import { Request, Response } from "express"
import { registerNewUser, loginUser } from "@/services/auth.service"

export const registerCtrl = async ({body}: Request, res: Response) => {
  const response = await registerNewUser(body)
  res.send(response)
}

export const loginCtrl = async ({body}: Request, res: Response) => {
  const {email, password} = body  
  const response = await loginUser({email, password})

  if(response === "PASSWORD_INCORRECT") {
    res.status(403)
    res.send(response)
  } else {
    res.send(response)
  }

}