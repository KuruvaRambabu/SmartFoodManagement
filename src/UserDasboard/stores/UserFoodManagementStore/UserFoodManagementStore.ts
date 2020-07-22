import { observable } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { BannerDataObject } from '../types'
import { action } from 'mobx'
import { bindPromise, bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import BannerDataModel from '../models/BannerDataModel/BannerDataModel'
import UserFoodManagementService from '../../services/UserFoodMangementService'

class UserFoodManagementStore {
   @observable selectedPage!: string

   @observable getBannerDataAPIStatus!: APIStatus
   @observable getBannerDataAPIError!: Error | null
   @observable bannerData!: Array<BannerDataModel>

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
      const data = response.banner_data
      data.forEach(occasion => {
         const eachData = new BannerDataModel(occasion)
         this.bannerData.push(eachData)
      })
      console.log(this.bannerData)
   }
}

export default UserFoodManagementStore
