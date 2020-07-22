import React, { Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'

import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import '../Banner/index.css'
import { observer } from 'mobx-react'

const BgElement = Element.BgElement
interface BannerElementProps {
   image: string
}

@observer
class BannerElement extends Component<BannerElementProps> {
   render() {
      alert('hii')
      const { image } = this.props
      alert(image)

      return (
         <Element prefixCls='banner-user-elem' key='0'>
            <BgElement
               key='bg'
               className='bg'
               style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
               }}
            />
            <TweenOne
               className='banner-user-title'
               animation={{ y: 30, opacity: 0, type: 'from' }}
            >
               Ant Motion Banner
            </TweenOne>
            <TweenOne
               className='banner-user-text'
               animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            >
               The Fast Way Use Animation In React
            </TweenOne>
         </Element>
      )
   }
}

export default BannerElement
