import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { MealPreferencePageMainContainer } from './styledComponents'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'
import Header from '../../../Common/components/Header/Header'
import Banner from '../Banner/Banner'
import { MealPreferenceCard } from '../Common/MealPreferenceCard'

interface MealPreferencePageProps {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
   userFoodManagementStore: UserFoodManagementStore
}

@observer
class MealPreferencePage extends Component<MealPreferencePageProps> {
   render() {
      const {
         onClickWeeklyMenu,
         onClickHomePage,
         selectedPage,
         userFoodManagementStore
      } = this.props
      const {
         bannerData,
         getBannerDataAPIStatus,
         getBannerDataAPIError
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
            <MealPreferenceCard />
         </MealPreferencePageMainContainer>
      )
   }
}

export default MealPreferencePage
