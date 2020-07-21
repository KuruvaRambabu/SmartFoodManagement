import React, { Component } from 'react'
import { HomePageMainContainer } from './styledComponents'
import { withHeaderComponent } from '../../../Common/Hocs/WithHeader'

class HomePage extends Component {
   render() {
      return <HomePageMainContainer></HomePageMainContainer>
   }
}

export default withHeaderComponent(HomePage)
