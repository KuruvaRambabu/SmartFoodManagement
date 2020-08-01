import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import HomePage from '../../components/HomePage'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'

import { navigateToWeeklyMenuPage } from '../../utils/NavigationModule/NavigationModule'

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
      navigateToWeeklyMenuPage(history)
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
