import React from 'react'
import { observer } from 'mobx-react'

import SignInButton from '../../../Common/components/Button/SignInButton'

import InputField from '../../../Common/components/InputField/index'
import IbHubsLogo from '../../../Common/components/Icons/IbHubsLogo/IbHubsLogo'

import i18n from '../../i18n'

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
   GoToSignUp
} from './styledComponents'

interface SignInPageTypes {
   email: string
   password: string
   errorMessage: string
   onChangePassword: Function
   onClickSignIn: (event: React.FormEvent) => void
   onChangeUserName: Function
   getUserSignInAPIStatus: number
   passwordErrorMessage: string
   emailErrorMessage: string
   validateUserName: Function
   validatePassword: Function
   t: any
   goToSignUpPage: any
}

@observer
class SignInPage extends React.Component<SignInPageTypes> {
   emailRef: React.RefObject<HTMLInputElement> = React.createRef()
   passwordRef: React.RefObject<HTMLInputElement> = React.createRef()

   componentDidMount() {
      this.emailRef.current?.focus()
   }
   changeLanguage = e => {
      i18n.changeLanguage(e.target.value)
   }

   render() {
      const {
         email,
         password,
         errorMessage,
         onChangePassword,
         onChangeUserName,
         onClickSignIn,
         getUserSignInAPIStatus,
         passwordErrorMessage,
         emailErrorMessage,
         validateUserName,
         validatePassword,
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
                  <LabelField>
                     {t('authenticationModule:userName')}
                     <InputField
                        isError={emailErrorMessage}
                        forwardRef={this.emailRef}
                        onChangeField={onChangeUserName}
                        type={t('authenticationModule:userNameInputFieldType')}
                        value={email}
                        placeholder={t(
                           'authenticationModule:userNamePlaceholderText'
                        )}
                        errorMessage={emailErrorMessage}
                        validate={validateUserName}
                     />
                     {emailErrorMessage ? (
                        <ErrorMessage>{emailErrorMessage}</ErrorMessage>
                     ) : (
                        ''
                     )}
                  </LabelField>

                  <LabelField>
                     {t('authenticationModule:password')}
                     <InputField
                        forwardRef={this.passwordRef}
                        onChangeField={onChangePassword}
                        type={t('authenticationModule:passwordInputFieldType')}
                        placeholder={t(
                           'authenticationModule:passwordPlaceholderText'
                        )}
                        value={password}
                        errorMessage={passwordErrorMessage}
                        validate={validatePassword}
                     />
                     {passwordErrorMessage ? (
                        <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
                     ) : (
                        ''
                     )}
                  </LabelField>

                  <SignInButton
                     apiStatus={getUserSignInAPIStatus}
                     onClickSignIn={onClickSignIn}
                     name={t('authenticationModule:login')}
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
