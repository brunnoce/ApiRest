import { addItem, deleteItem, getAllItems, getItem, updateItem } from "@/controllers/item.controller";
import { logMiddleware } from "@/middleware/log";
import { Router } from "express";

const router = Router()

router.get('/', getAllItems)
router.get('/:id', logMiddleware, getItem)
router.post('/', addItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router }