import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

class MealCardDataModel {
   @observable getSelectedMealReviewItemsAPIStatus!: APIStatus
   @observable getSelectedMealReviewItemsAPIError!: Error | null
   @observable getSelectedMealReviewItemsData
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
      this.getSelectedMealReviewItemsAPIStatus = API_INITIAL
      this.getSelectedMealReviewItemsAPIError = null
      this.getSelectedMealReviewItemsData = []
   }

   @action.bound
   getSelectedMealReviewItemsDataAPI() {
      const mealReviewPromise = ''
   }
   @action.bound
   setGetSelectedMealReviewItemsAPIStatus(apiStatus) {
      this.getSelectedMealReviewItemsAPIStatus = apiStatus
   }
   @action.bound
   setGetSelectedMealReviewItemsAPIError(error) {
      this.getSelectedMealReviewItemsAPIError = error
   }

   @action.bound
   setGetSelectedMealReviewItemsDataResponse(response) {
      console.log(response)
   }
}

export default MealCardDataModel
