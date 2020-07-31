import React from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import {
   CounterAppMainContainer,
   CounterAppHeading,
   CounterDIv,
   IncrementButton,
   DecrementButton,
   InputTag
} from './styledComponent'

import { withRouter, Redirect } from 'react-router-dom'

type props = {
   quantity: number
   onDecrementQuantity: () => void
   onIncrementQuantity: () => void
}

@observer
class CounterApp extends React.Component<props> {
   render() {
      const { onDecrementQuantity, onIncrementQuantity, quantity } = this.props
      return (
         <CounterAppMainContainer>
            <CounterDIv>
               <DecrementButton onClick={onDecrementQuantity}>
                  -
               </DecrementButton>
               <InputTag type='number' value={quantity}></InputTag>
               <IncrementButton onClick={onIncrementQuantity}>
                  +
               </IncrementButton>
            </CounterDIv>
         </CounterAppMainContainer>
      )
   }
}

export default CounterApp
