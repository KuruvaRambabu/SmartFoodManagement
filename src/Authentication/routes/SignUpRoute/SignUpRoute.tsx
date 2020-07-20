import React, { Component } from 'react'
import SignUpPage from '../../components/SignUpPage/SignUpPage'
import { inject, observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import AuthenticationStore from '../../stores/AuthenticationStore'
import { SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE } from '../../../Common/routes/RouteConstants'

interface AuthenticationRouteProps extends WithTranslation {}

interface AuthenticationRouteProps extends RouteComponentProps {}

interface InjectedProps extends AuthenticationRouteProps {
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore')
@observer
class SignUpRoute extends Component<AuthenticationRouteProps> {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthenticationStore = () => {
      return this.getInjectedProps().authenticationStore
   }
   onClickSignUp = () => {}
   goToSignInPage = () => {
      this.props.history.push(SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE)
   }
   render() {
      const { t } = this.props
      return (
         <SignUpPage
            t={t}
            goToSignInPage={this.goToSignInPage}
            onClickSignUp={this.onClickSignUp}
         />
      )
   }
}

export default withRouter(withTranslation('translation')(SignUpRoute))
