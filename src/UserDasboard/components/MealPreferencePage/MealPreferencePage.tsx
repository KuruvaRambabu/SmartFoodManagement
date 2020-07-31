import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { MealPreferencePageMainContainer } from './styledComponents'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'
import Header from '../../../Common/components/Header/Header'
import Banner from '../Banner/Banner'
import MealPreferenceCard from '../Common/MealPreferenceCard/MealPreferenceCard'

interface MealPreferencePageProps {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
   userFoodManagementStore: UserFoodManagementStore
   mealType: string
}

@observer
class MealPreferencePage extends Component<MealPreferencePageProps> {
   render() {
      const {
         onClickWeeklyMenu,
         onClickHomePage,
         selectedPage,
         userFoodManagementStore,
         mealType
      } = this.props
      const {
         bannerData,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         getUserMealPreferenceDetailsAPIStatus,
         getUserMealPreferenceDetailsAPIError,
         getUserMealPreferenceDetailsData,
         selectedMealPreference,
         selectedMealDate,
         onChangeMealDate
      } = userFoodManagementStore
      return (
         <MealPreferencePageMainContainer>
            <Header
               onClickWeeklyMenu={onClickWeeklyMenu}
               onClickHomePage={onClickHomePage}
               selectedPage={selectedPage}
            />
            <Banner
               getBannerDataAPIError={getBannerDataAPIError}
               getBannerDataAPIStatus={getBannerDataAPIStatus}
               bannerData={bannerData}
            />
            <MealPreferenceCard
               getUserMealPreferenceDetailsAPIError={
                  getUserMealPreferenceDetailsAPIError
               }
               getUserMealPreferenceDetailsAPIStatus={
                  getUserMealPreferenceDetailsAPIStatus
               }
               getUserMealPreferenceDetailsData={
                  getUserMealPreferenceDetailsData
               }
               mealType={selectedMealPreference}
               selectedMealDate={selectedMealDate}
               onChangeMealDate={onChangeMealDate}
            />
         </MealPreferencePageMainContainer>
      )
   }
}

export default MealPreferencePage
