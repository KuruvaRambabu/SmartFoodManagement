import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'
import { Typo12SteelHKGrotesk } from '../../../Common/styleGuide/Typos/index'

export const SignUpPageMainContainer = styled.div`
   ${tw`min-h-screen w-full flex justify-center items-center`}
   background:#f1f7ff;
`

export const SignUpCardContanier = styled.div`
   @media only screen and (max-width: 767px) {
      height: 600px;
      width: 450px;
   }

   @media only screen and (min-width: 768px) {
      height: 650px;
      width: 450px;
   }
   ${tw`  flex  rounded shadow flex-col justify-center items-center `};
   background: ${colors.white};
`

export const Form = styled.form`
   ${tw`flex flex-col  w-4/5   justify-center `};
`
export const CompanyLogo = styled.img`
   ${tw`w-full h-20`}
`
export const ImageContainer = styled.div`
   ${tw` w-full flex justify-center `}
`

export const Heading = styled.p`
   color: ${colors.darkBlueGrey};
   font-family: Rubik;
   font-size: 32px;
   ${tw` w-3/4 text-center  `}
`
export const LabelField = styled(Typo12SteelHKGrotesk)``

export const ErrorMessage = styled.span`
   ${tw`text-red-500 text-center h-6  `}
`
