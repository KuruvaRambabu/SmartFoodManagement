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
         id,
         ...otherProps
      } = this.props
      return (
         <OutlineBtn
            buttonStyles={buttonStyles}
            apiStatus={apiStatus}
            id={id}
            {...otherProps}
         >
            <TextTypo id={id}>{name}</TextTypo>
         </OutlineBtn>
      )
   }
}

export default OutlineButton
