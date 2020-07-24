import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { MealTypeContainer } from '../MealCardDetails/styledComponents'
import { observable } from 'mobx'

import {
   MealTabsMainContainer,
   FullMealTabContainer,
   HalfMealTabContainer,
   CustomMealTabContainer,
   FullMealTabText,
   HalfMealTabText,
   CustomMealTabText,
   MealTabsContainer,
   MealTabsAndDateContainer,
   MealTypeButtonStyles,
   MealTypeButtons
} from './styledComponents'
import DatePicker from '../../../../Common/components/DatePicker/DatePicker'
import Button from '../../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskSemiBold } from '../../../../Common/styleGuide/Typos'
import { observer } from 'mobx-react'

interface MealTabsProps {
   selectedMealType: string
   onChangeMealType: (event: any) => void
}

@observer
class MealTabs extends Component<MealTabsProps> {
   render() {
      const { onChangeMealType } = this.props
      return (
         <MealTabsMainContainer>
            <MealTabsAndDateContainer>
               <MealTabsContainer>
                  <Button
                     onClick={onChangeMealType}
                     type={Button.buttonType.outline}
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     id='fullMeal'
                     buttonStyles={MealTypeButtonStyles}
                     name={'Full meal'}
                  />
                  <Button
                     onClick={onChangeMealType}
                     type={Button.buttonType.outline}
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     id='halfMeal'
                     buttonStyles={MealTypeButtonStyles}
                     name={'Half meal'}
                  />
                  <Button
                     onClick={onChangeMealType}
                     type={Button.buttonType.outline}
                     typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                     id='custom '
                     buttonStyles={MealTypeButtonStyles}
                     name={'custom'}
                  />
               </MealTabsContainer>

               <DatePicker />
            </MealTabsAndDateContainer>
         </MealTabsMainContainer>
      )
   }
}

export default MealTabs
