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
import { withTranslation, WithTranslation } from 'react-i18next'
import { PreferenceItems } from '../PreferenceItems'
interface MealPreferenceCardProps extends WithTranslation {}
interface MealPreferenceCardProps {
   mealType: string
}

@observer
class MealPreferenceCard extends Component<MealPreferenceCardProps> {
   @observable selectedMealType: string = 'fullMeal'

   onClickSkipMeal = () => {}

   onChangeMealType = event => {
      if (this.selectedMealType !== event.target.id) {
         this.selectedMealType = event.target.id
      }
      console.log(event.target.id)
   }
   render() {
      const { mealType, t } = this.props
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
                     name={t('userDashboardModule:skipMeal')}
                  />
               </PreferenceMealTypeContainer>
               <MealTabs
                  selectedMealType={this.selectedMealType}
                  t={t}
                  onChangeMealType={this.onChangeMealType}
               />
               <PreferenceItems selectedMealType={this.selectedMealType} />
               <UpdateMealPreferenceAndBackButtons t={t} />
            </MealPreferenceCardContainer>
         </MealPreferenceCardMainContainer>
      )
   }
}

export default withTranslation('translation')(MealPreferenceCard)
