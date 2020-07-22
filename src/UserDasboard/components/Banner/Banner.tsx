import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import './index.css'
import BannerElement from '../BannerElement/BannerElement'
import { observer } from 'mobx-react'
const BgElement = Element.BgElement
const imgArray = [
   'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
   'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/cc3a73e9-68c9-45b9-9621-81e908f3d4ad.png',
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d6efd4aa-396d-4d65-b8a2-2e70e81646dc.svg'
]

@observer
class Banner extends React.Component {
   render() {
      return (
         <BannerAnim prefixCls='banner-user' autoPlay>
            {imgArray.map(each => {
               return (
                  <Element prefixCls='banner-user-elem' key={each}>
                     <BgElement
                        key='bg'
                        className='bg'
                        style={{
                           backgroundImage: `url(${each})`,
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
                        animation={{
                           y: 30,
                           opacity: 0,
                           type: 'from',
                           delay: 100
                        }}
                     >
                        The Fast Way Use Animation In React
                     </TweenOne>
                  </Element>
               )
            })}
         </BannerAnim>
      )
   }
}
export default Banner
