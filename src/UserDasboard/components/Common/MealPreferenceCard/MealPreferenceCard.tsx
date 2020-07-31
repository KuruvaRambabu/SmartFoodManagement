import React, { Component } from 'react'

import {
   MealPreferenceCardMainContainer,
   MealPreferenceCardContainer,
   PreferenceMealType,
   PreferenceMealTypeContainer,
   SkipMealButtonStyles,
   MealTabAndDateContainer,
   RenderUserSelectedMealPreferenceDetailsMainContainer
} from './styledComponents'
import { UpdateMealPreferenceAndBackButtons } from '../UpdateMealPreferenceAndBackButtons'
import MealTabs from '../MealTabs/MealTabs'
import Button from '../../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { PreferenceItems } from '../PreferenceItems'
import { MealTabsContainer } from '../MealTabs/styledComponents'
import UserSelectedMealPreferenceModel from '../../../stores/models/UserSelectedMealPreferenceModel/UserSelectedMealPreferenceModel'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
interface MealPreferenceCardProps extends WithTranslation {}
interface MealPreferenceCardProps {
   mealType: string
   getUserMealPreferenceDetailsData: Array<UserSelectedMealPreferenceModel>
   getUserMealPreferenceDetailsAPIStatus: APIStatus
   getUserMealPreferenceDetailsAPIError: Error | null
   selectedMealDate: Date
   onChangeMealDate: (Date: Date) => void
}

@observer
class MealPreferenceCard extends Component<MealPreferenceCardProps> {
   onClickSkipMeal = () => {}

   renderUserSelectedMealPreferenceDetails = observer(() => {
      const { mealType, selectedMealDate, onChangeMealDate, t } = this.props
      const { getUserMealPreferenceDetailsData } = this.props
      return (
         <RenderUserSelectedMealPreferenceDetailsMainContainer>
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
                  />
               </MealTabsContainer>
               <PreferenceItems
                  onChangeMealDate={onChangeMealDate}
                  selectedMealDate={selectedMealDate}
               />
            </MealTabAndDateContainer>
            <UpdateMealPreferenceAndBackButtons t={t} />
         </RenderUserSelectedMealPreferenceDetailsMainContainer>
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
