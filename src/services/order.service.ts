import ItemModel from "@/models/item.model"

export const getAllOrders = async () => {
  const responseItem = await ItemModel.find({})
  return responseItem
}
