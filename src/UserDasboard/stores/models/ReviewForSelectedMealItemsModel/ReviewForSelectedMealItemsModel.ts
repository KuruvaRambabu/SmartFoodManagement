import { observable, action } from 'mobx'

class ReviewForSelectedMealItemsModel {
   itemId: number
   itemName: string
   @observable quanlityRating: number
   @observable tasteRating: number

   constructor(object) {
      this.itemId = object.item_id
      this.itemName = object.item_name
      this.quanlityRating = object.quantity
      this.tasteRating = object.taste
   }

   @action.bound
   onChangeQualityRating(rating) {
      this.quanlityRating = rating
   }

   @action.bound
   onChangeTasteRating(rating) {
      this.tasteRating = rating
   }
}

export default ReviewForSelectedMealItemsModel
