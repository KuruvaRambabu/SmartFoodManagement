import React, { Component } from 'react'
import HomePage from '../../components/HomePage'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE } from '../../../Common/routes/RouteConstants'
import UserFoodManagementStore from '../../stores/UserFoodManagementStore/UserFoodManagementStore'

interface HomePageRouteTypes extends RouteComponentProps {}
interface InjectedProps extends HomePageRouteTypes {
   userFoodManagementStore: UserFoodManagementStore
}

@inject('userFoodManagementStore')
@observer
class HomePageRoute extends Component<HomePageRouteTypes> {
   @observable selectedPage: string = 'home'

   componentDidMount() {
      this.getUserFoodManagementStore().getBannerDataAPI()
   }

   onClickWeeklyMenu = () => {
      this.selectedPage = 'weeklyMenu'
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE)
   }

   onClickHomePage = () => {
      this.selectedPage = 'home'
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getUserFoodManagementStore = () => {
      return this.getInjectedProps().userFoodManagementStore
   }

   render() {
      return (
         <HomePage
            selectedPage={this.selectedPage}
            onClickHomePage={this.onClickHomePage}
            onClickWeeklyMenu={this.onClickWeeklyMenu}
         />
      )
   }
}

export default withRouter(HomePageRoute)
