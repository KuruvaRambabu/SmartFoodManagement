import AuthenticationStore from '../../Authentication/stores/AuthenticationStore'
//import AuthenticationService from '../../Authentication/services/AuthenticationService'
import AuthenticationService from '../../Authentication/services/AuthenticationService/index.fixutes'

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService)

export default {
   authenticationStore
}
