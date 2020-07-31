import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const IncrementButton = styled.button`
   ${tw`w-16 h-10 text-xl text-green-500 text-xl font-bold focus:outline-none`}
`

export const DecrementButton = styled.button`
   ${tw`w-16 h-10 focus:outline-none  font-bold text-xl `}
`

export const InputTag = styled.input`
   border-left: 1px solid #d7dfe9;
   border-right: 1px solid #d7dfe9;

   ${tw`w-16 h-10  text-center text-xl focus:outline-none hover:outline-none`}
`

export const CounterAppMainContainer = styled.div`
   ${tw`w-full flex flex-col justify-center items-center`}
`

export const CounterAppHeading = styled.h1`
   ${tw` text-3xl font-bold p-5`}
`

export const CounterDIv = styled.div`
   ${tw`border rounded-md`}
`
