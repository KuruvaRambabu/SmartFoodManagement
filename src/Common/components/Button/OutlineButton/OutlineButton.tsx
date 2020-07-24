import React, { Component } from 'react'

import { OutlineBtn } from './styledComponents'
interface OutlineButtonProps {
   typo?: any
   onClick: any
   name: any
   apiStatus?: any
   buttonStyles?: any
   disabled?: boolean
   id?: string
}

class OutlineButton extends Component<OutlineButtonProps> {
   render() {
      const {
         name,
         apiStatus,
         buttonStyles,
         typo: TextTypo,
         ...otherProps
      } = this.props
      return (
         <OutlineBtn
            buttonStyles={buttonStyles}
            apiStatus={apiStatus}
            {...otherProps}
         >
            <TextTypo>{name}</TextTypo>
         </OutlineBtn>
      )
   }
}

export default OutlineButton
