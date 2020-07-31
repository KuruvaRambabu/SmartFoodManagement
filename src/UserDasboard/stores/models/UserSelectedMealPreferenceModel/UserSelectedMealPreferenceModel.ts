import MealItemsModel from '../MealItemsModel/MealItemsModel'

class UserSelectedMealPreferenceModel {
   mealPreference: string
   listOfItems = []

   constructor(mealObject) {
      this.mealPreference = mealObject.status
      const itemsDetails = mealObject.items
      this.listOfItems = itemsDetails.map(item => new MealItemsModel(item))
   }
}
export default UserSelectedMealPreferenceModel
