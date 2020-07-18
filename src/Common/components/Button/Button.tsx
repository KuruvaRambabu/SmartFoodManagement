import React, { Component } from 'react'
import { buttonType, variationType } from './constants'
import BaseButton from './BaseButton/BaseButton'
import { css, jsx } from '@emotion/core'
import OutlineButton from './OutlineButton/OutlineButton'

class Button extends Component {
   static buttonType = buttonType
   static variationType = variationType

   getButtonVariation = variation => {
      switch (variation) {
         case variationType.oval:
            return 1
         case variationType.rectangle:
            return 2
      }
   }
   render() {
      const { ...otherProps } = this.props
      switch ('type') {
         case buttonType.filled:
            return <BaseButton {...otherProps} />
         case buttonType.outline:
            return <OutlineButton />
         default:
            console.warn('Invalid button type', 'type')
            break
      }
   }
}

export default Button