import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

class MealCardDataModel {
   @observable getReviewForSelectedMealAPIStatus!: APIStatus
   @observable getReviewForSelectedMealAPIError!: Error | null
   @observable getReviewForSelectedMealData

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
      this.init()
   }

   init() {
      this.getReviewForSelectedMealAPIStatus = API_INITIAL
      this.getReviewForSelectedMealAPIError = null
      this.getReviewForSelectedMealData = []
   }

   @action.bound
   getReviewForSelectedMealAPI() {
      const mealReviewPromise = ''
   }
   @action.bound
   setGetReviewForSelectedMealAPIStatus(apiStatus) {
      this.getReviewForSelectedMealAPIStatus = apiStatus
   }
   @action.bound
   setGetReviewForSelectedMealAPIError(error) {
      this.getReviewForSelectedMealAPIError = error
   }

   @action.bound
   setGetReviewForSelectedMealResponse(response) {
      console.log(response)
   }
}

export default MealCardDataModel
