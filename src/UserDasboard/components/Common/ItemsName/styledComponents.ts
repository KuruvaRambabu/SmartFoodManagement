import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo16SteelHKGroteskRegular } from '../../../../Common/styleGuide/Typos'

interface ItemsProps {
   index: number
}

export const Item = styled(Typo16SteelHKGroteskRegular)`
   ${tw`w-full`}
`
export const ItemContainer = styled.div`
   ${tw` w-2/5 mx-2 lg:mx-0 xl:mx-2`}
`
