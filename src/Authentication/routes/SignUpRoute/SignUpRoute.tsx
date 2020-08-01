import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE } from '../../../Common/routes/RouteConstants'

import SignUpPage from '../../components/SignUpPage/SignUpPage'
import AuthenticationStore from '../../stores/AuthenticationStore'
import { navigateToSignInPage } from '../../utils/NavigationModule/NavigationModule'
import { observable } from 'mobx'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

interface AuthenticationRouteProps extends WithTranslation {}

interface AuthenticationRouteProps extends RouteComponentProps {}

interface InjectedProps extends AuthenticationRouteProps {
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore')
@observer
class SignUpRoute extends Component<AuthenticationRouteProps> {
   @observable errorMessage!: string
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthenticationStore = () => {
      return this.getInjectedProps().authenticationStore
   }

   onSignInSuccess = () => {
      const { history } = this.props
      navigateToSignInPage(history)
   }

   onSignInFailure = () => {
      const { getUserSignInAPIError: apiError } = this.getAuthenticationStore()

      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }
   onClickSignUp = (email, password, conformPassword) => {
      const { history } = this.props
      navigateToSignInPage(history)
   }
   goToSignInPage = () => {
      navigateToSignInPage(history)
   }
   render() {
      const { getUserSignInAPIStatus } = this.getAuthenticationStore()
      const { t } = this.props

      return (
         <SignUpPage
            t={t}
            goToSignInPage={this.goToSignInPage}
            onClickSignUp={this.onClickSignUp}
            getUserSignInAPIStatus={getUserSignInAPIStatus}
            errorMessage={this.errorMessage}
         />
      )
   }
}

export default withRouter(withTranslation('translation')(SignUpRoute))
