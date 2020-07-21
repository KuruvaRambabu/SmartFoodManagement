import React, { Component } from 'react'

import IbHubsLogo from '../Icons/IbHubsLogo/IbHubsLogo'
import ProfilePicture from '../Icons/ProfilePicture/ProfilePicture'

import {
   HeaderMainCointainer,
   IbHubsLogoContainer,
   HeaderLeftSideContainer,
   HeaderRightSideContainer,
   HomePage,
   WeeklyMenuPage,
   ProfilePage,
   Profile
} from './styledComponents'
import { withTranslation, WithTranslation } from 'react-i18next'
interface HeaderProps extends WithTranslation {}

class Header extends Component<HeaderProps> {
   render() {
      const { t } = this.props
      return (
         <HeaderMainCointainer>
            <HeaderLeftSideContainer>
               <IbHubsLogoContainer>
                  <IbHubsLogo />
               </IbHubsLogoContainer>
            </HeaderLeftSideContainer>

            <HeaderRightSideContainer>
               <HomePage>{t('userDashboardModule:home')}</HomePage>
               <WeeklyMenuPage>
                  {t('userDashboardModule:weeklyMenu')}
               </WeeklyMenuPage>
               <ProfilePage>
                  <ProfilePicture />
                  <Profile>{t('userDashboardModule:profileName')}</Profile>
               </ProfilePage>
            </HeaderRightSideContainer>
         </HeaderMainCointainer>
      )
   }
}
export default withTranslation('translation', { withRef: true })(Header)
