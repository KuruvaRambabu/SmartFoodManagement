import React, { Component } from 'react'

import IbHubsLogo from '../Icons/IbHubsLogo/IbHubsLogo'
import ProfilePicture from '../Icons/ProfilePicture/ProfilePicture'

import {
   HeaderMainContainer,
   IbHubsLogoContainer,
   HeaderLeftSideContainer,
   HeaderRightSideContainer,
   HomeText,
   WeeklyMenuText,
   ProfilePage,
   Profile
} from './styledComponents'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Colors } from '../../../UserDasboard/themes/Colors'
import { observer } from 'mobx-react'

interface HeaderProps extends WithTranslation {}

interface HeaderProps {
   onClickWeeklyMenu: () => void
   selectedPage: string
   onClickHomePage: () => void
}

@observer
class Header extends Component<HeaderProps> {
   render() {
      const { t, onClickWeeklyMenu, onClickHomePage, selectedPage } = this.props
      return (
         <HeaderMainContainer>
            <HeaderLeftSideContainer>
               <IbHubsLogoContainer>
                  <IbHubsLogo />
               </IbHubsLogoContainer>
            </HeaderLeftSideContainer>

            <HeaderRightSideContainer>
               <HomeText
                  color={
                     selectedPage === 'home'
                        ? Colors.brightBlue
                        : Colors.darkBlueGrey
                  }
                  onClick={onClickHomePage}
               >
                  {t('userDashboardModule:home')}
               </HomeText>

               <WeeklyMenuText
                  color={
                     selectedPage === 'weeklyMenu'
                        ? Colors.brightBlue
                        : Colors.darkBlueGrey
                  }
                  onClick={onClickWeeklyMenu}
               >
                  {t('userDashboardModule:weeklyMenu')}
               </WeeklyMenuText>

               <ProfilePage>
                  <ProfilePicture />
                  <Profile>{t('userDashboardModule:profileName')}</Profile>
               </ProfilePage>
            </HeaderRightSideContainer>
         </HeaderMainContainer>
      )
   }
}
export default withTranslation('translation', { withRef: true })(Header)
