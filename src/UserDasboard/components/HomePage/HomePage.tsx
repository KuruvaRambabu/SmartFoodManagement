import React, { Component } from 'react'
import { HomePageMainContainer } from './styledComponents'
import { withHeaderComponent } from '../../../Common/Hocs/withHeader'
import { observer } from 'mobx-react'
import Header from '../../../Common/components/Header/Header'
import Banner from '../Banner/Banner'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'
import DatePicker from '../../../Common/components/DatePicker/DatePicker'
import { MealCard } from '../Common/MealCard'

interface HomePagePropsTypes {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
   userFoodManagementStore: UserFoodManagementStore
}
@observer
class HomePage extends Component<HomePagePropsTypes> {
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
         getBannerDataAPIError,
         getMealCardAPIError,
         getMealCardAPIStatus,
         mealCardData
      } = userFoodManagementStore
      console.log(mealCardData, 'homepage')
      return (
         <HomePageMainContainer>
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
            <MealCard
               getMealCardAPIError={getMealCardAPIError}
               getMealCardAPIStatus={getMealCardAPIStatus}
               mealCardData={mealCardData}
            />
         </HomePageMainContainer>
      )
   }
}

export default HomePage
