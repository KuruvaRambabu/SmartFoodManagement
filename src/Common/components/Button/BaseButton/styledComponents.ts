import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../../Authentication/themes/Colors'

type PrimarySignInButtonProps = {
   apiStatus: number
   buttonStyles?: any
}

export const BaseBtn = styled.button`
   ${tw`w-full h-12 mt-4 text-white flex justify-center items-center rounded focus:outline-none`};
   background: ${colors.brightBlue};
   font-family: Rubik;
   font-size: 14px;
   font-weight: 800;

   opacity: ${(props: PrimarySignInButtonProps) =>
      props.apiStatus === 100 ? 0.7 : ''};
   ${(props: PrimarySignInButtonProps) => props.buttonStyles};
`
