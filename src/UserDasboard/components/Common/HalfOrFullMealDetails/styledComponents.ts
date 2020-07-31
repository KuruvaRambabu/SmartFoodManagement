import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {
   Typo18SteelHKGroteskMedium,
   Typo12CoolGreyHKGroteskSemiBold,
   Typo14SteelHKGroteskRegular
} from '../../../../Common/styleGuide/Typos'

export const HalfOrFullMealDetailsMainContainer = styled.div`
   height: 350px;
   ${tw``}
`
export const ItemsMainContainer = styled.div`
   ${tw`flex justify-around h-20`}
`
export const ItemNameAndCategoryContainer = styled.div`
   ${tw`flex flex-col w-1/3 `}
`

export const ItemName = styled(Typo18SteelHKGroteskMedium)``

export const Category = styled(Typo12CoolGreyHKGroteskSemiBold)``

export const QuantityAndServingTypeContainer = styled.div`
   ${tw` w-1/3 `}
`

export const QuantityAndServeType = styled(Typo14SteelHKGroteskRegular)``
