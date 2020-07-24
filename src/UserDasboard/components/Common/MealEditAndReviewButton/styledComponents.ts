import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { colors } from '../../../../Authentication/themes/Colors'

export const ButtonStyles = css`
   width: 90%;
   text-align: center;
   background-color: ${colors.brightBlue};
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
export const IAteAndSkippedContainer = styled.div`
   ${tw`w-11/12 flex justify-around`}
`
export const IAteItButtonStyles = css`
   width: 128px;
   height: 40px;
   border-radius: 4px;
   background-color: ${colors.brightBlue};
`

export const ISkippedButtonStyles = css`
   width: 128px;
   height: 40px;
   border-radius: 4px;
   border: solid 1px #e4e9f0;
`
