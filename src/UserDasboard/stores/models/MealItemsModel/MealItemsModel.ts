class MealItemsModel {
   itemId: number
   itemName: string
   category: string
   servingType: string
   quantity: number

   constructor(item) {
      this.itemId = item.item_id
      this.itemName = item.name
      this.category = item.category
      this.servingType = item.serving_size
      this.quantity = item.quantity
   }
}
export default MealItemsModel
