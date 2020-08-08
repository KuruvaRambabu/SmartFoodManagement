import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   RatingComponentMainContainer,
   ItemDetailsComponent,
   QuantityRatingContainer
} from './styledomponents'
import ReviewForSelectedMealItemsModel from '../../../stores/models/ReviewForSelectedMealItemsModel/ReviewForSelectedMealItemsModel'

interface RatingComponentProps {
   item: ReviewForSelectedMealItemsModel
}

@observer
class RatingComponent extends Component<RatingComponentProps> {
   render() {
      const { item } = this.props
      return (
         <RatingComponentMainContainer>
            <ItemDetailsComponent></ItemDetailsComponent>
            <QuantityRatingContainer></QuantityRatingContainer>
         </RatingComponentMainContainer>
      )
   }
}

export default RatingComponent
