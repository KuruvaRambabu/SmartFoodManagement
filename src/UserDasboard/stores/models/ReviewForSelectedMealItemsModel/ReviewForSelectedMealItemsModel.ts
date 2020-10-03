import { observable, action } from 'mobx'

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

   @action.bound
   onChangeQualityRating(rating) {
      console.log('rate', rating.target.areaPosinset)
      this.quantityRating = this.quantityRating + 1
   }
}

export default ReviewForSelectedMealItemsModel
