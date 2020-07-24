import React, { Component } from 'react'
import HomePage from '../../components/HomePage'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
   SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE,
   SMART_FOOD_MANAGEMENT_HOME_PAGE,
   SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE
} from '../../../Common/routes/RouteConstants'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'

interface HomePageRouteTypes extends RouteComponentProps {}
interface InjectedProps extends HomePageRouteTypes {
   userFoodManagementStore: UserFoodManagementStore
}

@inject('userFoodManagementStore')
@observer
class HomePageRoute extends Component<HomePageRouteTypes> {
   @observable selectedPage: string = 'home'
   @observable id

   componentDidMount() {
      this.doNetworkCallForBannerData()
   }

   onClickWeeklyMenu = () => {
      this.selectedPage = 'weeklyMenu'
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE)
   }

   doNetworkCallForBannerData = () => {
      this.getUserFoodManagementStore().getBannerDataAPI(
         this.onSuccess,
         this.onFailure
      )
   }

   onSuccess = () => {
      this.getUserFoodManagementStore().getMealCardDataAPI()
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
         <HomePage
            selectedPage={this.selectedPage}
            onClickHomePage={this.onClickHomePage}
            onClickWeeklyMenu={this.onClickWeeklyMenu}
            userFoodManagementStore={userFoodManagementStore}
         />
      )
   }
}

export default withRouter(HomePageRoute)
