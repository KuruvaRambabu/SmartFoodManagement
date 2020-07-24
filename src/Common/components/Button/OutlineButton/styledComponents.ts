import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../../../UserDasboard/themes/Colors'

type OutlineButtonProps = {
   apiStatus: number
   buttonStyles?: any
}

export const OutlineBtn = styled.button`
${tw`w-full h-8 mt-4 text-white flex justify-center items-center rounded focus:outline-none`};
   background: ${Colors.white};
   font-family: Rubik;
   font-size: 14px;
   font-weight: 800;
   ${tw``}
   opacity: ${(props: OutlineButtonProps) =>
      props.apiStatus === 100 ? 0.7 : ''};
   ${(props: OutlineButtonProps) => props.buttonStyles}
`
