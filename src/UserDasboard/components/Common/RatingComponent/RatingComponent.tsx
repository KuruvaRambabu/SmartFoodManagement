import React, { Component } from 'react'
import { observer } from 'mobx-react'

import StarRatings from 'react-star-ratings'
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
   changeRating = () => {}
   render() {
      const { item } = this.props
      return (
         <RatingComponentMainContainer>
            <ItemDetailsComponent>
               <Name> {item.itemName}</Name>
            </ItemDetailsComponent>
            <QuanlityRatingContainer>
               <StarRatings
                  rating={item.quanlityRating}
                  starRatedColor='#ffd11a'
                  changeRating={item.onChangeQualityRating}
                  numberOfStars={5}
                  name='rating'
                  starDimension='20px'
                  starHoverColor=' #ffd11a'
                  starSpacing='2px'
               />
            </QuanlityRatingContainer>
            <TasteRatingContainer>
               <StarRatings
                  rating={item.tasteRating}
                  starRatedColor='#ffd11a'
                  changeRating={item.onChangeTasteRating}
                  numberOfStars={5}
                  name='rating'
                  starDimension='20px'
                  starSpacing='2px'
                  starHoverColor=' #ffd11a'
               />
            </TasteRatingContainer>
         </RatingComponentMainContainer>
      )
   }
}

export default RatingComponent
