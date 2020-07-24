import styled from '@emotion/styled'
import tw from 'tailwind.macro'

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
   ${tw`w-full md:w-10/12 lg:w-1/2 shadow-xl h-full  border `}
`
