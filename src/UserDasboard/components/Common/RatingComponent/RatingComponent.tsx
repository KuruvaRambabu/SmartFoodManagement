import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   RatingComponentMainContainer,
   ItemDetailsComponent,
   QuanlityRatingContainer,
   Name,
   TasteRatingContainer
} from './styledomponents'
import ReviewForSelectedMealItemsModel from '../../../stores/models/ReviewForSelectedMealItemsModel/ReviewForSelectedMealItemsModel'
import { Rating } from 'semantic-ui-react'

interface RatingComponentProps {
   item: ReviewForSelectedMealItemsModel
}

@observer
class RatingComponent extends Component<RatingComponentProps> {
   render() {
      const { item } = this.props
      console.log(item)
      return (
         <RatingComponentMainContainer>
            <ItemDetailsComponent>
               <Name> {item.itemName}</Name>
            </ItemDetailsComponent>
            <QuanlityRatingContainer>
               <Rating
                  icon='star'
                  defaultRating={item.quantityRating}
                  maxRating={5}
                  size='huge'
               />
            </QuanlityRatingContainer>
            <TasteRatingContainer>
               <Rating
                  icon='star'
                  defaultRating={item.tasteRating}
                  maxRating={5}
                  size='huge'
               />
            </TasteRatingContainer>
         </RatingComponentMainContainer>
      )
   }
}

export default RatingComponent
