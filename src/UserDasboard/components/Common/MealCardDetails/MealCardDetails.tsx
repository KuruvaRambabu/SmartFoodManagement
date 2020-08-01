import React, { Component } from 'react'
import { observer } from 'mobx-react'

import MealCardDataModel from '../../../stores/models/MealCardDataModel/MealCardDataModel'
import {
   MealCardDetailsMainContainer,
   IconAndPreferredMealContainer,
   IconAndMealTypeContainer,
   PreferredMealContainer,
   MealIconContainer,
   MealTypeContainer,
   PreferredMeal,
   MealType,
   MealTimings,
   ItemsNamesMainContainer
} from './styledComponents'
import { BreakfastIcon } from '../../../../Common/components/Icons/BreakfastIcon/BreakFastIcon'
import { LuchIcon } from '../../../../Common/components/Icons/LunchIcon/LunchIcon'
import { DinnerIcon } from '../../../../Common/components/Icons/DinnerIcon/DinnnerIcon'
import ItemsName from '../ItemsName/ItemsName'
import MealEditAndReviewButton from '../MealEditAndReviewButton/MealEditAndReviewButton'
import { format } from 'date-fns/esm'

interface MealCardDetailsProps {
   eachMeal: MealCardDataModel
   selectedMealDate: Date
}
@observer
class MealCardDetails extends Component<MealCardDetailsProps> {
   renderMealIcon = type => {
      if (type === 'Breakfast') {
         return <BreakfastIcon />
      } else if (type === 'Lunch') {
         return <LuchIcon />
      } else {
         return <DinnerIcon />
      }
   }
   render() {
      const { eachMeal, selectedMealDate } = this.props
      const { itemNames } = eachMeal
      console.log(eachMeal)
      const startTime = format(new Date(eachMeal.mealStartTime), 'HH:mm')
      const endTime = format(new Date(eachMeal.mealEndTime), 'HH:mm')
      return (
         <MealCardDetailsMainContainer>
            <IconAndPreferredMealContainer>
               <IconAndMealTypeContainer>
                  <MealIconContainer>
                     {this.renderMealIcon(eachMeal.mealType)}
                  </MealIconContainer>
                  <MealTypeContainer>
                     <MealType>{eachMeal.mealType}</MealType>
                     <MealTimings>
                        {startTime} - {endTime}
                     </MealTimings>
                  </MealTypeContainer>
               </IconAndMealTypeContainer>
               <PreferredMealContainer>
                  <PreferredMeal>{eachMeal.preferenceStatus}</PreferredMeal>
               </PreferredMealContainer>
            </IconAndPreferredMealContainer>

            <ItemsNamesMainContainer>
               {itemNames.map((item, index) => (
                  <ItemsName index={index} item={item} key={item} />
               ))}
            </ItemsNamesMainContainer>
            <MealEditAndReviewButton
               mealType={eachMeal.mealType}
               deadLine={eachMeal.deadLine}
               startTime={eachMeal.mealStartTime}
               endTime={eachMeal.mealEndTime}
               selectedMealDate={selectedMealDate}
            />
         </MealCardDetailsMainContainer>
      )
   }
}

export default MealCardDetails
