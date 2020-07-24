import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { Colors } from '../../../themes/Colors'
import { css } from '@emotion/core'

export const MealTabsMainContainer = styled.div``

export const MealTabsContainer = styled.div`
   ${tw` flex  w-11/12 -mt-4 `}
`

export const FullMealTabContainer = styled.div`
   ${tw`flex justify-center items-center cursor-pointer`}
`

export const CustomMealTabContainer = styled.div`
   width: 100px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   ${tw`flex justify-center items-center cursor-pointer`}
`

export const HalfMealTabContainer = styled.div`
   width: 100px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   ${tw`flex justify-center items-center`}
`

export const CustomMealTabText = styled(Typo14DarkBlueGreyHKGroteskSemiBold)``

export const FullMealTabText = styled(Typo14DarkBlueGreyHKGroteskSemiBold)``

export const HalfMealTabText = styled(Typo14DarkBlueGreyHKGroteskSemiBold)``

export const MealTabsAndDateContainer = styled.div`
   ${tw`flex w-9/12 p-4 justify-center `}
`
export const MealTypeButtonStyles = css`
   width: 100px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   cursor: pointer;
`
export const MealTypeButtons = styled.div`
   ${tw` flex border `}
`
