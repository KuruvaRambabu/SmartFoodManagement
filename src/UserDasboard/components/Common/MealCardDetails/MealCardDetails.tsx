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

interface MealCardDetailsProps {
   eachMeal: MealCardDataModel
   onClickEditPreferenceButton: (
      event: React.FormEvent<HTMLInputElement>
   ) => void
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
      const { eachMeal, onClickEditPreferenceButton } = this.props
      const { itemNames } = eachMeal
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
                        {eachMeal.mealStartTime} - {eachMeal.mealEndTime}
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
               onClickEditPreferenceButton={onClickEditPreferenceButton}
               deadLine={eachMeal.deadLine}
            />
         </MealCardDetailsMainContainer>
      )
   }
}

export default MealCardDetails
