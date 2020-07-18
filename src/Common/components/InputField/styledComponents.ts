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
   ${tw`focus:outline-none w-full h-8  `};
`
export const InputFieldContainer = styled.div`
   ${tw`flex justify-end`}
`

export const ErrorImageContainer = styled.div`
   object-fiit: 'contain';
   position: ${(props: isError) => (props.isError ? 'absolute' : '')};
   ${tw`mt-2`};
`

export const ErrorImage = styled.img``
