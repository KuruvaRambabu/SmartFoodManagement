import React, { Component } from 'react'
import FoodReviewPage from '../../components/FoodReviewPage/FoodReviewPage'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'

import { navigateToWeeklyMenuPage } from '../../utils/NavigationModule/NavigationModule'

interface FoodReiviewRouteTypes extends RouteComponentProps {}
interface InjectedProps extends FoodReiviewRouteTypes {
   userFoodManagementStore: UserFoodManagementStore
}

@inject('userFoodManagementStore')
@observer
class FoodReviewPageRoute extends Component<FoodReiviewRouteTypes> {
   @observable selectedPage: string = 'home'

   componentDidMount() {
      if (this.getUserFoodManagementStore().bannerData.length === 0) {
         this.doNetworkCallForBannerData()
      } else this.doNetworkCallForSelectedMealReviewItems()
   }

   onClickWeeklyMenu = () => {
      this.selectedPage = 'weeklyMenu'
      const { history } = this.props
      navigateToWeeklyMenuPage(history)
   }

   doNetworkCallForBannerData = () => {
      this.getUserFoodManagementStore().getBannerDataAPI(
         this.onSuccess,
         this.onFailure
      )
   }

   doNetworkCallForSelectedMealReviewItems = () => {
      this.getUserFoodManagementStore().onClickReviewFood()
   }

   onSuccess = () => {
      this.doNetworkCallForSelectedMealReviewItems()
   }

   onFailure = () => {
      this.doNetworkCallForBannerData()
   }

   onClickHomePage = () => {
      this.selectedPage = 'home'
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getUserFoodManagementStore = () => {
      return this.getInjectedProps().userFoodManagementStore
   }

   render() {
      const userFoodManagementStore = this.getUserFoodManagementStore()
      return (
         <FoodReviewPage
            selectedPage={this.selectedPage}
            onClickHomePage={this.onClickHomePage}
            onClickWeeklyMenu={this.onClickWeeklyMenu}
            userFoodManagementStore={userFoodManagementStore}
         />
      )
   }
}

export default withRouter(FoodReviewPageRoute)
