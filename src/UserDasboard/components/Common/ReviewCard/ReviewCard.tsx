import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   ReviewCardMainContainer,
   ReviewCardWrapper,
   ReviewNameContainer,
   ReviewName
} from './styledComponents'
import MealCardDataModel from '../../../stores/models/MealCardDataModel/MealCardDataModel'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
import NoDataView from '../../../../Common/components/NoDataView'

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
         return (
            <React.Fragment>
               <ReviewNameContainer>
                  <ReviewName>Review</ReviewName>
               </ReviewNameContainer>
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
      console.log('from review card', getReviewForSelectedMealAPIStatus)
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
