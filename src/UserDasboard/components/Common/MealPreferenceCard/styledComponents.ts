import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo32DarkBlueGreyHKGroteskMedium } from '../../../../Common/styleGuide/Typos'
import { css } from '@emotion/core'
import { Colors } from '../../../themes/Colors'

export const MealPreferenceCardMainContainer = styled.div`
   height: 627px;
   position: relative;
   ${tw`w-full flex justify-center items-center   `}
`
export const MealPreferenceCardContainer = styled.div`
   border-radius: 6px;
   top: -25%;
   z-index: 10;
   position: absolute;
   border-radius: 6px;
   background-color: #ffffff;
   ${tw`w-full md:w-10/12 lg:w-1/2 shadow-xl h-full   `}
`
export const PreferenceMealTypeContainer = styled.div`
   ${tw`w-full p-6  flex justify-between`}
`
export const PreferenceMealType = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   margin-left: 20px;
`

export const SkipMealButtonStyles = css`
   width: 102px;
   height: 40px;
   border-radius: 4px;
   border: 1px solid ${Colors.lightBlueGray};
`
export const MealTabAndDateContainer = styled.div`
   ${tw`flex `}
`
export const RenderUserSelectedMealPreferenceDetailsMainContainer = styled.div`
   ${tw``}
`
