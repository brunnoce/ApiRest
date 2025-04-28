import { getOrders } from "@/controllers/order.controller"
import { checkJWT } from "@/middleware/session"
import { Router } from "express"

const router = Router()

router.get('/', checkJWT, getOrders)

export { router }