import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

export const ButtonStyles = css`
   width: 90%;
   text-align: center;
   background-color: #0b69ff;
   height: 40px;
`
export const ButtonContainer = styled.div`
   ${tw`w-full mt-4 mb-auto flex justify-center `}
`
export const DisableEditButtonStyles = css`
   width: 90%;
   text-align: center;
   background-color: rgba(126, 133, 142, 0.4);
   height: 40px;
`
