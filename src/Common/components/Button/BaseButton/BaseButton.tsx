import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

import { BaseBtn } from './styledComponents'
import { observer } from 'mobx-react'

interface BaseButtonProps {
   typo?: any
   onClick: any
   name: any
   apiStatus?: any
   buttonStyles?: object
   disabled?: boolean
   id?: string
}
@observer
class BaseButton extends Component<BaseButtonProps> {
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
         <React.Fragment>
            {apiStatus === 100 ? (
               <BaseBtn
                  buttonStyles={buttonStyles}
                  apiStatus={apiStatus}
                  {...otherProps}
               >
                  <Loader type='TailSpin' color='#fff' height={30} width={30} />
               </BaseBtn>
            ) : (
               <BaseBtn
                  buttonStyles={buttonStyles}
                  apiStatus={apiStatus}
                  {...otherProps}
                  id={id}
               >
                  <TextTypo id={id}>{name}</TextTypo>
               </BaseBtn>
            )}
         </React.Fragment>
      )
   }
}

export default BaseButton
