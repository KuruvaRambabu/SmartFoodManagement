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

interface UpdateMealPreferenceAndBackButtonsProps extends RouteComponentProps {}

class UpdateMealPreferenceAndBackButtons extends Component<
   UpdateMealPreferenceAndBackButtonsProps
> {
   onClickBackButton = () => {
      const { history } = this.props
      history.goBack()
   }

   render() {
      return (
         <SavePreferenceAndCancelButtonsMainContainer>
            <Button
               onClick={this.onClickBackButton}
               type={Button.buttonType.outline}
               typo={Typo14DarkBlueGreyHKGroteskSemiBold}
               name={'Back'}
               buttonStyles={BackButtonStyles}
            />
            <Button
               onClick={this.onClickBackButton}
               type={Button.buttonType.filled}
               typo={Typo14WhiteHKGroteskSemiBold}
               name={'Save'}
               buttonStyles={SaveButtonStyles}
            />
         </SavePreferenceAndCancelButtonsMainContainer>
      )
   }
}

export default withRouter(UpdateMealPreferenceAndBackButtons)
