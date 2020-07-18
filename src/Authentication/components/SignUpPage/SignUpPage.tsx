import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   SignUpPageMainContainer,
   SignUpCardContanier,
   Form,
   Heading,
   ImageContainer,
   LabelField,
   ErrorMessage
} from './styledComponents'
import IbHubsLogo from '../../../Common/components/Icons/IbHubsLogo/IbHubsLogo'
import { observable } from 'mobx'
import InputField from '../../../Common/components/InputField/InputField'
import i18n from '../../i18n'
import {
   ValidatePassword,
   ValidateUserName,
   ValidateConfirmPassword
} from '../../utils/Validation/Validations'
import SignInButton from '../../../Common/components/Button/SignInButton'

interface SignUpPageProps {
   t: any
   onClickSignUp: any
}

@observer
class SignUpPage extends Component<SignUpPageProps> {
   @observable email: string
   @observable password: string
   @observable errorMessage: string
   @observable passwordErrorMessage: string
   @observable emailErrorMessage: string
   @observable confirmPassword: string
   @observable confirmPasswordErrorMessage: string

   constructor(props) {
      super(props)
      this.email = ''
      this.password = ''
      this.errorMessage = ''
      this.passwordErrorMessage = ''
      this.emailErrorMessage = ''
      this.confirmPassword = ''
      this.confirmPasswordErrorMessage = ''
   }
   onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.email = event.target.value
      this.checkUserNameValidation()
   }

   onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.password = event.target.value
      this.checkPasswordValidation()
   }
   checkUserNameValidation = () => {
      const res = ValidateUserName(this.email)
      this.emailErrorMessage = res.errorMessage
   }

   checkPasswordValidation = () => {
      const res = ValidatePassword(this.password)
      this.passwordErrorMessage = res.errorMessage
   }
   validateConfirmPassword = () => {
      const res = ValidateConfirmPassword(this.password, this.confirmPassword)
      this.confirmPasswordErrorMessage = res.errorMessage
   }
   onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.confirmPassword = event.target.value
      this.validateConfirmPassword()
   }
   render() {
      const { t, onClickSignUp } = this.props
      return (
         <SignUpPageMainContainer>
            <SignUpCardContanier>
               <ImageContainer>
                  <IbHubsLogo />
               </ImageContainer>
               <Heading>
                  {t('authenticationModule:hiTherePleaseSignUp')}
               </Heading>
               <Form>
                  <LabelField>
                     {t('authenticationModule:userName')}
                     <InputField
                        onChangeField={this.onChangeUserName}
                        type={t('authenticationModule:userNameInputFieldType')}
                        value={this.email}
                        placeholder={t(
                           'authenticationModule:userNamePlaceholderText'
                        )}
                        errorMessage={this.emailErrorMessage}
                        validate={this.checkUserNameValidation}
                     />
                     {this.emailErrorMessage ? (
                        <ErrorMessage>{this.emailErrorMessage}</ErrorMessage>
                     ) : (
                        ''
                     )}
                  </LabelField>
                  <LabelField>
                     {t('authenticationModule:password')}
                     <InputField
                        onChangeField={this.onChangePassword}
                        type={t('authenticationModule:passwordInputFieldType')}
                        placeholder={t(
                           'authenticationModule:passwordPlaceholderText'
                        )}
                        value={this.password}
                        errorMessage={this.passwordErrorMessage}
                        validate={this.checkPasswordValidation}
                     />
                     {this.passwordErrorMessage ? (
                        <ErrorMessage>{this.passwordErrorMessage}</ErrorMessage>
                     ) : (
                        ''
                     )}
                  </LabelField>
                  <LabelField>
                     {t('authenticationModule:confirmPassword')}
                     <InputField
                        onChangeField={this.onChangeConfirmPassword}
                        type={t(
                           'authenticationModule:confirmPasswordInputFieldType'
                        )}
                        placeholder={t(
                           'authenticationModule:confirmPasswordPlaceholderText'
                        )}
                        value={this.confirmPassword}
                        errorMessage={this.confirmPasswordErrorMessage}
                        validate={this.validateConfirmPassword}
                     />
                     {this.passwordErrorMessage ? (
                        <ErrorMessage>
                           {this.confirmPasswordErrorMessage}
                        </ErrorMessage>
                     ) : (
                        ''
                     )}
                  </LabelField>
                  <SignInButton
                     apiStatus={10}
                     onClickSignIn={onClickSignUp}
                     name={t('authenticationModule:login')}
                  />

                  {this.errorMessage ? (
                     <ErrorMessage>{this.errorMessage}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </Form>
            </SignUpCardContanier>
         </SignUpPageMainContainer>
      )
   }
}

export default SignUpPage
