import React, { Component } from 'react'
import { MealCardMainContainer, CardsContainer } from './styledComponents'
import { APIStatus } from '@ib/api-constants'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
import DatePicker from '../../../../Common/components/DatePicker/DatePicker'
import { MealCardDetails } from '../MealCardDetails'
import MealCardDataModel from '../../../stores/models/MealCardDataModel/MealCardDataModel'
import { withHeaderComponent } from '../../../../Common/Hocs/withHeader'

interface MealCardProps {
   mealCardData: Array<MealCardDataModel>
   getMealCardAPIError: Error | null
   getMealCardAPIStatus: APIStatus
   onClickEditPreferenceButton: (
      event: React.FormEvent<HTMLInputElement>
   ) => void
}

@observer
class MealCard extends Component<MealCardProps> {
   renderMealCardSuccessUI = observer(() => {
      const { mealCardData, onClickEditPreferenceButton } = this.props
      return (
         <MealCardMainContainer>
            <DatePicker />
            <CardsContainer>
               {mealCardData.map(eachMeal => (
                  <MealCardDetails
                     onClickEditPreferenceButton={onClickEditPreferenceButton}
                     key={eachMeal.mealId}
                     eachMeal={eachMeal}
                  />
               ))}
            </CardsContainer>
         </MealCardMainContainer>
      )
   })

   onRetryClick = () => {
      this.onRetryClick
   }
   render() {
      const { getMealCardAPIError, getMealCardAPIStatus } = this.props
      const loadingWrapperWthFailureProps = {
         apiStatus: getMealCardAPIStatus,
         apiError: getMealCardAPIError,
         renderSuccessUI: this.renderMealCardSuccessUI,
         onRetryClick: this.onRetryClick
      }
      return <LoadingWrapperWithFailure {...loadingWrapperWthFailureProps} />
   }
}

export default withHeaderComponent(MealCard)
