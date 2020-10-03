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
   onChangeQualityRating = (rating: any) => {
      console.log('hello rambabu', rating)
   }

   render() {
      const { item } = this.props
      console.log('rating component', item)
      return (
         <RatingComponentMainContainer>
            <ItemDetailsComponent>
               <Name> {item.itemName}</Name>
            </ItemDetailsComponent>
            <QuanlityRatingContainer>
               <Rating
                  icon='star'
                  maxRating={5}
                  defaultRating={item.quantityRating}
                  size='huge'
                  onRate={rating => this.onChangeQualityRating(rating)}
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
