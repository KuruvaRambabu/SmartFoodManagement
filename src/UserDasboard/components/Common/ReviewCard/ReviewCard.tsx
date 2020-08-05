import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { ReviewCardMainContainer, ReviewCardWrapper } from './styledComponents'
import MealCardDataModel from '../../../stores/models/MealCardDataModel/MealCardDataModel'

interface ReviewCardProps {
   onSelectReviewFood: MealCardDataModel
}
@observer
class ReviewCard extends Component<ReviewCardProps> {
   render() {
      // const {
      //    getReviewForSelectedMealAPIStatus,
      //    getReviewForSelectedMealData
      // } = this.props.onSelectReviewFood
      console.log(this.props.onSelectReviewFood)
      return (
         <ReviewCardWrapper>
            <ReviewCardMainContainer>hiii</ReviewCardMainContainer>
         </ReviewCardWrapper>
      )
   }
}

export default ReviewCard
