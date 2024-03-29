import React, { Component } from 'react'
import { WeeklyMenuPage } from '../../components/WeeklyMenuPage'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { SMART_FOOD_MANAGEMENT_HOME_PAGE } from '../../../Common/routes/RouteConstants'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { navigateToHomePage } from '../../utils/NavigationModule/NavigationModule'

interface WeeklyMenuPageRouteTypes extends RouteComponentProps {}

@observer
class WeeklyMenuPageRoute extends Component<WeeklyMenuPageRouteTypes> {
   @observable selectedPage: string = 'weeklyMenu'
   onClickWeeklyMenu = () => {
      this.selectedPage = 'weeklyMenu'
   }
   onClickHomePage = () => {
      this.selectedPage = 'home'
      const { history } = this.props
      navigateToHomePage(history)
   }

   render() {
      return (
         <WeeklyMenuPage
            selectedPage={this.selectedPage}
            onClickHomePage={this.onClickHomePage}
            onClickWeeklyMenu={this.onClickWeeklyMenu}
         />
      )
   }
}

export default withRouter(WeeklyMenuPageRoute)
