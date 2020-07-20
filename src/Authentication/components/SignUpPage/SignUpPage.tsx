import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import IbHubsLogo from '../../../Common/components/Icons/IbHubsLogo/IbHubsLogo'
import InputField from '../../../Common/components/InputField/InputField'

import i18n from '../../i18n'
import {
   ValidatePassword,
   ValidateUserName,
   ValidateConfirmPassword
} from '../../utils/Validation/Validations'

import LanguageSelector from '../LanguageSelector/LanguageSelector'

import {
   SignUpPageMainContainer,
   SignUpCardContanier,
   Form,
   Heading,
   ImageContainer,
   LabelField,
   ErrorMessage,
   AlreadyHaveAnAccountContainer,
   AlreadyHaveAccountText,
   SignInText,
   EmailInputFieldContainer,
   PasswordInputFieldContainer,
   ConfirmPasswordInputFieldContainer
} from './styledComponents'
import Button from '../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskRegularSpan } from '../../../Common/styleGuide/Typos'

interface SignUpPageProps {
   t: any
   onClickSignUp: any
   goToSignInPage: () => void
   getUserSignInAPIStatus: number
   errorMessage: string
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

   changeLanguage = e => {
      i18n.changeLanguage(e.target.value)
   }
   onClickSignUp = () => {
      if (
         this.email === '' &&
         this.password === '' &&
         this.confirmPassword === ''
      ) {
         this.confirmPasswordErrorMessage = this.passwordErrorMessage = this.emailErrorMessage =
            '*Required'
      } else if (this.password === '' && this.confirmPassword === '') {
         this.confirmPasswordErrorMessage = this.passwordErrorMessage =
            '*Required'
      } else if (this.email === '') {
         this.emailErrorMessage = '*Required'
      } else if (this.password === '') {
         this.passwordErrorMessage = '*Required'
      } else if (this.confirmPassword === '') {
         this.confirmPasswordErrorMessage = '*Required'
      } else {
         if (
            this.emailErrorMessage === '' &&
            this.passwordErrorMessage === '' &&
            this.confirmPasswordErrorMessage === ''
         ) {
            const { onClickSignUp } = this.props
            onClickSignUp(this.email, this.password, this.confirmPassword)
         }
      }
   }

   render() {
      const {
         t,
         goToSignInPage,
         getUserSignInAPIStatus,
         errorMessage
      } = this.props
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
                  <EmailInputFieldContainer>
                     <LabelField>
                        {t('authenticationModule:userName')}
                        <InputField
                           onChangeField={this.onChangeUserName}
                           type={t(
                              'authenticationModule:userNameInputFieldType'
                           )}
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
                  </EmailInputFieldContainer>

                  <PasswordInputFieldContainer>
                     <LabelField>
                        {t('authenticationModule:password')}
                        <InputField
                           onChangeField={this.onChangePassword}
                           type={t(
                              'authenticationModule:passwordInputFieldType'
                           )}
                           placeholder={t(
                              'authenticationModule:passwordPlaceholderText'
                           )}
                           value={this.password}
                           errorMessage={this.passwordErrorMessage}
                           validate={this.checkPasswordValidation}
                        />
                        {this.passwordErrorMessage ? (
                           <ErrorMessage>
                              {this.passwordErrorMessage}
                           </ErrorMessage>
                        ) : (
                           ''
                        )}
                     </LabelField>
                  </PasswordInputFieldContainer>

                  <ConfirmPasswordInputFieldContainer>
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
                        {this.confirmPasswordErrorMessage ? (
                           <ErrorMessage>
                              {this.confirmPasswordErrorMessage}
                           </ErrorMessage>
                        ) : (
                           ''
                        )}
                     </LabelField>
                  </ConfirmPasswordInputFieldContainer>

                  <Button
                     typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                     type={Button.buttonType.filled}
                     onClick={this.onClickSignUp}
                     name={t('authenticationModule:login')}
                     apiStatus={getUserSignInAPIStatus}
                  />
                  {errorMessage ? (
                     <ErrorMessage>{errorMessage}</ErrorMessage>
                  ) : (
                     ''
                  )}
                  {this.errorMessage ? (
                     <ErrorMessage>{this.errorMessage}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </Form>

               <AlreadyHaveAnAccountContainer>
                  <AlreadyHaveAccountText>
                     {t('authenticationModule:alreadyHaveAnAccount')}
                     <SignInText onClick={goToSignInPage}>
                        {t('authenticationModule:logInText')}
                     </SignInText>
                  </AlreadyHaveAccountText>
               </AlreadyHaveAnAccountContainer>

               <LanguageSelector changeLanguage={this.changeLanguage} t={t} />
            </SignUpCardContanier>
         </SignUpPageMainContainer>
      )
   }
}

export default SignUpPage
