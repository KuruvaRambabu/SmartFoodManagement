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
import { observable } from 'mobx'
import { observer } from 'mobx-react'

interface MealPreferenceCardProps {
   mealType: string
}

@observer
class MealPreferenceCard extends Component<MealPreferenceCardProps> {
   @observable selectedMealType: string = 'fullMeal'
   onClickSkipMeal = () => {}

   onChangeMealType = event => {
      alert(event.target.id)
   }
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
                     name={`Skip meal`}
                  />
               </PreferenceMealTypeContainer>
               <MealTabs
                  selectedMealType={this.selectedMealType}
                  onChangeMealType={this.onChangeMealType}
               />
               <UpdateMealPreferenceAndBackButtons />
            </MealPreferenceCardContainer>
         </MealPreferenceCardMainContainer>
      )
   }
}

export default MealPreferenceCard
