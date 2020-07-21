import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../Authentication/themes/Colors'

type borerType = {
   border: string
}
type isError = {
   isError?: string
}

export const InputElement = styled.input`
   border: 1px solid
      ${(props: borerType) => (props.border === 'red' ? 'red' : colors.steel)};
   color: ${colors.darkBlueGrey};

   font-size: 16px;
   ${tw`focus:outline-none w-full h-10 `};
`
export const InputFieldContainer = styled.div`
   ${tw``}
`

export const ErrorImageContainer = styled.div`
   margin-right: ${(props: isError) => (props.isError ? -10 : '')};
   ${tw`mt-2  `};
`

export const ErrorImage = styled.img``

export const ErrorMessage = styled.span`
   ${tw`text-red-500`}
`
