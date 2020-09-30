import {
   BannerDataResponseObject,
   MealCardDataResponseObject,
   userSelectedMealPreferenceResponseObject,
   reviewForSelectedFoodItemsObject
} from '../../stores/types'

interface UserFoodManagementService {
   getBannerDataAPI(): Promise<BannerDataResponseObject>
   getMealCardDataAPI(): Promise<MealCardDataResponseObject>
   getUserMealPreferenceDetailsDataAPI(): Promise<
      userSelectedMealPreferenceResponseObject
   >
   getReviewForSelectedMealAPI(): Promise<reviewForSelectedFoodItemsObject>
}

export default UserFoodManagementService
