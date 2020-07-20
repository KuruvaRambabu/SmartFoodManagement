import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import signInAccessToken from '../../fixtures/getUserSignInRepsonse.json'

import AuthService from '.'

class AuthenticationService implements AuthService {
   signInAPI(requestObject) {
      return resolveWithTimeout(signInAccessToken)
   }
}

export default AuthenticationService
