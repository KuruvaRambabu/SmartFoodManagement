import styled from '@emotion/styled'

import tw from 'tailwind.macro'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo20BlackHKGroteskMedium
} from '../../../../Common/styleGuide/Typos'
import { css } from '@emotion/core'

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
   ${tw` flex w-11/12 justify-center items-center   `}
`
export const ReviewNameContainer = styled.div`
   ${tw`ml-10 mt-10`}
`

export const ReviewName = styled(Typo32DarkBlueGreyHKGroteskMedium)``
export const QuantityAndTasteRatingContainer = styled.div`
   ${tw`w-9/12 ml-10 mt-10 mb-4 flex`}
`

export const ItemDetailsContainer = styled.div`
   ${tw`w-1/3  `}
`
export const QuantityHeading = styled(Typo20BlackHKGroteskMedium)``
export const TasteHeading = styled(Typo20BlackHKGroteskMedium)``

export const QuantityHeadingContainer = styled.div`
   ${tw`w-1/3 text-center `}
`

export const TasteHeadingContainer = styled.div`
   ${tw`w-1/3  text-center `}
`

export const ListOfItemsInTheMenu = styled.div`
   ${tw`w-9/12 ml-10 flex flex-col `}
`
export const WriteYourReviewContainer = styled.div`
   ${tw`mt-10 w-full flex justify-center items-center`}
`
export const WriteYourReviewInputField = styled.textarea`
   font-family: HKGrotesk;
   font-size: 14px;
   width: 516px;
   height: 81px;
   border-radius: 2px;
   ${tw`text-xl p-4 focus:outline-none resize-none	 border border-gray-300`}
`

export const ReviewButtonContainer = styled.div`
   ${tw`w-full flex justify-center`}
`
export const ReviewButtonStyles = css`
   width: 71px;
   border-radius: 4px;
   height: 40px;
   background-color: #1db05f;
   margin: 10px;
`
