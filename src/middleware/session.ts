import { verifyToken } from "@/utils/jwt.handle";
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

export const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || ''
    const jwt = jwtUser.split(' ').pop()
    const isUser = verifyToken(`${jwt}`)
    console.log(isUser)

    if (!isUser) {
      res.status(401)  
      res.send("JWT_INVALID")
    } else {
      req.user = isUser
      next()
    }

  } catch (error) {
    res.status(400)
    res.send("SESSION_NOT_VALIDATED")
    console.log(error)
  }
}