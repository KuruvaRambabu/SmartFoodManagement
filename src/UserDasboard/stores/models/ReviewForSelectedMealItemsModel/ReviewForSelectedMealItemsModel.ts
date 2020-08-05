import { observable } from 'mobx'

class ReviewForSelectedMealItemsModel {
   itemId: number
   itemName: string
   @observable quantityRating: number
   @observable tasteRating: number

   constructor(object) {
      this.itemId = object.item_id
      this.itemName = object.item_name
      this.quantityRating = object.quantity
      this.tasteRating = object.taste
   }
}

export default ReviewForSelectedMealItemsModel
