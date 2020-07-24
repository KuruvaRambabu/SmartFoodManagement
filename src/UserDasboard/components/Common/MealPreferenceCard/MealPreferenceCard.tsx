import React, { Component } from 'react'

import {
   MealPreferenceCardMainContainer,
   MealPreferenceCardContainer,
   PreferenceMealType,
   PreferenceMealTypeContainer,
   SkipMealButtonStyles
} from './styledComponents'
import { UpdateMealPreferenceAndBackButtons } from '../UpdateMealPreferenceAndBackButtons'
import MealTabs from '../MealTabs/MealTabs'
import { MealTypeContainer } from '../MealCardDetails/styledComponents'
import Button from '../../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { ISkippedButtonStyles } from '../MealEditAndReviewButton/styledComponents'

interface MealPreferenceCardProps {
   mealType: string
}

class MealPreferenceCard extends Component<MealPreferenceCardProps> {
   onClickSkipMeal = () => {}
   render() {
      const { mealType } = this.props
      return (
         <MealPreferenceCardMainContainer>
            <MealPreferenceCardContainer>
               <PreferenceMealTypeContainer>
                  <PreferenceMealType>{mealType}</PreferenceMealType>
                  <Button
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     type={Button.buttonType.outline}
                     onClick={this.onClickSkipMeal}
                     buttonStyles={SkipMealButtonStyles}
                     name={`Skip meal `}
                  />
               </PreferenceMealTypeContainer>
               <MealTabs />
               <UpdateMealPreferenceAndBackButtons />
            </MealPreferenceCardContainer>
         </MealPreferenceCardMainContainer>
      )
   }
}

export default MealPreferenceCard
