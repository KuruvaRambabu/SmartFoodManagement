import { observable, action } from 'mobx'

class MealItemsModel {
   itemId: number
   itemName: string
   category: string
   servingType: string
   @observable quantity: number

   constructor(item) {
      this.itemId = item.item_id
      this.itemName = item.name
      this.category = item.category
      this.servingType = item.serving_size
      this.quantity = item.quantity
   }
   @action.bound
   onIncrementQuantity() {
      this.quantity = this.quantity + 1
   }
   @action.bound
   onDecrementQuantity() {
      if (this.quantity > 0) {
         this.quantity = this.quantity - 1
      }
   }
}
export default MealItemsModel
