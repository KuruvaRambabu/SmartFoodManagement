import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import bannerData from '../../fixtures/bannerData.fixtures.json'
import mealCardData from '../../fixtures/mealCardData.json'
import userSelectedMealPreference from '../../fixtures/selectedMealPreferenceDetails.json'
import reviewForItems from '../../fixtures/reviewForItems.json'
import UserFoodManagementService from '.'

class UserFoodManagementFixtureService implements UserFoodManagementService {
   getBannerDataAPI() {
      return resolveWithTimeout(bannerData)
   }

   getMealCardDataAPI() {
      return resolveWithTimeout(mealCardData)
   }

   getUserMealPreferenceDetailsDataAPI() {
      return resolveWithTimeout(userSelectedMealPreference)
   }

   getReviewForSelectedMealAPI() {
      return resolveWithTimeout(reviewForItems)
   }
}

export default UserFoodManagementFixtureService
