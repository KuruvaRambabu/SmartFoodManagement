import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import { Typo14DarkBlueGreyHKGroteskRegularSpan } from '.././../../Common/styleGuide/Typos/index'

import InputField from '../../../Common/components/InputField/index'
import IbHubsLogo from '../../../Common/components/Icons/IbHubsLogo/IbHubsLogo'
import Button from '../../../Common/components/Button/Button'

import i18n from '../../i18n'
import {
   ValidatePassword,
   ValidateUserName
} from '../../utils/Validation/Validations'

import LanguageSelector from '../LanguageSelector/LanguageSelector'

import {
   SignInPageMainContainer,
   SignInCardContanier,
   Form,
   Heading,
   ImageContainer,
   ErrorMessage,
   DontHaveAccount,
   LabelField,
   GoToSignUp,
   EmailInputFieldContainer,
   PasswordInputFieldContainer
} from './styledComponents'

interface SignInPageTypes {
   onClickSignIn: (email: string, password: string) => void
   getUserSignInAPIStatus: number
   t: any
   errorMessage: string
   goToSignUpPage: any
}
@observer
class SignInPage extends React.Component<SignInPageTypes> {
   @observable email: string
   @observable password: string
   @observable errorMessage: string
   @observable passwordErrorMessage: string
   @observable emailErrorMessage: string
   emailRef: React.RefObject<HTMLInputElement> = React.createRef()
   passwordRef: React.RefObject<HTMLInputElement> = React.createRef()

   constructor(props) {
      super(props)
      this.email = ''
      this.password = ''
      this.errorMessage = ''
      this.passwordErrorMessage = ''
      this.emailErrorMessage = ''
   }

   componentDidMount() {
      this.emailRef.current?.focus()
   }

   changeLanguage = e => {
      i18n.changeLanguage(e.target.value)
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

   onClickSignIn = (event: React.FormEvent) => {
      event.preventDefault()
      if (this.email === '' && this.password === '') {
         this.checkUserNameValidation()
         this.checkPasswordValidation()
         this.emailRef.current?.focus()
      } else if (this.email && this.password === '') {
         this.checkPasswordValidation()
         this.passwordRef.current?.focus()
      } else {
         if (this.emailErrorMessage || this.passwordErrorMessage) {
            this.checkUserNameValidation()
            this.checkPasswordValidation()
         } else {
            const { onClickSignIn } = this.props
            onClickSignIn(this.email, this.password)
         }
      }
   }

   render() {
      const {
         errorMessage,
         getUserSignInAPIStatus,
         t,
         goToSignUpPage
      } = this.props

      return (
         <SignInPageMainContainer>
            <SignInCardContanier>
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
                           isError={this.emailErrorMessage}
                           forwardRef={this.emailRef}
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
                           forwardRef={this.passwordRef}
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

                  <Button
                     typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                     type={Button.buttonType.filled}
                     onClick={this.onClickSignIn}
                     name={t('authenticationModule:login')}
                     apiStatus={getUserSignInAPIStatus}
                  />
                  {errorMessage ? (
                     <ErrorMessage>{errorMessage}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </Form>
               <DontHaveAccount>
                  {t('authenticationModule:dontHaveanAccountText')}
                  <GoToSignUp
                     className='cursor-pointer text-blue-600 font-bold'
                     onClick={goToSignUpPage}
                  >
                     Sign Up
                  </GoToSignUp>
               </DontHaveAccount>

               <LanguageSelector t={t} changeLanguage={this.changeLanguage} />
            </SignInCardContanier>
         </SignInPageMainContainer>
      )
   }
}

export default SignInPage
