import styled from '@emotion/styled'

import tw from 'tailwind.macro'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo20BlackHKGroteskMedium
} from '../../../../Common/styleGuide/Typos'

export const ReviewCardMainContainer = styled.div`
   border-radius: 6px;
   top: -25%;
   z-index: 10;
   position: absolute;
   border-radius: 6px;
   background-color: #ffffff;
   ${tw`w-full md:w-10/12 lg:w-1/2 shadow-xl h-full   `}
`

export const ReviewCardWrapper = styled.div`
   height: 627px;
   position: relative;
   ${tw`w-full flex justify-center items-center   `}
`
export const ReviewNameContainer = styled.div`
   ${tw`ml-10 mt-10`}
`

export const ReviewName = styled(Typo32DarkBlueGreyHKGroteskMedium)``
export const QuantityAndTasteRatingContainer = styled.div`
   ${tw`w-10/12 ml-10 mt-10 flex border border-red-400`}
`

export const ItemDetailsContainer = styled.div`
   ${tw`w-1/3 border `}
`
export const QuantityHeading = styled(Typo20BlackHKGroteskMedium)``
export const TasteHeading = styled(Typo20BlackHKGroteskMedium)``

export const QuantityHeadingContainer = styled.div`
   ${tw`w-1/3 border `}
`

export const TasteHeadingContainer = styled.div`
   ${tw`w-1/3 border `}
`
