import {
   BannerDataResponseObject,
   MealCardDataResponseObject
} from '../../stores/types'

interface UserFoodManagementService {
   getBannerDataAPI(): Promise<BannerDataResponseObject>
   getMealCardDataAPI(): Promise<MealCardDataResponseObject>
}

export default UserFoodManagementService
