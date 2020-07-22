import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import './index.css'
import { observer } from 'mobx-react'
import BannerDataModel from '../../stores/models/BannerDataModel/BannerDataModel'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
const BgElement = Element.BgElement

interface BannerProps {
   bannerData: Array<BannerDataModel>
   getBannerDataAPIStatus: APIStatus
   getBannerDataAPIError: Error | null
}
@observer
class Banner extends React.Component<BannerProps> {
   renderBannerSuccessUI = observer(() => {
      const { bannerData } = this.props
      if (bannerData.length === 0) {
         return <div>NoData</div>
      }
      return (
         <BannerAnim prefixCls='banner-user' autoPlay>
            {bannerData.map(eachSpecial => {
               return (
                  <Element
                     prefixCls='banner-user-elem'
                     key={eachSpecial.bannerImageUrl}
                  >
                     <BgElement
                        key='bg'
                        className='bg'
                        style={{
                           backgroundImage: `url(${eachSpecial.bannerImageUrl})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center'
                        }}
                     />
                     <TweenOne
                        className='banner-user-title'
                        animation={{ y: 30, opacity: 0, type: 'from' }}
                     >
                        Announcement
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
                        {eachSpecial.occasion}
                     </TweenOne>
                     <TweenOne
                        className='banner-user-text-content'
                        animation={{
                           y: 30,
                           opacity: 0,
                           type: 'from',
                           delay: 100
                        }}
                     >
                        {eachSpecial.announcement}
                     </TweenOne>
                  </Element>
               )
            })}
         </BannerAnim>
      )
   })
   onRetryClick = () => {}

   render() {
      const { getBannerDataAPIError, getBannerDataAPIStatus } = this.props
      const loadingWrapperWithFailureProps = {
         apiStatus: getBannerDataAPIStatus,
         apiError: getBannerDataAPIError,
         renderSuccessUI: this.renderBannerSuccessUI,
         onRetryClick: this.onRetryClick
      }
      return <LoadingWrapperWithFailure {...loadingWrapperWithFailureProps} />
   }
}
export default Banner
