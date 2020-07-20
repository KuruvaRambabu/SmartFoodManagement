import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'

import { SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE } from '../../../Common/routes/RouteConstants'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

import { goToCoivd19DashBoard } from '../../utils/NavigationModule/NavigationModule'
import AuthenticationStore from '../../stores/AuthenticationStore'

import SignInPage from '../../components/SignInPage'
import { isLoggedIn } from '../../utils/AuthUtils/AuthUtils'

interface AuthenticationRouteProps extends WithTranslation {}

interface AuthenticationRouteProps extends RouteComponentProps {}

interface InjectedProps extends AuthenticationRouteProps {
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore')
@observer
class SignInRoute extends React.Component<AuthenticationRouteProps> {
   @observable errorMessage: string
   private signInref: React.RefObject<SignInPage>

   constructor(props) {
      super(props)
      this.errorMessage = ''
      this.signInref = React.createRef()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthenticationStore = () => {
      return this.getInjectedProps().authenticationStore
   }

   onSignInSuccess = () => {
      const { history } = this.props
      goToCoivd19DashBoard(history)
   }

   onSignInFailure = () => {
      const { getUserSignInAPIError: apiError } = this.getAuthenticationStore()

      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }

   onClickSignIn = (email: string, password: string) => {
      const { userSignIn } = this.getAuthenticationStore()
      userSignIn(
         {
            email: email,
            password: password
         },
         this.onSignInSuccess,
         this.onSignInFailure
      )
   }

   goToSignUpPage = () => {
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE)
   }

   render() {
      const { getUserSignInAPIStatus } = this.getAuthenticationStore()
      const { t } = this.props
      if (isLoggedIn()) {
         return <Redirect to={{ pathname: '' }} />
      }
      return (
         <SignInPage
            getUserSignInAPIStatus={getUserSignInAPIStatus}
            errorMessage={this.errorMessage}
            onClickSignIn={this.onClickSignIn}
            ref={this.signInref}
            t={t}
            goToSignUpPage={this.goToSignUpPage}
         />
      )
   }
}

export default withRouter(withTranslation('translation')(SignInRoute))
