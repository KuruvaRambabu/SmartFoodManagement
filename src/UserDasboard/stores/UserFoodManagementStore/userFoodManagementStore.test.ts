import {
   API_FAILED,
   API_INITIAL,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'
import UserFoodManagementStore from './UserFoodManagementStore'
import UserFoodManagementFixtureService from '../../services/UserFoodMangementService/index.fixtures'

import bannerData from '../../fixtures/bannerData.fixtures.json'
import mealCardData from '../../fixtures/mealCardData.json'
import selectedMealPreferenceDetails from '../../fixtures/selectedMealPreferenceDetails.json'

describe('Tests for userFoodManagementStore', () => {
   let userFoodManagementStore
   let userFoodMangementService
   beforeEach(() => {
      userFoodMangementService = new UserFoodManagementFixtureService()
      userFoodManagementStore = new UserFoodManagementStore(
         userFoodMangementService
      )
   })

   it('should test the bannerData initialization state', () => {
      expect(userFoodManagementStore.bannerData).toStrictEqual([])
      expect(userFoodManagementStore.getBannerDataAPIStatus).toBe(API_INITIAL)
      expect(userFoodManagementStore.getBannerDataAPIError).toBe(null)
   })
   it('should test the banner data fetching state', () => {
      const mockBannerDataLoadingPromise = new Promise(() => {})
      const mockBannerDataAPI = jest.fn()
      mockBannerDataAPI.mockReturnValue(mockBannerDataLoadingPromise)
      userFoodMangementService.getBannerDataAPI = mockBannerDataAPI
      userFoodManagementStore.getBannerDataAPI()
      expect(userFoodManagementStore.getBannerDataAPIStatus).toBe(API_FETCHING)
   })
   it('should test the banner data success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockBannerDataSuccessPromise = new Promise(resolve => {
         return resolve(bannerData)
      })
      const mockBannerDataAPI = jest.fn()
      mockBannerDataAPI.mockReturnValue(mockBannerDataSuccessPromise)
      userFoodMangementService.getBannerDataAPI = mockBannerDataAPI
      await userFoodManagementStore.getBannerDataAPI(onSuccess, onFailure)
      expect(userFoodManagementStore.getBannerDataAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
   })

   it('should test the banner data failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockBannerDataFailurePromise = new Promise(reject => {
         reject(new Error('error'))
      })
      const mockBannerDataAPI = jest.fn()
      mockBannerDataAPI.mockReturnValue(mockBannerDataFailurePromise)
      userFoodMangementService.getBannerDataAPI = mockBannerDataAPI
      await userFoodManagementStore.getBannerDataAPI(onSuccess, onFailure)
      expect(userFoodManagementStore.getBannerDataAPIStatus).toBe(API_FAILED)
      expect(onFailure).toBeCalled()
   })

   it('should test the Meal card Data initialization state', () => {
      expect(userFoodManagementStore.mealCardData).toStrictEqual([])
      expect(userFoodManagementStore.getMealCardAPIStatus).toBe(API_INITIAL)
      expect(userFoodManagementStore.getMealCardAPIError).toBe(null)
   })

   it('should test the Meal card data fetching state', () => {
      const mockMealCardDataLoadingPromise = new Promise(() => {})
      const mockMealCardDataAPI = jest.fn()
      mockMealCardDataAPI.mockReturnValue(mockMealCardDataLoadingPromise)
      userFoodMangementService.getMealCardDataAPI = mockMealCardDataAPI
      userFoodManagementStore.getMealCardDataAPI()
      expect(userFoodManagementStore.getMealCardAPIStatus).toBe(API_FETCHING)
   })

   it('should test the Meal card success fetching state', async () => {
      const mockMealCardDataSuccessPromise = new Promise(resolve => {
         resolve(mealCardData)
      })
      const mockMealCardDataAPI = jest.fn()
      mockMealCardDataAPI.mockReturnValue(mockMealCardDataSuccessPromise)
      userFoodMangementService.getMealCardDataAPI = mockMealCardDataAPI
      await userFoodManagementStore.getMealCardDataAPI()
      expect(userFoodManagementStore.getMealCardAPIStatus).toBe(API_SUCCESS)
   })

   it('should test the Meal card failure fetching state', async () => {
      const mockMealCardDataFailurePromise = new Promise(reject => {
         reject(new Error('error'))
      })
      const mockMealCardDataAPI = jest.fn()
      mockMealCardDataAPI.mockReturnValue(mockMealCardDataFailurePromise)
      userFoodMangementService.getMealCardDataAPI = mockMealCardDataAPI
      await userFoodManagementStore.getMealCardDataAPI()
      expect(userFoodManagementStore.getMealCardAPIStatus).toBe(API_FAILED)
   })
   it('should test the selected meal preference details Data initialization state', () => {
      expect(
         userFoodManagementStore.getUserMealPreferenceDetailsData
      ).toStrictEqual([])
      expect(
         userFoodManagementStore.getUserMealPreferenceDetailsAPIStatus
      ).toBe(API_INITIAL)
      expect(userFoodManagementStore.getUserMealPreferenceDetailsAPIError).toBe(
         null
      )
   })
   it('should test the selected meal preference details data fetching state', () => {
      const mockselectedMealPreferenceDataLoadingPromise = new Promise(() => {})
      const mockSelectedPreferenceDataAPI = jest.fn()
      mockSelectedPreferenceDataAPI.mockReturnValue(
         mockselectedMealPreferenceDataLoadingPromise
      )
      userFoodMangementService.getUserMealPreferenceDetailsAPI = mockSelectedPreferenceDataAPI
      userFoodManagementStore.getUserMealPreferenceDetailsAPI()
      expect(
         userFoodManagementStore.getUserMealPreferenceDetailsAPIStatus
      ).toBe(API_FETCHING)
   })
   it('should test the selected meal preference details data success state', async () => {
      const mockselectedMealPreferenceDataSuccessPromise = new Promise(
         resolve => {
            resolve(selectedMealPreferenceDetails)
         }
      )
      const mockSelectedPreferenceDataAPI = jest.fn()
      mockSelectedPreferenceDataAPI.mockReturnValue(
         mockselectedMealPreferenceDataSuccessPromise
      )
      userFoodMangementService.getUserMealPreferenceDetailsAPI = mockSelectedPreferenceDataAPI
      await userFoodManagementStore.getUserMealPreferenceDetailsAPI()
      expect(
         userFoodManagementStore.getUserMealPreferenceDetailsAPIStatus
      ).toBe(API_SUCCESS)
   })
   it('should test the selected meal preference details data failure state', async () => {
      const failure = new Promise(reject => {
         reject(new Error('error'))
      })

      const mockSelectedPreferenceDataAPI = jest.fn()
      mockSelectedPreferenceDataAPI.mockReturnValue(failure)
      userFoodMangementService.getUserMealPreferenceDetailsAPI = mockSelectedPreferenceDataAPI
      await userFoodManagementStore.getUserMealPreferenceDetailsAPI()
      expect(
         userFoodManagementStore.getUserMealPreferenceDetailsAPIStatus
      ).toBe(API_FAILED)
   })
})
