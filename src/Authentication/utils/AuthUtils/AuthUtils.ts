import { getAccessToken } from '../../../Common/utils/StorageUtils'

export function isLoggedIn() {
   const token = getAccessToken()
   return !(token === undefined || token === '')
}
