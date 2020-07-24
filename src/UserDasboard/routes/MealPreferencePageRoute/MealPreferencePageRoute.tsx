import React, { Component } from 'react'

import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE } from '../../../Common/routes/RouteConstants'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'
import MealPreferencePage from '../../components/MealPreferencePage/MealPreferencePage'

interface MealPreferencePageRouteTypes extends RouteComponentProps {}
interface InjectedProps extends MealPreferencePageRouteTypes {
   userFoodManagementStore: UserFoodManagementStore
}

@inject('userFoodManagementStore')
@observer
class MealPreferencePageRoute extends Component<MealPreferencePageRouteTypes> {
   @observable selectedPage: string = 'home'

   componentDidMount() {
      if (this.getUserFoodManagementStore().bannerData.length === 0) {
         this.doNetworkCallForBannerData()
      }
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
      this.getUserFoodManagementStore()
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
      const mealType = this.props.match.params['id']
      return (
         <MealPreferencePage
            selectedPage={this.selectedPage}
            onClickHomePage={this.onClickHomePage}
            onClickWeeklyMenu={this.onClickWeeklyMenu}
            userFoodManagementStore={userFoodManagementStore}
            mealType={mealType}
         />
      )
   }
}

export default withRouter(MealPreferencePageRoute)
