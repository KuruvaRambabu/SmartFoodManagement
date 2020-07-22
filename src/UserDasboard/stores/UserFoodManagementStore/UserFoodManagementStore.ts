import { observable } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import BannerDataModel from '../models/BannerDataModel/BannerDataModel'
import UserFoodManagementService from '../../services/UserFoodMangementService'

class UserFoodManagementStore {
   @observable selectedPage!: string

   @observable getBannerDataAPIStatus!: APIStatus
   @observable getBannerDataAPIError!: Error | null
   @observable bannerData!: Array<BannerDataModel>

   @observable getMealCardAPIStatus!: APIStatus
   @observable getMealCardAPIError!: Error | null
   @observable mealCardData!: Array<any>

   userFoodManagementService: UserFoodManagementService

   constructor(userFoodManagementService) {
      this.userFoodManagementService = userFoodManagementService
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
      data.forEach(occasion => {
         const eachData = new BannerDataModel(occasion)
         this.bannerData.push(eachData)
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
      console.log(response)
   }
}

export default UserFoodManagementStore
