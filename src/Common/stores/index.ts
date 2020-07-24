import AuthenticationStore from '../../Authentication/stores/AuthenticationStore'
//import AuthenticationService from '../../Authentication/services/AuthenticationService/AuthenticationService'
import AuthenticationService from '../../Authentication/services/AuthenticationService/index.fixutes'
import UserFoodManagementStore from '../../UserDasboard/stores/UserFoodManagementStore/UserFoodManagementStore'
import UserFoodManagementFixtureService from '../../UserDasboard/services/UserFoodMangementService/index.fixtures'

const userFoodManagementFixtureService = new UserFoodManagementFixtureService()
const userFoodManagementStore = new UserFoodManagementStore(
   userFoodManagementFixtureService
)

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService)

export default {
   authenticationStore,
   userFoodManagementStore
}
