import React, { Component } from 'react'
import { HomePageMainContainer } from './styledComponents'
import { withHeaderComponent } from '../../../Common/Hocs/withHeader'
import { observer } from 'mobx-react'
import Header from '../../../Common/components/Header/Header'
import Banner from '../Banner/Banner'

interface HomePagePropsTypes {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
}
@observer
class HomePage extends Component<HomePagePropsTypes> {
   render() {
      const { onClickWeeklyMenu, onClickHomePage, selectedPage } = this.props
      console.log(this.props)
      return (
         <HomePageMainContainer>
            <Header
               onClickWeeklyMenu={onClickWeeklyMenu}
               onClickHomePage={onClickHomePage}
               selectedPage={selectedPage}
            />
            <Banner />
         </HomePageMainContainer>
      )
   }
}

export default HomePage
