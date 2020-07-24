import React, { Component } from 'react'

import Button from '../../../../Common/components/Button/Button'

import {
   SavePreferenceAndCancelButtonsMainContainer,
   BackButtonStyles,
   SaveButtonStyles
} from './styledComponents'
import {
   Typo14DarkBlueGreyHKGroteskSemiBold,
   Typo14WhiteHKGroteskSemiBold
} from '../../../../Common/styleGuide/Typos'

import { withRouter, RouteComponentProps } from 'react-router-dom'

interface UpdateMealPreferenceAndBackButtonsProps extends RouteComponentProps {
   t: any
}

class UpdateMealPreferenceAndBackButtons extends Component<
   UpdateMealPreferenceAndBackButtonsProps
> {
   onClickBackButton = () => {
      const { history } = this.props
      history.goBack()
   }

   render() {
      const { t } = this.props
      return (
         <SavePreferenceAndCancelButtonsMainContainer>
            <Button
               onClick={this.onClickBackButton}
               type={Button.buttonType.outline}
               typo={Typo14DarkBlueGreyHKGroteskSemiBold}
               name={t('userDashboardModule:backToHomePage')}
               buttonStyles={BackButtonStyles}
            />
            <Button
               onClick={this.onClickBackButton}
               type={Button.buttonType.filled}
               typo={Typo14WhiteHKGroteskSemiBold}
               name={t('userDashboardModule:savePreference')}
               buttonStyles={SaveButtonStyles}
            />
         </SavePreferenceAndCancelButtonsMainContainer>
      )
   }
}

export default withRouter(UpdateMealPreferenceAndBackButtons)
