import { handleHttp } from "@/utils/error.handle";
import e, { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

export const getOrders = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "JUST_WITH_VALID_JWT",
      user: req.user
    })
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_ITEMS")
  }
}


