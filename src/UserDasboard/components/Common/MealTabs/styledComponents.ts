import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { Colors } from '../../../themes/Colors'

export const MealTabsMainContainer = styled.div``

export const MealTabsContainer = styled.div`
   ${tw` flex w-11/12 justify-center items-center border border-blue-400 `}
`

export const FullMealTabContainer = styled.div`
   width: 88px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   ${tw`flex justify-center items-center cursor-pointer`}
`

export const CustomMealTabContainer = styled.div`
   width: 95px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   ${tw`flex justify-center items-center cursor-pointer`}
`

export const HalfMealTabContainer = styled.div`
   width: 95px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   ${tw`flex justify-center items-center cursor-pointer`}
`

export const CustomMealTabText = styled(Typo14DarkBlueGreyHKGroteskSemiBold)``

export const FullMealTabText = styled(Typo14DarkBlueGreyHKGroteskSemiBold)``

export const HalfMealTabText = styled(Typo14DarkBlueGreyHKGroteskSemiBold)``

export const MealTabsAndDateContainer = styled.div`
   ${tw`flex w-9/12 justify-center `}
`
