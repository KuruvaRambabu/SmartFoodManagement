import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { MealTypeContainer } from '../MealCardDetails/styledComponents'
import { observable } from 'mobx'

import {
   MealTabsMainContainer,
   MealTabsContainer,
   MealTabsAndDateContainer,
   MealTypeButtonStyles
} from './styledComponents'
import DatePicker from '../../../../Common/components/DatePicker/DatePicker'
import Button from '../../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { observer } from 'mobx-react'

interface MealTabsProps {
   selectedMealType: string
   t: any
   onChangeMealType: (event: any) => void
}

@observer
class MealTabs extends Component<MealTabsProps> {
   render() {
      const { onChangeMealType, t, selectedMealType } = this.props
      return (
         <MealTabsMainContainer>
            <MealTabsAndDateContainer>
               <MealTabsContainer>
                  <Button
                     onClick={onChangeMealType}
                     type={
                        selectedMealType === 'fullMeal'
                           ? Button.buttonType.filled
                           : Button.buttonType.outline
                     }
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     id='fullMeal'
                     buttonStyles={MealTypeButtonStyles}
                     name={t('userDashboardModule:fullMeal')}
                  />
                  <Button
                     onClick={onChangeMealType}
                     type={
                        selectedMealType === 'halfMeal'
                           ? Button.buttonType.filled
                           : Button.buttonType.outline
                     }
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     id='halfMeal'
                     buttonStyles={MealTypeButtonStyles}
                     name={t('userDashboardModule:halfMeal')}
                  />
                  <Button
                     onClick={onChangeMealType}
                     type={
                        selectedMealType === 'custom'
                           ? Button.buttonType.filled
                           : Button.buttonType.outline
                     }
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     buttonStyles={MealTypeButtonStyles}
                     id='custom'
                     name={t('userDashboardModule:custom')}
                  />
               </MealTabsContainer>

               <DatePicker />
            </MealTabsAndDateContainer>
         </MealTabsMainContainer>
      )
   }
}

export default MealTabs
