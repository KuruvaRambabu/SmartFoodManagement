class MealCardDataModel {
   mealId: number
   mealType: string
   mealStartTime: string
   mealEndTime: string
   itemNames: Array<string>
   preferenceStatus: string
   mealStatus: string
   deadLine: string
   constructor(mealCardData) {
      this.mealId = mealCardData.meal_id
      this.mealType = mealCardData.meal_type
      this.mealStartTime = mealCardData.meal_starttime
      this.mealEndTime = mealCardData.meal_endtime
      this.itemNames = mealCardData.item_names
      this.preferenceStatus = mealCardData.preference_status
      this.mealStatus = mealCardData.meal_status
      this.deadLine = mealCardData.dead_line
   }
}

export default MealCardDataModel
