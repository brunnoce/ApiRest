import { deleteCar, getAllCars, getCar, insertCar, updateCar } from "@/services/item.service";
import { handleHttp } from "@/utils/error.handle";
import e, { Request, Response } from "express";

export const getItem = async ({params}: Request, res: Response) => {
  try {
    const { id } = params
    const response = await getCar(id)
    const data = response ? response : "NOT_FOUND"
    res.send(data)
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM")
  }
}

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const response = await getAllCars()
    res.send(response)
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_ITEMS")
  }
}

export const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const { id } = params
    const response = await updateCar(id, body)
    res.send(response)
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM")
  }
}

export const addItem = async ({body}: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    res.send(responseItem)
  } catch (error) {
    handleHttp(res, "ERROR_ADD_ITEM", error)
  }
}

export const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const { id } = params
    const response = await deleteCar(id)
    res.send(response)
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM")
  }
}