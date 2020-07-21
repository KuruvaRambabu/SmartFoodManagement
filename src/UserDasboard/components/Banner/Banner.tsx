import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'

import 'rc-banner-anim/assets/index.css'
const BgElement = Element.BgElement
const imgArray = [
   'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
   'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg'
]
class Banner extends React.Component {
   render() {
      return (
         <BannerAnim prefixCls='banner-user' autoPlay>
            <Element prefixCls='banner-user-elem' key='0'>
               <Element.BgElement
                  key='bg'
                  className='bg'
                  style={{
                     backgroundImage: `url(${imgArray[0]})`,
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
            <Element prefixCls='banner-user-elem' key='1'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     background: '#64CBCC'
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Ram
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  The Fast Way Use Animation In React
               </TweenOne>
            </Element>
         </BannerAnim>
      )
   }
}
export default Banner
