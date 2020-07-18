import React from 'react'
import {
   InputElement,
   ErrorImageContainer,
   ErrorImage,
   InputFieldContainer
} from './styledComponents'
import { colors } from '../../../Authentication/themes/Colors'

type InputFieldTypes = {
   type: string
   placeholder: string
   value: string
   onChangeField: any
   errorMessage: string
   validate: any
   forwardRef?: React.RefObject<HTMLInputElement>
   isError?: string
}
import { InputErrorLogo } from '../Icons/index'

class InputField extends React.Component<InputFieldTypes> {
   render() {
      const {
         type,
         placeholder,
         value,
         onChangeField,
         errorMessage,
         validate,
         forwardRef,
         isError
      } = this.props
      return (
         <InputFieldContainer>
            <InputElement
               border={errorMessage ? 'red' : colors.steel}
               type={type}
               placeholder={placeholder}
               value={value}
               onChange={onChangeField}
               onBlur={validate}
               ref={forwardRef}
            ></InputElement>
            {/* {errorMessage ? (
               <ErrorImageContainer isError={errorMessage}>
                  <ErrorImage src={InputErrorLogo}></ErrorImage>
               </ErrorImageContainer>
            ) : (
               ''
            )} */}
         </InputFieldContainer>
      )
   }
}

export default InputField
