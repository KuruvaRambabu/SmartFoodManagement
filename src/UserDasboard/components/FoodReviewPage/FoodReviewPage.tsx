import React, { Component } from 'react'

import { FoodReviewPageMainContainer } from './styledComponents'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'
import Header from '../../../Common/components/Header/Header'
import Banner from '../Banner/Banner'
import ReviewCard from '../Common/ReviewCard/ReviewCard'
import { observer } from 'mobx-react'
interface FoodReviewPagePropsTypes {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
   userFoodManagementStore: UserFoodManagementStore
   onClickRetry: () => void
}

@observer
class FoodReviewPage extends Component<FoodReviewPagePropsTypes> {
   render() {
      const {
         onClickWeeklyMenu,
         onClickHomePage,
         selectedPage,
         userFoodManagementStore,
         onClickRetry
      } = this.props
      const {
         bannerData,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         onSelectReviewFood,
         onChangeMealDate
      } = userFoodManagementStore

      return (
         <FoodReviewPageMainContainer>
            <Header
               onClickWeeklyMenu={onClickWeeklyMenu}
               onClickHomePage={onClickHomePage}
               selectedPage={selectedPage}
            />
            <Banner
               getBannerDataAPIError={getBannerDataAPIError}
               getBannerDataAPIStatus={getBannerDataAPIStatus}
               bannerData={bannerData}
               onClickRetry={onClickRetry}
            />

            {onSelectReviewFood ? (
               <ReviewCard onSelectReviewFood={onSelectReviewFood} />
            ) : null}
         </FoodReviewPageMainContainer>
      )
   }
}

export default FoodReviewPage
