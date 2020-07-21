import React, { Component } from 'react'
import { WeeklyMenuPageMainContainer } from './styledComponents'
import Header from '../../../Common/components/Header/Header'
import { observer } from 'mobx-react'

interface WeeklyMenuPagePropsTypes {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
}

@observer
class WeeklyMenuPage extends Component<WeeklyMenuPagePropsTypes> {
   render() {
      const { onClickWeeklyMenu, onClickHomePage, selectedPage } = this.props
      return (
         <WeeklyMenuPageMainContainer>
            <Header
               onClickWeeklyMenu={onClickWeeklyMenu}
               onClickHomePage={onClickHomePage}
               selectedPage={selectedPage}
            />
            Weekly Menu Page
         </WeeklyMenuPageMainContainer>
      )
   }
}

export default WeeklyMenuPage
