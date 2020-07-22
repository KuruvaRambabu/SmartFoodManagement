import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo12SteelHKGroteskRegulars,
   Text12JadeInterSemiBold,
   Typo16SteelHKGroteskRegular
} from '../../../../Common/styleGuide/Typos'
import { css } from '@emotion/core'

export const MealCardDetailsMainContainer = styled.div`
   height: 304px;
   ${tw` border shadow-md w-full md:w-1/4`}
`
export const IconAndPreferredMealContainer = styled.div`
   ${tw`p-4 flex w-full justify-center`}
`

export const IconAndMealTypeContainer = styled.div`
   ${tw`w-1/2 flex h-16 `}
`

export const MealIconContainer = styled.div`
   ${tw`border w-12 h-10 flex rounded items-center justify-center`}
`

export const MealTypeContainer = styled.div`
   ${tw`pl-4 flex flex-col`}
`

export const PreferredMealContainer = styled.div`
   ${tw` w-1/2 flex justify-center items-center`}
`

export const PreferredMeal = styled(Text12JadeInterSemiBold)`
   ${tw``}
`
export const MealType = styled(Typo16DarkBlueGreyHKGroteskMedium)`
   ${tw` `}
`
export const MealTimings = styled(Typo12SteelHKGroteskRegulars)`
   ${tw``}
`

export const ButtonStyles = css`
   width: 90%;
   text-align: center;
   background-color: #0b69ff;
   height: 40px;
`
export const ButtonContainer = styled.div`
   ${tw`w-full  mt-auto flex justify-center `}
`
export const ItemsNamesMainContainer = styled.div`
   ${tw`flex p-4 flex-wrap justify-between `}
`
export const Item = styled(Typo16SteelHKGroteskRegular)`
   ${tw`w-1/2 `}
`
