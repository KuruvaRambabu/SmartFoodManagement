import {
   BannerDataResponseObject,
   MealCardDataResponseObject,
   userSelectedMealPreferenceResponseObject
} from '../../stores/types'

interface UserFoodManagementService {
   getBannerDataAPI(): Promise<BannerDataResponseObject>
   getMealCardDataAPI(): Promise<MealCardDataResponseObject>
   getUserMealPreferenceDetailsDataAPI(): Promise<
      userSelectedMealPreferenceResponseObject
   >
}

export default UserFoodManagementService
