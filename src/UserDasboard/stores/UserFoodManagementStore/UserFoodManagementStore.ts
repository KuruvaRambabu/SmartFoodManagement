import { observable } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import UserFoodManagementService from '../../services/UserFoodMangementService'

import MealCardDataModel from '../models/MealCardDataModel/MealCardDataModel'
import UserSelectedMealPreferenceModel from '../models/UserSelectedMealPreferenceModel/UserSelectedMealPreferenceModel'
import BannerDataModel from '../models/BannerDataModel/BannerDataModel'

class UserFoodManagementStore {
   @observable selectedPage!: string

   @observable getBannerDataAPIStatus!: APIStatus
   @observable getBannerDataAPIError!: Error | null
   @observable bannerData!: Array<BannerDataModel>

   @observable getMealCardAPIStatus!: APIStatus
   @observable getMealCardAPIError!: Error | null
   @observable mealCardData!: Array<MealCardDataModel>

   @observable getUserMealPreferenceDetailsAPIStatus!: APIStatus
   @observable getUserMealPreferenceDetailsAPIError!: Error | null
   @observable getUserMealPreferenceDetailsData
   @observable selectedMealPreference!: string

   userFoodManagementService: UserFoodManagementService

   @observable selectedMealDate: Date

   onSelectReviewFood
   constructor(userFoodManagementService) {
      this.userFoodManagementService = userFoodManagementService
      this.selectedMealDate = new Date()
      this.onSelectReviewFood = new MealCardDataModel(
         this.userFoodManagementService
      )
      this.init()
   }

   @action.bound
   init() {
      this.getBannerDataAPIStatus = API_INITIAL
      this.getBannerDataAPIError = null
      this.bannerData = []

      this.getMealCardAPIStatus = API_INITIAL
      this.getMealCardAPIError = null
      this.mealCardData = []

      this.getUserMealPreferenceDetailsAPIStatus = API_INITIAL
      this.getUserMealPreferenceDetailsAPIError = null
      this.getUserMealPreferenceDetailsData = []
   }
   @action.bound
   onChangeMealDate(date: Date) {
      this.selectedMealDate = date
   }

   @action.bound
   getBannerDataAPI(onSuccess, onFailure) {
      const bannerDataPromise = this.userFoodManagementService.getBannerDataAPI()
      return bindPromiseWithOnSuccess(bannerDataPromise)
         .to(this.setGetBannerDataAPIStatus, response => {
            this.setGetBannerDataAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setGetBannerDataAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setGetBannerDataAPIStatus(apiStatus) {
      this.getBannerDataAPIStatus = apiStatus
   }

   @action.bound
   setGetBannerDataAPIError(error) {
      this.getBannerDataAPIError = error
   }

   @action.bound
   setGetBannerDataAPIResponse(response) {
      const data = response.banner_data
      this.bannerData = data.map(occasion => {
         return new BannerDataModel(occasion)
      })
   }

   @action.bound
   getMealCardDataAPI() {
      const mealCardDataPromise = this.userFoodManagementService.getMealCardDataAPI()
      return bindPromiseWithOnSuccess(mealCardDataPromise)
         .to(this.setGetMealCardAPIStatus, response => {
            this.setGetMealCardAPIResponse(response)
         })
         .catch(this.setGetMealCardAPIError)
   }

   @action.bound
   setGetMealCardAPIStatus(apiStatus) {
      this.getMealCardAPIStatus = apiStatus
   }

   @action.bound
   setGetMealCardAPIError(error) {
      this.getMealCardAPIError = error
   }

   @action.bound
   setGetMealCardAPIResponse(response) {
      const data = response.meal_info
      this.mealCardData = data.map(cardData => {
         return new MealCardDataModel(cardData)
      })
   }

   @action.bound
   getUserMealPreferenceDetailsAPI() {
      const userMealPreferenceDetailsPromise = this.userFoodManagementService.getUserMealPreferenceDetailsDataAPI()
      return bindPromiseWithOnSuccess(userMealPreferenceDetailsPromise)
         .to(this.setGetUserMealPreferenceDetailsAPIStatus, response => {
            this.setGetUserMealPreferenceDetailsDataResponse(response)
         })
         .catch(this.setGetUserMealPreferenceDetailsAPIError)
   }

   @action.bound
   setGetUserMealPreferenceDetailsAPIStatus(apiStatus) {
      this.getUserMealPreferenceDetailsAPIStatus = apiStatus
   }

   @action.bound
   setGetUserMealPreferenceDetailsAPIError(error) {
      this.getUserMealPreferenceDetailsAPIError = error
   }
   @action.bound
   setGetUserMealPreferenceDetailsDataResponse(response) {
      this.selectedMealPreference = response.meal_type
      const selectedMealInformation = response.selected_meal_information
      this.getUserMealPreferenceDetailsData = selectedMealInformation.map(
         mealObject => {
            return new UserSelectedMealPreferenceModel(mealObject)
         }
      )
   }

   @action.bound
   onClickReviewFood() {
      this.onSelectReviewFood.getReviewForSelectedMealAPI()
   }
}

export default UserFoodManagementStore
