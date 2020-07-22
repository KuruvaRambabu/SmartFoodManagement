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
   ButtonStyles,
   ButtonContainer,
   ItemsNamesMainContainer,
   Item
} from './styledComponents'
import { BreakfastIcon } from '../../../../Common/components/Icons/BreakfastIcon/BreakFastIcon'
import { LuchIcon } from '../../../../Common/components/Icons/LunchIcon/LunchIcon'
import { DinnerIcon } from '../../../../Common/components/Icons/DinnerIcon/DinnnerIcon'
import Button from '../../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskRegularSpan } from '../../../../Common/styleGuide/Typos'

interface MealCardDetailsProps {
   eachMeal: MealCardDataModel
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
      const { eachMeal } = this.props
      const { itemNames } = eachMeal
      console.log(eachMeal.mealType)
      return (
         <MealCardDetailsMainContainer>
            <IconAndPreferredMealContainer>
               <IconAndMealTypeContainer>
                  <MealIconContainer>
                     {this.renderMealIcon(eachMeal.mealType)}
                  </MealIconContainer>
                  <MealTypeContainer>
                     <MealType>{eachMeal.mealType}</MealType>
                     <MealTimings>{'7:00 - 10:00'}</MealTimings>
                  </MealTypeContainer>
               </IconAndMealTypeContainer>
               <PreferredMealContainer>
                  <PreferredMeal>{eachMeal.preferenceStatus}</PreferredMeal>
               </PreferredMealContainer>
            </IconAndPreferredMealContainer>
            <ItemsNamesMainContainer>
               {itemNames.map(item => {
                  return <Item>{item}</Item>
               })}
            </ItemsNamesMainContainer>
            <ButtonContainer>
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                  type={Button.buttonType.filled}
                  onClick={() => alert('hii')}
                  buttonStyles={ButtonStyles}
                  name={'Edit'}
               />
            </ButtonContainer>
         </MealCardDetailsMainContainer>
      )
   }
}

export default MealCardDetails
