import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   ReviewCardMainContainer,
   ReviewCardWrapper,
   ReviewNameContainer,
   QuantityAndTasteRatingContainer,
   ReviewName,
   ItemDetailsContainer,
   QuantityHeading,
   TasteHeading,
   QuantityHeadingContainer,
   TasteHeadingContainer,
   ListOfItemsInTheMenu
} from './styledComponents'
import MealCardDataModel from '../../../stores/models/MealCardDataModel/MealCardDataModel'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
import NoDataView from '../../../../Common/components/NoDataView'
import RatingComponent from '../RatingComponent/RatingComponent'

interface ReviewCardProps {
   onSelectReviewFood: MealCardDataModel
}
@observer
class ReviewCard extends Component<ReviewCardProps> {
   renderReviewItems = observer(() => {
      const { getReviewForSelectedMealData } = this.props.onSelectReviewFood
      if (getReviewForSelectedMealData.length === 0) {
         return <NoDataView />
      } else {
         console.log(getReviewForSelectedMealData)
         return (
            <React.Fragment>
               <ReviewNameContainer>
                  <ReviewName>Review</ReviewName>
               </ReviewNameContainer>

               <QuantityAndTasteRatingContainer>
                  <ItemDetailsContainer></ItemDetailsContainer>
                  <QuantityHeadingContainer>
                     <QuantityHeading>Quanlity</QuantityHeading>
                  </QuantityHeadingContainer>

                  <TasteHeadingContainer>
                     <TasteHeading>Taste</TasteHeading>
                  </TasteHeadingContainer>
               </QuantityAndTasteRatingContainer>
               <ListOfItemsInTheMenu>
                  {getReviewForSelectedMealData.map(item => {
                     return <RatingComponent item={item} key={item.itemId} />
                  })}
               </ListOfItemsInTheMenu>
            </React.Fragment>
         )
      }
   })
   onRetryClick = () => {}
   render() {
      const {
         getReviewForSelectedMealAPIStatus,

         getReviewForSelectedMealAPIError
      } = this.props.onSelectReviewFood

      const LoadingWrapperWithFailureProps = {
         apiStatus: getReviewForSelectedMealAPIStatus,
         apiError: getReviewForSelectedMealAPIError,
         renderSuccessUI: this.renderReviewItems,
         onRetryClick: this.onRetryClick
      }
      return (
         <ReviewCardWrapper>
            <ReviewCardMainContainer>
               <LoadingWrapperWithFailure {...LoadingWrapperWithFailureProps} />
            </ReviewCardMainContainer>
         </ReviewCardWrapper>
      )
   }
}

export default ReviewCard
