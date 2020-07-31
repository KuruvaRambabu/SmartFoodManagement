import React, { Component } from 'react'

import {
   MealPreferenceCardMainContainer,
   MealPreferenceCardContainer,
   PreferenceMealType,
   PreferenceMealTypeContainer,
   SkipMealButtonStyles,
   MealTabAndDateContainer
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
import { MealTabsContainer } from '../MealTabs/styledComponents'
import UserSelectedMealPreferenceModel from '../../../stores/models/UserSelectedMealPreferenceModel/UserSelectedMealPreferenceModel'
import { APIStatus } from '@ib/api-constants'
import UserFoodManagementStore from '../../../stores/UserFoodManagementStore/UserFoodManagementStore'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
interface MealPreferenceCardProps extends WithTranslation {}
interface MealPreferenceCardProps {
   mealType: string
   getUserMealPreferenceDetailsData: Array<UserSelectedMealPreferenceModel>
   getUserMealPreferenceDetailsAPIStatus: APIStatus
   getUserMealPreferenceDetailsAPIError: Error | null
}

@observer
class MealPreferenceCard extends Component<MealPreferenceCardProps> {
   @observable selectedMealType: string = 'fullMeal'

   onClickSkipMeal = () => {}

   renderUserSelectedMealPreferenceDetails = observer(() => {
      const { mealType, t } = this.props
      const { getUserMealPreferenceDetailsData } = this.props
      return (
         <React.Fragment>
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
            <MealTabAndDateContainer>
               <MealTabsContainer>
                  <MealTabs
                     getUserMealPreferenceDetailsData={
                        getUserMealPreferenceDetailsData
                     }
                     selectedMealType={this.selectedMealType}
                  />
               </MealTabsContainer>
               <PreferenceItems selectedMealType={this.selectedMealType} />
            </MealTabAndDateContainer>
            <UpdateMealPreferenceAndBackButtons t={t} />
         </React.Fragment>
      )
   })
   onRetryClick = () => {}
   render() {
      const {
         getUserMealPreferenceDetailsAPIStatus,
         getUserMealPreferenceDetailsAPIError
      } = this.props

      const LoadingWrapperWithFailureProps = {
         apiError: getUserMealPreferenceDetailsAPIError,
         apiStatus: getUserMealPreferenceDetailsAPIStatus,
         renderSuccessUI: this.renderUserSelectedMealPreferenceDetails,
         onRetryClick: this.onRetryClick
      }
      return (
         <MealPreferenceCardMainContainer>
            <MealPreferenceCardContainer>
               <LoadingWrapperWithFailure {...LoadingWrapperWithFailureProps} />
            </MealPreferenceCardContainer>
         </MealPreferenceCardMainContainer>
      )
   }
}

export default withTranslation('translation')(MealPreferenceCard)
