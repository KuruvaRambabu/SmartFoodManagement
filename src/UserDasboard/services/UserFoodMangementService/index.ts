import { BannerDataResponseObject } from '../../stores/types'

interface UserFoodManagementService {
   getBannerDataAPI(): Promise<BannerDataResponseObject>
}

export default UserFoodManagementService
