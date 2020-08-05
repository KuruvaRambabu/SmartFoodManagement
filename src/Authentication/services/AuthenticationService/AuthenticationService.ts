import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'

import { baseUrl } from '../../constants/EnvironmentConstants'

import endpoints from '../endPoints'

import AuthService from '.'
import Config from '../../../Common/constants/EnvironmentConstants'

class AuthenticationService implements AuthService {
   api: Record<string, any>
   constructor() {
      this.api = create({
         baseURL: Config.BASE_URL
      })
   }
   signInAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         endpoints.signIn,
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthenticationService
