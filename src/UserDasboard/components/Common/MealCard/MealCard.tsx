import React, { Component } from 'react'
import {
   MealCardMainContainer,
   CardsContainer,
   DatePickerContainer
} from './styledComponents'
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
   selectedMealDate: Date
   onChangeMealDate: (Date: Date) => void
}

@observer
class MealCard extends Component<MealCardProps> {
   renderMealCardSuccessUI = observer(() => {
      const { mealCardData, selectedMealDate, onChangeMealDate } = this.props
      return (
         <MealCardMainContainer>
            <DatePickerContainer>
               <DatePicker
                  selectedMealDate={selectedMealDate}
                  onChangeMealDate={onChangeMealDate}
               />
            </DatePickerContainer>

            <CardsContainer>
               {mealCardData.map(eachMeal => (
                  <MealCardDetails key={eachMeal.mealId} eachMeal={eachMeal} />
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
