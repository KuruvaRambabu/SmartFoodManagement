import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { Colors } from '../../../themes/Colors'
import { css } from '@emotion/core'

export const MealTabsMainContainer = styled.div`
   ${tw`w-full md:ml-4`}
`

export const MealTabsContainer = styled.div`
   ${tw`  w-7/12 flex-grow flex `}
`

export const MealTabsAndDateContainer = styled.div`
   ${tw`flex w-full lg:w-9/12 flex-col lg:flex-row p-4 justify-center `}
`
export const MealTypeButtonStyles = css`
   width: 100px;
   height: 40px;
   border: solid 1px ${Colors.lightBlueGray};
   cursor: pointer;
`
