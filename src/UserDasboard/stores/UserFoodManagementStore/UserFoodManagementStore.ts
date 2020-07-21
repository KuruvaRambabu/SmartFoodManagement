import { observable } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { BannerDataObject } from '../types'
import { action } from 'mobx'
import { bindPromise, bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class UserFoodManagementStore {
   @observable selectedPage!: string

   @observable getBannerDataAPIStatus!: APIStatus
   @observable getBannerDataAPIError!: Error | null
   @observable BannerData!: Array<object>
   userFoodManagementService
   constructor(userFoodManagementService) {
      this.userFoodManagementService = userFoodManagementService
      this.init()
   }

   @action.bound
   init() {
      this.getBannerDataAPIStatus = API_INITIAL
      this.getBannerDataAPIError = null
      this.BannerData = []
   }
   @action.bound
   getBannerDataAPI() {
      const bannerDataPromise = this.userFoodManagementService.getBannerDataAPI()
      return bindPromiseWithOnSuccess(bannerDataPromise)
         .to(this.setGetBannerDataAPIStatus, response => {
            this.setGetBannerDataAPIResponse(response)
         })
         .catch(this.setGetBannerDataAPIError)
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
      console.log(response)
   }
}

export default UserFoodManagementStore
