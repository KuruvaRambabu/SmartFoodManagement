import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import bannerData from '../../fixtures/bannerData.fixtures.json'
import mealCardData from '../../fixtures/mealCardData.json'

import UserFoodManagementService from '.'

class UserFoodManagementFixtureService implements UserFoodManagementService {
   getBannerDataAPI() {
      return resolveWithTimeout(bannerData)
   }

   getMealCardDataAPI() {
      return resolveWithTimeout(mealCardData)
   }
   getUserMealPreferenceDetailsDataAPI(){
      return resolveWithTimeout(mealCardData)
   }
}

export default UserFoodManagementFixtureService
