import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import ReviewForSelectedMealItemsModel from '../ReviewForSelectedMealItemsModel/ReviewForSelectedMealItemsModel'

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

   apiService
   constructor(mealCardData) {
      this.mealId = mealCardData.meal_id
      this.mealType = mealCardData.meal_type
      this.mealStartTime = mealCardData.meal_starttime
      this.mealEndTime = mealCardData.meal_endtime
      this.itemNames = mealCardData.item_names
      this.preferenceStatus = mealCardData.preference_status
      this.mealStatus = mealCardData.meal_status
      this.deadLine = mealCardData.dead_line
      this.apiService = mealCardData
      this.init()
   }

   init() {
      this.getReviewForSelectedMealAPIStatus = API_INITIAL
      this.getReviewForSelectedMealAPIError = null
      this.getReviewForSelectedMealData = []
   }

   @action.bound
   getReviewForSelectedMealAPI() {
      console.log('model')
      const mealReviewPromise = this.apiService.getReviewForSelectedMealAPI()
      return bindPromiseWithOnSuccess(mealReviewPromise)
         .to(this.setGetReviewForSelectedMealAPIStatus, response => {
            this.setGetReviewForSelectedMealResponse(response)
         })
         .catch(this.setGetReviewForSelectedMealAPIError)
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
      this.getReviewForSelectedMealData = response.items.map(item => {
         return new ReviewForSelectedMealItemsModel(item)
      })
   }
}

export default MealCardDataModel
