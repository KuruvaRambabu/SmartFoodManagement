import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo20DarkBlueGreyHKGroteskMedium } from '../../styleGuide/Typos'

export const HeaderMainCointainer = styled.div`
   ${tw`w-full h-24 md:flex shadow-md`}
`
export const IbHubsLogoContainer = styled.div`
   ${tw`pl-12 flex items-center`}
`

export const IbHubsLogo = styled.img`
   ${tw``}
`
export const HeaderLeftSideContainer = styled.div`
   ${tw`w-full md:w-1/2`}
`

export const HeaderRightSideContainer = styled.div`
   ${tw`w-full md:w-1/2 flex justify-around  items-center font-medium `}
`
export const ProfilePage = styled.div`
   ${tw`flex justify-center items-center`}
`

export const HomePage = styled(Typo20DarkBlueGreyHKGroteskMedium)``

export const WeeklyMenuPage = styled(Typo20DarkBlueGreyHKGroteskMedium)``

export const Profile = styled(Typo20DarkBlueGreyHKGroteskMedium)``
