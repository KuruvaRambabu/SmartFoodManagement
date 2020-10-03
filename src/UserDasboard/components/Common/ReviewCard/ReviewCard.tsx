import React, { Component } from 'react'
import { observer } from 'mobx-react'

import MealCardDataModel from '../../../stores/models/MealCardDataModel/MealCardDataModel'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
import NoDataView from '../../../../Common/components/NoDataView'

import RatingComponent from '../RatingComponent/RatingComponent'

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
   ListOfItemsInTheMenu,
   WriteYourReviewContainer,
   WriteYourReviewInputField,
   ReviewButtonContainer,
   ReviewButtonStyles
} from './styledComponents'
import { observable } from 'mobx'
import Button from '../../../../Common/components/Button/Button'
import { Typo14WhiteHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { goToHomePage } from '../../../../Authentication/utils/NavigationModule/NavigationModule'
import { SMART_FOOD_MANAGEMENT_HOME_PAGE } from '../../../../Common/routes/RouteConstants'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { navigateToHomePage } from '../../../utils/NavigationModule/NavigationModule'

interface ReviewCardProps extends RouteComponentProps {}

interface ReviewCardProps {
   onSelectReviewFood: MealCardDataModel
}
@observer
class ReviewCard extends Component<ReviewCardProps> {
   @observable customReview: string = ''

   onChangeReview = event => {
      this.customReview = event.target.value
   }
   onClickReviewDoneButton = () => {
      const { history } = this.props
      navigateToHomePage(history)
   }

   renderReviewItems = observer(() => {
      const { getReviewForSelectedMealData } = this.props.onSelectReviewFood
      console.log('hello', getReviewForSelectedMealData)
      if (getReviewForSelectedMealData.length === 0) {
         return <NoDataView />
      } else {
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
               <WriteYourReviewContainer>
                  <WriteYourReviewInputField
                     placeholder='Write review'
                     onChange={this.onChangeReview}
                     value={this.customReview}
                  ></WriteYourReviewInputField>
               </WriteYourReviewContainer>
               <ReviewButtonContainer>
                  <Button
                     onClick={this.onClickReviewDoneButton}
                     type={Button.buttonType.filled}
                     typo={Typo14WhiteHKGroteskSemiBold}
                     name={'save'}
                     buttonStyles={ReviewButtonStyles}
                  />
               </ReviewButtonContainer>
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
export default withRouter(ReviewCard)
