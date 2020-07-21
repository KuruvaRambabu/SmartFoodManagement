import React from 'react'
import { create } from 'apisauce'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import bannerData from '../../fixtures/bannerData.fixtures.json'
import UserFoodManagementService from '.'

class UserFoodManagementFixtureService implements UserFoodManagementService {
   getBannerDataAPI() {
      return resolveWithTimeout(bannerData)
   }
}

export default UserFoodManagementFixtureService
