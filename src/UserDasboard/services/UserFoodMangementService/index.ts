import {
   BannerDataResponseObject,
   MealCardDataResponseObject
} from '../../stores/types'

interface UserFoodManagementService {
   getBannerDataAPI(): Promise<BannerDataResponseObject>
   getMealCardDataAPI(): Promise<MealCardDataResponseObject>
   getUserMealPreferenceDetailsDataAPI():Promise<any>
}

export default UserFoodManagementService
