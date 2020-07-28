import * as React from 'react'
function ProfilePicture(props) {
   return (
      <svg width={40} height={40} viewBox='0 0 40 40' fill='none' {...props}>
         <mask
            id='prefix__a'
            maskUnits='userSpaceOnUse'
            x={0}
            y={0}
            width={40}
            height={40}
         >
            <rect
               x={-0.5}
               y={0.5}
               width={39}
               height={39}
               rx={19.5}
               transform='matrix(-1 0 0 1 39 0)'
               fill='#fff'
               stroke='#D7DFE9'
            />
         </mask>
         <g mask='url(#prefix__a)'>
            <rect
               width={40}
               height={40}
               rx={20}
               transform='matrix(-1 0 0 1 40 0)'
               fill='#D7DFE9'
            />
            <path fill='url(#prefix__pattern0)' d='M0 0h40v60H0z' />
         </g>
         <defs>
            <pattern
               id='prefix__pattern0'
               patternContentUnits='objectBoundingBox'
               width={1}
               height={1}
            >
               <use
                  xlinkHref='#prefix__image0'
                  transform='matrix(.00107 0 0 .00071 0 0)'
               />
            </pattern>
            <image
               id='prefix__image0'
               width={934}
               height={1400}
            />
         </defs>
      </svg>
   )
}
export default ProfilePicture