import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { create } from 'apisauce'
import Config from '../../../Common/constants/EnvironmentConstants'
import { apiMethods } from '../../../Common/constants/APIConstants'

class UserFoodManagementAPIService {
   api: Record<string, any>
   constructor() {
      this.api = create({
         baseURL: Config.BASE_URL
      })
   }
   getBannerDataAPI() {
      return networkCallWithApisauce(this.api, '', '', apiMethods.post)
   }

   getMealCardDataAPI() {
      return networkCallWithApisauce(this.api, '', '', apiMethods.post)
   }
   getUserMealPreferenceDetailsDataAPI() {
      return networkCallWithApisauce(this.api, '', '', apiMethods.post)
   }
}

export default UserFoodManagementAPIService
